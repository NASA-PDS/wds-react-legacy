import MuiChip from '@mui/material/Chip';
import { ChipProps } from "@mui/material";

const styles = {
  tag: {
    borderRadius: '4px',
    color: '#58585B',
    border: '1px solid #58585B',
    ':hover':{
      border: '1px solid #000000',
      color: '#000000'
    }
  }
}

/**
 * A simple tag.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Tag = ({
  label = "Label"
}: ChipProps) => {
  return (
    <MuiChip 
      sx={styles.tag} 
      label={label}
    />
  );
}