import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results/Results";
import Project from "./pages/Project/Project";
import Configurations from "./pages/Configurations/Configurations";
import Historico from "./pages/Historico/Historico";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/Results" element={ <Results/> }></Route>
                <Route path="/Projects" element={ <Project/> }></Route>
                <Route path="/Configurations" element={ <Configurations/> }></Route>
                <Route path="/Historico" element={ <Historico/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
