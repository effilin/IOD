import{ createTheme } from '@mui/material/styles'


export const synthTheme = createTheme ({
    palette:{
       primary: { main: '#003459', contrastText:'#d3d6db' },
       secondary: { main: '#028090', contrastText: '#d3d6db' }
    },
    typography: {
        fontFamily: "Bodoni Moda SC",
        fontSize: 14,
        h1:{ fontSize: 30 }
    },
    shape: { borderRadius: 5 },
    components: {
        MuiCssBaseline: {
            styleOverrides: `a { color: #3CA899; }` ,
        },
        MuiButton: { defaultProps: {variant: 'contained'}},
        MuiTextField: { defaultProps: { variant: 'filled' } }
    }
});