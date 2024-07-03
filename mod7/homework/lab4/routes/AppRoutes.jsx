import { Route, Routes } from "react-router-dom";
import BitcoinPage from "../pages/BitcoinPage";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";


function AppRoutes(props) {

    return (
        <Routes>
            <Route index element={<Homepage {...props}/>} />
            <Route path="dash" element={<DashboardPage {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            <Route path='bitcoin' element={<BitcoinPage />} />
            <Route path="login" element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
         </Routes>
    )
}

export default AppRoutes