import React, { useState } from 'react';
import Chip from '../Chip/Chip';
import Filter from './Filter';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const titleCase = (string) => {
  let casedString = [];

  let splitString = string.toLowerCase().split(' ');
  splitString.forEach(str => {
    casedString.push(str.charAt(0).toUpperCase() + str.substring(1));
  });

  return casedString.join(' ');
}

const Filters = (props) => {
  const [options, setOptions] = useState(props.options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const getFilterOptions = (filter) => {
    let filterOptions = options.filter(
      option => filter.name === option.filterName && option.isSelected === false
    );
    return filterOptions;
  }
 
  const handleSelectOption = (selectedOption) => {
    let option = options.find(option => option === selectedOption);
    option.isSelected = true;

    let newSelected = [...selectedOptions];
    newSelected.push(selectedOption);
    setSelectedOptions(newSelected);
  }

  const handleRemoveOption = (selectedOption) => {
    let option = options.find(option => option === selectedOption);
    option.isSelected = false;

    let newSelectedOptions = selectedOptions.filter(option => option !== selectedOption);
    setSelectedOptions(newSelectedOptions);
  }

  const clearFilters = () => {
    options.forEach(option => {
      option.isSelected = false;
    });
    setSelectedOptions([]);
  }

  let filters = props.filters.map((filter, index) => (
    <Filter
      key={index} 
      filter={filter} 
      filterOptions={getFilterOptions(filter)} 
      handleSelectOption={handleSelectOption}
    />
  ));

  return (
    <div>
      <Typography fontWeight='fontWeightMedium'>
        Active Filters
      </Typography>
    
      <Divider sx={{marginBottom:'5px'}}/>

      {selectedOptions.map((option, index) => (
        <Box sx={{marginBottom:'5px'}}>
          <Chip 
            key={index} 
            label={titleCase(option.optionName)} 
            handleDelete={() => handleRemoveOption(option)}
          />
        </Box>
      ))}

      <Box
        sx={{
          cursor: 'pointer', 
          textDecoration: 'underline dotted',
          color:'#58585a'
        }} 
        onClick={clearFilters}
      >
          Clear Filters
      </Box>

      <Typography 
        fontWeight='fontWeightMedium' 
        sx={{marginTop:'5px'}}
      >
          Filters
      </Typography>

      <Divider sx={{marginBottom:'5px'}}/>

      {filters}
    </div>
  );
}

export default Filters;