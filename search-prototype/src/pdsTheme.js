import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const pdsTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#0B3D91',
        },
        red: createColor('#F64137'),
        geo: createColor('#f1d3a7'),
        text: {
            primary: '#000000',
        },
    },
    shape: {
        borderRadius: 0,
    },
    overrides: {
        MuiAppBar: {
            root: {
                boxShadow: 'none',
            },
        },
        MuiButton: {
            root: {
                boxShadow: 'none',
            },
            contained: {
                boxShadow: 'none',
            },
        },
        MuiCard: {
            root: {
                boxShadow: 'none',
            },
        },
        MuiTextField: {
            root: {
                boxShadow: 'none',
            },
        },
    },
    pdsTextField: {
        rootBorder: '#D1D1D1',
        hoverBorder: '#959599',
        focusBorder: '#1C67E3',
        iconColor: '#959599'
    },
});

export default pdsTheme;