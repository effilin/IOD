import { Grid } from '@mui/material';
import Header from '../components/header';
import { UserProvider } from '../context/nameContext';
import AppRoutes from '../routes/AppRoutes';
import './App.css';
import { firstTheme } from '../themes/firstTheme';
import { ThemeProvider } from '@emotion/react';

function App() {
 

  return (
    <>
    <UserProvider>
      <ThemeProvider theme={firstTheme}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <AppRoutes />
        </Grid>
      </Grid>
      </ThemeProvider>
    </UserProvider> 
    </>
  )
}

export default App
