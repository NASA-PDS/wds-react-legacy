import React, { useState } from 'react';
import MaterialPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const PdsPagination = styled(MaterialPagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
        borderRadius: '4px',
        '&.Mui-selected': {
            color: '#1C67E3',
            borderColor: '#1C67E3',
            backgroundColor: 'white'
        },
        '&.Mui-focusVisible': {
            color: '#1C67E3',
            borderColor: '#1C67E3',
        },
        ':hover':{
            border: '2px solid #000000',
            color: '#1C67E3',
            borderColor: '#1C67E3',
        }
     }
  }));

const Pagination = (props) => {
  return (
    <Stack spacing={2}>
      <PdsPagination variant="outlined" shape="rounded" {...props}/>
    </Stack>
  );
}

export default Pagination;