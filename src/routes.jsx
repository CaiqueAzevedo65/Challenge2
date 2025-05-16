import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Project from "./pages/Project";
import Configurations from "./pages/Configurations";
import Historico from "./pages/Histórico";


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
