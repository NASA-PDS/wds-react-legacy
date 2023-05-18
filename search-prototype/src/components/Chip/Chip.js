import React from 'react';
import { styled } from '@mui/material/styles';
import MuiChip from '@mui/material/Chip';
import StarsIcon from '@mui/icons-material/Stars';

const PdsChip = styled(MuiChip)(({ theme }) => ({
  borderRadius: '4px',
  color: '#58585B',
  border: '1px solid #288bff',
  ':hover':{
    border: '1px solid #288bff',
    color: '#000000'
  }
}));

const Chip = (props) => {
  const handleDelete = () => {
    props.handleDelete();
  };

  return (
    <div>
      <PdsChip label={props.label} variant="outlined" onDelete={handleDelete} deleteIcon={<StarsIcon />}/>
    </div>
  );
}

export default Chip;