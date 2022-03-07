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
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Space Grotesk',
      fontSize: '3.8em',
      fontWeight: 700,
      lineHeight: 1.46,
    },
    h2: {
      fontFamily: 'Space Grotesk',
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.27,
    },
    h3: {
      fontFamily: 'Space Grotesk',
      fontSize: '34px',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '22px',
      fontWeight: '400',
    },
    subtitle2: {
      fontSize: '24px',
      fontWeight: '400',
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
