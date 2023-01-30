import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const PdsChip = styled(Chip)(({ theme }) => ({
  borderRadius: '4px',
  color: '#58585B',
  border: '1px solid #58585B',
  ':hover':{
    border: '1px solid #000000',
    color: '#000000'
  }
}));

const Tag = (props) => {
  return (
    <div>
      <PdsChip label={props.label} color={props.color} variant={props.variant}/>
    </div>
  );
}

export default Tag;