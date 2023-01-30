import React from 'react';
import { styled } from '@mui/material/styles';
import MaterialTextField from '@mui/material/TextField';

const CustomTextField = styled(MaterialTextField)(({ theme }) => ({
  '& label.Mui-focused': {
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.pdsTextField.rootBorder,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.pdsTextField.rootBorder,
      borderRadius: '2px'
    },
    '&:hover fieldset': {
      borderColor: theme.pdsTextField.hoverBorder,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.pdsTextField.focusBorder,
    },
    input: {
      padding: '14px 16px',
      paddingLeft: 0
    },
    label: {
    },
    '& .MuiInputAdornment-root': {
      color: theme.pdsTextField.iconColor
    }
  }
}));

const TextField = (props) => {
  return (
    <CustomTextField
      id="outlined-start-adornment2"
      placeholder={props.placeholder}
      InputProps={props.InputProps}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      value={props.value}
      fullWidth
    />
  );
}

export default TextField;