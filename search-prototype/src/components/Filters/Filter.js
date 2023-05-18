import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import StarsIcon from '@mui/icons-material/Stars';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Filter = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseClick = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div>
            <Box key={props.index}>
                <Grid 
                    container
                    spacing={2} 
                    alignItems="center"
                    sx={{paddingBottom:0}}
                >
                    <Grid xs={1} sx={{marginLeft:0, paddingLeft:0}}>
                        <IconButton 
                            aria-label="star" 
                            sx={{
                                marginLeft: 0, 
                                paddingLeft: 0
                            }}>
                            <StarsIcon />
                        </IconButton>
                    </Grid>
                    <Grid xs={9}>
                        <Typography 
                            fontWeight='fontWeightMedium'
                            sx={{color:'#58585a'}}
                        >
                            {props.filter.name.toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <IconButton 
                            aria-label="star" 
                            onClick={handleCollapseClick}
                        >
                            <StarsIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>

            {!isCollapsed?
                props.filterOptions.map((option, index) => (
                    <Box key={index}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid xs={1} sx={{marginLeft:0, paddingLeft:0}}>
                            </Grid>
                            <Grid xs={9}>
                                <Box 
                                    sx={{cursor: 'pointer'}} 
                                    onClick={() => props.handleSelectOption(option)}
                                >
                                    <Typography 
                                        fontWeight='fontWeightMedium'
                                        sx={{color:'#58585a'}}
                                    >
                                        {option.optionName.toUpperCase()}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                            </Grid>
                        </Grid>
                    </Box>
                ))
                :
                ""
            }
            <Divider/>
        </div>
    );
}

export default Filter;