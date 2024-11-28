import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f9f2f4',
      light: '#f9f2f4',
      dark: '#fdc5d9',
      contrastText: '#710026',
    },
    secondary: {
      main: '#c5fde9',
      light: '#f1fffa',
      dark: '#00dfa6',
      contrastText: '#2e5841',
    },
    success: {
      main: '#fdc5d9',
      light: '#fff3f7',
      dark: '#ffa0c0',
      contrastText: '#710026',
    },
    warning: {
      main: '#710026',
      light: '#f1fffa',
      dark: '#ffa0c0',
      contrastText: '#710026',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#710026',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiInputBase-input': {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: theme.palette.primary.contrastText,
          },
          '& .MuiInputLabel-root': {
            fontSize: '1rem',
          },
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiSlider-markLabel': {
            color: theme.palette.warning.contrastText,
          },
          marginBottom: 0,
        }),
      },
    },
  },
});

export default theme;
