import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import { Tag } from '../Tag';

export type FeaturedLinkListItemProps = {
  variant : 'data' | 'documentation' | 'tool',
  title: string,
  description: string,
  startDateTime: string,
  stopDateTime: string,
  lid: string,
  version: string,
}

export const FeaturedLinkListItem = ({
  title = '',
  variant = 'data',
  description = '',
  startDateTime = '',
  stopDateTime = '',
  lid = '',
  version = ''
}: FeaturedLinkListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResultDetailsClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid xs={1}>
          <IconButton aria-label="arrow" onClick={handleResultDetailsClick}>
            <StarsIcon />
          </IconButton>
        </Grid>
        <Grid xs={8}>
          <Stack alignItems="left" gap={1}>
            <Typography variant="subtitle2" display="inline">
              {title}
            </Typography>

            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Typography variant="body1" display="block" color='red'>
            {variant}
          </Typography>
        </Grid>
        <Grid xs={1}>
          <IconButton aria-label="arrow">
            <StarsIcon />
          </IconButton>
        </Grid>
      </Grid>

      {isOpen?
          variant === 'data'?
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
                    <Typography>{startDateTime}</Typography>
                  </Grid>
                </Stack>
                <Stack direction="row" alignItems="left" gap={1}>
                  <Grid xs={2}>
                    <Typography fontWeight='fontWeightMedium'>End</Typography>
                  </Grid>
                  <Grid xs={10}>
                    <Typography>{stopDateTime}</Typography>
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
            variant === 'documentation'?
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
                      <Typography sx={{overflowWrap: 'break-word'}}>{lid}</Typography>
                    </Grid>
                  </Stack>
                  <Stack direction="row" alignItems="left" gap={1}>
                    <Grid xs={2}>
                      <Typography fontWeight='fontWeightMedium'>Version</Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography>{version}</Typography>
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
             variant === 'tool'?
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