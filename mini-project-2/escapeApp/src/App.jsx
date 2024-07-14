import { Grid } from '@mui/material';
import Header from '../components/header';
import { UserProvider } from '../context/nameContext';
import AppRoutes from '../routes/AppRoutes';
import './App.css';
import { Footer } from '../components/footer/footer';
import { blueTheme } from '../themes/blueTheme';
import { ThemeProvider } from '@mui/material/styles';
import { synthTheme } from '../themes/sythwaveTheme';


function App() {


  return (
    <>
    <UserProvider>
      <ThemeProvider theme={synthTheme}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <AppRoutes />
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <Footer />
        </Grid>
      </Grid>
      </ThemeProvider>
    </UserProvider> 
    </>
  )
}

export default App
