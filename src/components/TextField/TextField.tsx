import MaterialTextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';

const styles = {
  textField: {
    '& label.Mui-focused': {
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#D1D1D1'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor:'#D1D1D1',
        borderRadius: '2px'
      },
      '&:hover fieldset': {
        borderColor:'#959599'
      },
      '&.Mui-focused fieldset': {
        borderColor:'#1C67E3'
      },
      input: {
        padding: '14px 16px'
      },
      label: {
      },
      '& .MuiInputAdornment-root': {
        color: '#959599'
      }
    }
  }
}

/**
 * A simple text field.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const TextField = ({
  ...otherProps
}: TextFieldProps) => {
  return (
    <MaterialTextField
      sx={styles.textField}
      {...otherProps}
    />
  );
}