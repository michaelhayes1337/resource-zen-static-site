import type {} from '@mui/lab/themeAugmentation';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#6295d2',
    },
    text: {
      secondary: '#506c94',
    },
    error: {
      main: '#e0635c',
    },
  },
  typography: {
    fontFamily: ['Space Grotesk', 'sans-serif', 'Poppins'].join(','),
    fontWeightLight: 1000,
    fontWeightRegular: 1000,
    fontWeightMedium: 1000,
    fontWeightBold: 1000,
    h1: {
      fontFamily: 'Space Grotesk',
      fontSize: '3.8em',
      fontWeight: 700,
      lineHeight: 1.46,
    },
    h2: {
      fontFamily: 'Space Grotesk',
      fontSize: '3.5em',
      fontWeight: 700,
      lineHeight: 1.27,
    },
    h3: {
      fontFamily: 'Space Grotesk',
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: false, // No more ripple!
      },
      styleOverrides: {
        root: {},
      },
    },
  },
});

// https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
export default responsiveFontSizes(theme);
