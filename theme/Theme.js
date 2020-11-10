import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
    type: 'dark',
    primary: {
        main: '#12181e',
        light: '#B5DCFB',
    },
    secondary: {
        main: '#192028',
    },
    accent: {
        main: '#b5dcfb',
        secondary: '#fee24a',
    },
    text: {
        primary: '#fdfdfd',
        secondary: '#ededed',
        accent: '#12181e',
    },
    swatches: {
        blue: {
            blue600: '#1390F3',
            blue700: '#0B7ED9',
            blue800: '#0A6BB9',
            blue900: '#085898',
        },
        grey: {
            grey100: '#EEEEEF',
            grey700: '#282F36',
            grey800: '#192028',
        },
        yellow: {
            yellow700: '#FBC02D',
        },
    },
};

const Theme = createMuiTheme({
    palette,
    overrides: {
        MuiBadge: {
            colorPrimary: {
                backgroundColor: palette.accent.secondary,
            },
        },
        MuiTabs: {
            root: {
                minHeight: '42px',
            },
        },
        MuiTab: {
            root: {
                minHeight: '42px',
            },
        },
    },
});

export default Theme;