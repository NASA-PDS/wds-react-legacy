import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import Tag from '../Tag/Tag';


const FeaturedLinkListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResultDetailsClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Box key={props.index}>
      <Grid container spacing={2} alignItems="center">
        <Grid xs={1}>
          <IconButton aria-label="arrow" onClick={handleResultDetailsClick}>
            <StarsIcon />
          </IconButton>
        </Grid>
        <Grid xs={8}>
          <Stack alignItems="left" gap={1}>
            <Typography variant="subtitle2" display="inline">
              {props.result.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Typography variant="body1" display="block" color='red'>
            DATA*
          </Typography>
        </Grid>
        <Grid xs={1}>
          <IconButton aria-label="arrow" color="red">
            <StarsIcon />
          </IconButton>
        </Grid>
      </Grid>
      {isOpen?
        <Grid 
          container 
          spacing={2} 
          alignItems="center" 
          sx={{
            background:'#F6F6F6',
            margin: 0
          }}
        >
          <Grid xs={1}>
          </Grid>
          <Grid xs={11}>
            <Typography>Search or browse for data and science information from the Mars Science Laboratory Rover Curiosity*</Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography>Tags*</Typography>
              <Tag label="PDS3" color="primary" variant="outlined"/>
              <Tag label="Analysis" color="primary" variant="outlined"/>
              <Tag label="Search" color="primary" variant="outlined"/>
              <Tag label="Dissemination" color="primary" variant="outlined"/>
              <Tag label="GUI" color="primary" variant="outlined"/>
            </Stack>
          </Grid>
        </Grid>
        :
        ""
      }
      <Divider/>
    </Box>
  );
}

export default FeaturedLinkListItem;