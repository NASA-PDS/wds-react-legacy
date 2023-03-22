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

  const getType = (result) => {
    console.log("result", result);

    var type = "Undefined";
    if(result.type){
      if(result.type === "Product_Collection"){
        type = 'DATA';
      }
      if(result.type === "Product_Document"){
        type = "DOCUMENTATION";
      }
    }

    if(!result.type && result.objectType){
      if(result.objectType === "Product_Service"){
        type = "TOOL";
      }
    }

    return type;
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
              {props.result.data_product_type?
                props.result.data_product_type[0] === 'Service'?
                  props.result.description[0]
                  :
                  ''
                :
                props.result.properties.description[0]
              }
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Typography variant="body1" display="block" color='red'>
            {getType(props.result)}
          </Typography>
        </Grid>
        <Grid xs={1}>
          <IconButton aria-label="arrow" color="red">
            <StarsIcon />
          </IconButton>
        </Grid>
      </Grid>

      {isOpen?
          getType(props.result) === 'DATA'?
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
                <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>DOI</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography sx={{overflowWrap: 'break-word'}}>Doesn't Exist In JSON</Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>References</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography>Format is different in JSON</Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>Start</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography>{props.result.start_date_time}</Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>End</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography>{props.result.stop_date_time}</Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>Tags*</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Tag label="PDS3" color="primary" variant="outlined"/>
                      <Tag label="Analysis" color="primary" variant="outlined"/>
                      <Tag label="Search" color="primary" variant="outlined"/>
                      <Tag label="Dissemination" color="primary" variant="outlined"/>
                      <Tag label="GUI" color="primary" variant="outlined"/>
                    </Stack>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
            :
            getType(props.result) === 'DOCUMENTATION'?
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
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>LID</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography sx={{overflowWrap: 'break-word'}}>{props.result.properties.lid[0]}</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>Version</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography>{props.result.metadata.version}</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>Start Date</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography>Doesn't Exist In JSON</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>Stop Date</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography>Doesn't Exist In JSON</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>Mission Type</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography>Doesn't Exist In JSON</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>Mission Phase</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography>Doesn't Exist In JSON</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>Tags*</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Tag label="PDS3" color="primary" variant="outlined"/>
                      <Tag label="Analysis" color="primary" variant="outlined"/>
                      <Tag label="Search" color="primary" variant="outlined"/>
                      <Tag label="Dissemination" color="primary" variant="outlined"/>
                      <Tag label="GUI" color="primary" variant="outlined"/>
                    </Stack>
                  </Grid>
                </Stack>
                </Grid>
              </Grid>
              :
              getType(props.result) === 'TOOL'?
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
        :
        ""
      }
      <Divider/>
    </Box>
  );
}

export default FeaturedLinkListItem;