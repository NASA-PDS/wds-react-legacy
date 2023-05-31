import React from 'react';
import MaterialBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Breadcrumbs = () => {
    function handleClick(event) {
        event.preventDefault();
    }

    return (
        <div role="presentation" onClick={handleClick}>
            <MaterialBreadcrumbs aria-label="breadcrumb">
                <Link 
                    underline="hover" 
                    color="inherit" 
                    href="/"
                >
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Search Results
                </Link>
            </MaterialBreadcrumbs>
        </div>
    );
}

export default Breadcrumbs;