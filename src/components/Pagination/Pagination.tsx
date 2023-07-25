import MaterialPagination from '@mui/material/Pagination';
import {PaginationProps} from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const styles = {
  pagination: {
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
  }
}

/**
 * A basic greeting message displayed to a user.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Pagination = ({
  count = 5,
  defaultPage = 3,
  siblingCount = 1,
  ...otherProps
}: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <MaterialPagination 
        sx={styles.pagination}
        variant="outlined" 
        shape="rounded" 
        count={count}
        defaultPage={defaultPage}
        siblingCount={siblingCount}
        {...otherProps}
      />
    </Stack>
  );
}