import MaterialBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { BreadcrumbsProps } from "@mui/material";

const styles = {
    breadcrumbs: {
        color: '#959599'
    },
    link: {
        "&:hover": {
            color: "#000000",
            textDecoration: "underline dashed #000000"
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
export const Breadcrumbs = ({
    ...otherProps
  }: BreadcrumbsProps) => {
    return (
        <MaterialBreadcrumbs sx={styles.breadcrumbs} {...otherProps}>
            <Link sx={styles.link}
                underline="hover"
                color="inherit"
                href="/"
            >
                PDS
            </Link>
            <Link sx={styles.link}
                underline="hover" 
                color="inherit"
                href="/"
            >
                Home
            </Link>
            <Typography 
                color="text.primary"
            >
                Search Results
            </Typography>
        </MaterialBreadcrumbs>
    );
}