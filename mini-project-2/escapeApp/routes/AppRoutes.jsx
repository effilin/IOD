import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage.jsx"
import LoginPage from "../pages/LoginPage.jsx";

 
 function AppRoutes(props) {

    return (
        <Routes>
            <Route index element={<Homepage {...props} /> } />
            <Route path="login" element={ < LoginPage />} />
        </Routes>
    )
 }

 export default AppRoutes;