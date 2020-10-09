import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/pdsLogo.png';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = (theme) => ({
    titleLink: {
        marginRight: '70px',
        '&:hover':{
            textDecoration: 'none'
        }
    },
    pdsIcon: {
        padding: '5px',
        margin: '0',
        fontSize: '0'
    },
    title: {
        fontSize: '16px',
        color: 'white',
        marginLeft: '5px'
    },
    headerLogo: {
        height: '25px',
        width: '48px'
    },
    pdsBanner: {
        background: '#000000',
        height: '32px'
    },
    pdsBannerText:{
        color: '#ffffff',
        minHeight: '0',
        padding: '0px',
        fontSize: '14px'
    },
    pdsBannerSelect:{
        '&:before': {
            borderColor: '#000000'
        },
        '&:after': {
            borderColor: '#000000'
        },
        color: 'white'
    },
    whiteColor: {
        color: 'white'
    },
    nodeButton: {
        color: 'white',
        border: 'none',
        backgroundColor: 'black',
        boxShadow: 'none',
        borderRadius: '0',
        padding: '5px 0 6px 5px',
        textTransform: 'none',
        fontWeight: '400',
        height: '32px',
        '&:hover': {
            backgroundColor: 'rgb(23, 23, 23)',
            boxShadow: 'none'
        }
    },
    menuLink: {
        color: 'white',
        textDecoration: 'none'
    },
    listItemText:{
        '& .MuiTypography-body1':{
            fontSize: '12px'
        }
    },
    arrowIcon: {
        marginLeft: '40px'
    },
    infoIcon: {
        height: '17px',
        width: '17px'
    },
    infoButton: {
        padding: '0 0 0 5px'
    },
    infoPopover:{
        pointerEvents: 'none'
    },
    infoText: {
        fontSize: '12px'
    },
    listItemTextFirst: {
        height:'0',
        margin:'0'
    }
});

const StyledMenu = withStyles({
    paper: {
        backgroundColor: 'black',
        borderRadius: '0 0 3px 3px',
        '& .MuiList-padding': {
            padding: '11px 5px 11px 5px'
        }
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
       '&:hover': {
            backgroundColor: 'black',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '#64B6F7',
                textDecoration: 'none'
            },
            '& .MuiLink-underlineHover': {
                textDecoration: 'none'
            }
        },
        '&:focus': {
            backgroundColor: 'black',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '#64B6F7',
                textDecoration: 'none'
            },
            '& .MuiLink-underlineFocus': {
                textDecoration: 'none'
            }
        },
        padding: '0'
    }
}))(MenuItem);

class Banner extends Component {
    state = {
        anchorEl: null,
        infoAnchorEl: null
    }

    handleNodeClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            infoAnchorEl: this.state.infoAnchorEl
        });
    };

    handleNodeClose = () => {
        this.setState({ 
            anchorEl: null,
            infoAnchorEl: this.state.infoAnchorEl
        });
    };

    handleInfoMouseEnter = (event) => {
        this.setState({
            anchorEl: this.state.anchorEl,
            infoAnchorEl: event.currentTarget
        });
    };

    handleInfoMouseLeave = () => {
        this.setState({
            anchorEl: this.state.anchorEl,
            infoAnchorEl: null
        });
    };

    handleInfoEnterOpen = (event) => {
        if (event.key === "Enter") {
            this.setState({
                anchorEl: this.state.anchorEl,
                infoAnchorEl: event.currentTarget
            });
        }
    };

    handleInfoEnterClose = (event) => {
        if (event.key === "Enter") {
            this.setState({
                anchorEl: this.state.anchorEl,
                infoAnchorEl: null
            });
        }
    };

    handleNodeSelect = (link) => {
        this.setState({
            anchorEl: null,
            infoAnchorEl: this.state.infoAnchorEl
        });
        window.location.href = link;
    };

    render() {
        const { classes } = this.props;
        const { anchorEl, infoAnchorEl } = this.state;

        return (
            <AppBar position='static' className={classes.pdsBanner}>
                <Toolbar className={classes.pdsBannerText}>
                
                    <Link
                        className={classes.titleLink}
                        href='https://pds.nasa.gov' 
                        rel='noopener'
                    >
                        <IconButton 
                            className={classes.pdsIcon}
                            edge='start' 
                            aria-label='PDS'
                        >
                            <img
                                src={logo}
                                className={classes.headerLogo}
                                alt=''
                            />
                            <Typography className={classes.title}>
                                Planetary Data System
                            </Typography>
                        </IconButton>
                    </Link>
                    
                    <IconButton
                        className={classes.infoButton}
                        edge='start' 
                        aria-label='info'
                        aria-controls='info-menu'
                        variant='contained'
                        color='primary'
                        onMouseEnter={this.handleInfoMouseEnter} 
                        onMouseLeave={this.handleInfoMouseLeave}
                        onKeyDown={this.handleInfoEnterOpen}
                    >
                        <SvgIcon className={classes.infoIcon}>
                            <path 
                                fill="white" 
                                d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                            </path>
                        </SvgIcon>
                    </IconButton>
                    <Popover
                        id="info-menu"
                        className={classes.infoPopover}
                        open={Boolean(infoAnchorEl)}
                        anchorEl={infoAnchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        transformOrigin={{
                            horizontal: 'left',
                            vertical: 'top',
                        }}
                        PaperProps={{
                            style: {
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '15px 12px 12px 12px',
                                width: '640px'
                            }
                        }}
                        onKeyDown={this.handleInfoEnterClose}
                    >
                        <Typography className={classes.infoText}>
                            <Box component='span' fontWeight='fontWeightBold'>Find a Node</Box> - Use these links to navigate to any of the 8 publicly accessible PDS Nodes.
                            <br></br>
                            <br></br>
                            This bar indicates that you are within the PDS enterprise which includes 6 science discipline nodes and 2 support nodes which are overseen by the Project Management Office at NASA's Goddard Space Flight Center (GSFC). Each node is led by an expert in the subject discipline, supported by an advisory group of other practitioners of that discipline, and subject to selection and approval under a regular NASA Research Announcement.
                        </Typography>
                    </Popover>

                    <Button
                        className={classes.nodeButton}
                        aria-controls='nodes-menu'
                        aria-haspopup='true'
                        aria-owns={anchorEl ? 'nodes': null}
                        variant='contained'
                        onClick={this.handleNodeClick}
                    >
                        Find a node
                        {anchorEl ? <ArrowDropUpIcon className={classes.arrowIcon}/> : <ArrowDropDownIcon className={classes.arrowIcon}/>}
                    </Button>

                    <StyledMenu
                        id="nodes-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleNodeClose}
                        anchorOrigin={{
                            horizontal: 'left', 
                            vertical: 'bottom'
                        }}
                        transformOrigin={{
                            horizontal: '40px'
                        }}
                        PaperProps={{
                            style: {
                                top: '36px'
                            }
                        }}
                    >
                        <StyledMenuItem>
                            <ListItemText className={classes.listItemTextFirst}/>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://pds-atmospheres.nmsu.edu')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://pds-atmospheres.nmsu.edu'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Atmospheres (ATM)'/>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://pds-geosciences.wustl.edu')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://pds-geosciences.wustl.edu'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Geosciences (GEO)'/>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://pds-imaging.jpl.nasa.gov')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://pds-imaging.jpl.nasa.gov'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Cartography and Imaging Sciences (IMG)'/>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://naif.jpl.nasa.gov/naif')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://naif.jpl.nasa.gov/naif'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Navigational and Ancillary Information (NAIF)'/>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://pds-ppi.igpp.ucla.edu')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://pds-ppi.igpp.ucla.edu'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Planetary Plasma Interactions (PPI)'/>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://pds-rings.seti.org')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://pds-rings.seti.org'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Ring-Moon Systems (RMS)'/>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => {this.handleNodeSelect('https://pds-smallbodies.astro.umd.edu')}}>
                            <Link
                                className={classes.menuLink}
                                href='https://pds-smallbodies.astro.umd.edu'
                                rel='noopener'
                            >
                                <ListItemText className={classes.listItemText} primary='Small Bodies (SBN)'/>
                            </Link>
                        </StyledMenuItem>
                    </StyledMenu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(useStyles)(Banner);