import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarsIcon from '@mui/icons-material/Stars';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const Sorting = (props) => {
  const [sortType, setSortType] = useState('RELEVANCE');

  const handleSortTypeChange = (event) => {
    setSortType(event.target.value);
  }

  return (
    <Box key={props.index} sx={{display:'flex', alignItems: 'center', justifyContent: 'right'}}> 
      <FormControl>
        <Typography>SORT: </Typography>
      </FormControl>

      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          onChange={handleSortTypeChange}
          variant="standard"
          disableUnderline
        >
          <MenuItem value={'RELEVANCE'}>RELEVANCE</MenuItem>
          <MenuItem value={'ASCENDING'}>ASCENDING</MenuItem>
          <MenuItem value={'DESCENDING'}>DESCENDING</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Typography> VIEW: </Typography>
      </FormControl>

      <FormControl>
        <IconButton aria-label="arrow">
            <StarsIcon/>
        </IconButton>
      </FormControl>

      <FormControl>
        <IconButton aria-label="arrow">
            <StarsIcon/>
        </IconButton>
      </FormControl>

    </Box>
  );
}

export default Sorting;