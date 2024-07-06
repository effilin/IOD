import Header from '../components/header'
import { UserProvider } from '../context/nameContext'
import AppRoutes from '../routes/AppRoutes'
import './App.css'

function App() {
 

  return (
    <>
    <UserProvider>
      <Header />
      <AppRoutes />
    </UserProvider> 
    </>
  )
}

export default App
