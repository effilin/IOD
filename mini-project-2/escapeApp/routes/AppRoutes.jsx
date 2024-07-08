import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage.jsx"
import LoginPage from "../pages/LoginPage.jsx";
import PuzzlePage from "../pages/puzzlePage.jsx";

 
 function AppRoutes(props) {

    return (
        <Routes>
            <Route index element={<Homepage {...props} /> } />
            <Route path="login" element={ < LoginPage />} />
            <Route path='puzzle' element={< PuzzlePage/>} />
        </Routes>
    )
 }

 export default AppRoutes;