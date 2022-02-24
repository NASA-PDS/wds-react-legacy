import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from "@material-ui/core/styles";
import rootActions from "./actions/rootActions";
import {Alert} from "@material-ui/lab";
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
	alert: {
		'& .MuiAlert-message':{
			marginLeft: "auto",
			marginRight: "auto"
		},
		marginLeft: "auto",
		marginRight: "auto"
	},
	tableContainer: {
		maxHeight: 'calc(100vh - 375px)',
	},
	tableHeader: {
		'& th': {
			fontWeight: 'bold',
		},
	},
	tablePagination: {
		backgroundColor: '#fafafa',
		width: '100%'
	},
	alignLeft: {
		textAlign: 'left',
		alignSelf: 'flex-start'
	},
	fillWidth: {
		width: '100%'
	},
	popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: theme.spacing(1),
	},
}));

const SearchResults = (props) => {
	const classes = useStyles();
	let history = props.history;
	
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const [popoverMessage, setPopoverMessage] = useState(null);

	const handlePopoverOpen = (event) => {
		let popoverMessage = getStatusPopoverMessage(event.currentTarget.innerHTML);
		setPopoverMessage(popoverMessage);
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

  	const open = Boolean(anchorEl);

	const data = useSelector(state => {
		return state.appReducer.searchResponse;
	});

	const parentData = useSelector(state => {
		return state.appReducer.parentSearchResponse;
	});

	const searchIdentifier = useSelector(state => {
		return state.appReducer.searchIdentifier;
	});
	
	
	const handleReleaseClick = (lidvid) => {
		history.push("/release/" + lidvid);
		dispatch(rootActions.appAction.setIsReleasing({"page": true, "identifier": lidvid}));
		dispatch(rootActions.appAction.resetSearch());
		dispatch(rootActions.appAction.sendLidvidSearchRequest(lidvid));
	};

	const massageStatus = (string) => {
		if (string === "review") {
			return "In " + capitalizeWord(string);
		} else {
			return capitalizeWord(string);
		}
	};

	const capitalizeWord = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const getStatusPopoverMessage = (string) => {
		string = string.toLowerCase();
		if(string === "findable"){
			return 'This DOI can be found at doi.org';
		}
		else if(string === "registered"){
			return 'This DOI has been registered but not yet released';
		}
		else{
			return '';
		}
	}

	const determineDoiLink = (status, doi, fieldValue) => {
		if (typeof fieldValue == 'undefined') { // field is DOI
			if (doi) return createTableCell(status, doi, doi);
			else return <TableCell>-</TableCell>;
		} else {	// field is LIDVID
			return createTableCell(status, doi, fieldValue);
		}
	}
	
	const createTableCell = (status, doi, fieldValue) => {
		if (status.toLowerCase() === 'findable')
			return createDoiLink(doi, fieldValue);
		else
			return fieldValue;
	}
	
	const createDoiLink = (doi, fieldValue) => {
		return <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">{fieldValue}</a>
	}
	
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div className={classes.fillWidth}>
			{data ?
				data.errors ?
					<div>
						<Alert icon={false} severity="error" className={classes.alert}>
							{data.errors[0].message}
						</Alert>
						{parentData && parentData.length > 0?
							<div>
								<br/>
								<Typography variant="h6">
									Parent Data Set DOI(s)
								</Typography>
								<div>
									<Popover
										id="mouse-over-popover2"
										className={classes.popover}
										classes={{
											paper: classes.paper,
										}}
										open={open}
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
										onClose={handlePopoverClose}
										disableRestoreFocus
									>
										<Typography>
											{popoverMessage}
										</Typography>
									</Popover>

									<TableContainer className={classes.tableContainer}>
										<Table size="small" aria-label="a dense, sticky, paginated table" stickyHeader>
											<TableHead className={classes.tableHeader}>
												<TableRow>
													<TableCell>DOI</TableCell>
													<TableCell>Identifier</TableCell>
													<TableCell>Title</TableCell>
													<TableCell>Status</TableCell>
													{props.showActions? <TableCell>Action</TableCell> : ''}
												</TableRow>
											</TableHead>
											<TableBody>
												{
													parentData.map((dataItem) => {
														return (
															<TableRow hover key={dataItem.identifier}>
															<TableCell>{determineDoiLink(dataItem.status, dataItem.doi)}</TableCell>
															<TableCell>{determineDoiLink(dataItem.status, dataItem.doi, dataItem.identifier)}</TableCell>
															<TableCell>{dataItem.title}</TableCell>
															<TableCell>
																{	
																	<div>
																		<Typography
																			aria-owns={open ? 'mouse-over-popover' : undefined}
																			aria-haspopup="true"
																			onMouseEnter={handlePopoverOpen}
																			onMouseLeave={handlePopoverClose}
																			value="ely"
																		>
																			{massageStatus(dataItem.status.toLowerCase())}
																		</Typography>
																	</div>
																}
															</TableCell>
															{props.showActions?
																<TableCell>{(() => {
																	switch (dataItem.status.toLowerCase()) {
																		case 'draft':
																		case 'reserved':
																			return (
																					<Button color="primary"
																									variant="contained"
																									onClick={(event) => handleReleaseClick(dataItem.identifier)}
																					>
																						Release
																					</Button>
																			);
																		case 'registered':
																			return (
																					<Button color="primary"
																									variant="contained"
																									onClick={(event) => handleReleaseClick(dataItem.identifier)}
																					>
																						Update
																					</Button>
																			);
																		case 'findable':
																			return (
																					<Button color="primary"
																									variant="contained"
																									onClick={(event) => handleReleaseClick(dataItem.identifier)}
																					>
																						Update
																					</Button>
																			);
																		case 'review':
																			return (
																					<Button disabled
																									variant="contained"
																					>
																						Pending
																					</Button>
																			);
																		default:
																			return '-';
																	}
																})()}</TableCell>
															:
															''
															}
															</TableRow>
														);
													})
												}
											</TableBody>
										</Table>
									</TableContainer>
									</div>
								</div>
							:
							''
						}
					</div>
					:
					<div>
						<Popover
							id="mouse-over-popover"
							className={classes.popover}
							classes={{
								paper: classes.paper,
							}}
							open={open}
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							onClose={handlePopoverClose}
							disableRestoreFocus
						>
							<Typography>
								{popoverMessage}
							</Typography>
						</Popover>

						{data.length === 1 ?
							<Typography className={classes.alignLeft}>1 result found</Typography>
								:
							<Typography className={classes.alignLeft}>{data.length} results found</Typography>
						}

						<TableContainer className={classes.tableContainer}>
							<Table size="small" aria-label="a dense, sticky, paginated table" stickyHeader>
								<TableHead className={classes.tableHeader}>
									<TableRow>
										<TableCell>DOI</TableCell>
										<TableCell>Identifier</TableCell>
										<TableCell>Title</TableCell>
										<TableCell>Status</TableCell>
										{props.showActions? <TableCell>Action</TableCell> : ''}
									</TableRow>
								</TableHead>
								<TableBody>
									{
										(rowsPerPage > 0 ?
											data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
											:
											data
										).map((dataItem) => {
											return (
												<TableRow hover key={dataItem.identifier}>
												<TableCell>{determineDoiLink(dataItem.status, dataItem.doi)}</TableCell>
												<TableCell>{determineDoiLink(dataItem.status, dataItem.doi, dataItem.identifier)}</TableCell>
												<TableCell>{dataItem.title}</TableCell>
												<TableCell>
													{	
														<div>
															<Typography
																aria-owns={open ? 'mouse-over-popover' : undefined}
																aria-haspopup="true"
																onMouseEnter={handlePopoverOpen}
																onMouseLeave={handlePopoverClose}
																value="ely"
															>
																{massageStatus(dataItem.status.toLowerCase())}
															</Typography>
														</div>
													}
												</TableCell>
												{props.showActions?
													<TableCell>{(() => {
														switch (dataItem.status.toLowerCase()) {
															case 'draft':
															case 'reserved':
																return (
																		<Button color="primary"
																						variant="contained"
																						onClick={(event) => handleReleaseClick(dataItem.identifier)}
																		>
																			Release
																		</Button>
																);
															case 'registered':
																return (
																		<Button color="primary"
																						variant="contained"
																						onClick={(event) => handleReleaseClick(dataItem.identifier)}
																		>
																			Update
																		</Button>
																);
															case 'findable':
																return (
																		<Button color="primary"
																						variant="contained"
																						onClick={(event) => handleReleaseClick(dataItem.identifier)}
																		>
																			Update
																		</Button>
																);
															case 'review':
																return (
																		<Button disabled
																						variant="contained"
																		>
																			Pending
																		</Button>
																);
															default:
																return '-';
														}
													})()}</TableCell>
												:
												''
												}
												</TableRow>
											);
										})
									}
								</TableBody>
							</Table>
						</TableContainer>
						{data.length > rowsPerPage && (
							<TablePagination
								className={classes.tablePagination}
								rowsPerPageOptions={[10, 20, 50, {label: 'All', value: -1}]}
								component="div"
								count={data.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onChangePage={handleChangePage}
								onChangeRowsPerPage={handleChangeRowsPerPage}
							/>
						)}
					</div>
				
				:
				''
			}
		</div>
	)
};

export default SearchResults;
