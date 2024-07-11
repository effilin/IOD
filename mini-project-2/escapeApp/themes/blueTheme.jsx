import{ createTheme } from '@mui/material/styles'


export const blueTheme = createTheme ({
    palette:{
       primary: { main: '#28615b', contrastText:'#67bac6' },
       secondary: { main: '#5edba5', contrastText: '#facf31' }
    },
    typography: {
        fontFamily: "Bodoni Moda SC",
        fontSize: 14,
        h1:{ fontSize: 30 }
    },
    shape: { borderRadius: 5 },
    components: {
        MuiCssBaseline: {
            styleOverrides: `a { color: #f99b1d; }` ,
        },
        MuiButton: { defaultProps: {variant: 'contained'}},
        MuiTextField: { defaultProps: { variant: 'filled' } }
    }
});