import {Routes, Route  } from "react-router-dom";
import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import Jobsection_Dashboard from './component/JobSection/jobsection_dashboard';
import About from './component/About';
import Dasboard from './component/Dashboard'
import Create_resume from './component/Create_resume';
import Body from './resume_components/Body/Body'
import Place_wipro from './component/JobSection/Placements/Place_wipro';
import Place_tcs from './component/JobSection/Placements/Place_tcs';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
const App = () => {
    return (
        <UserAuthContextProvider>
                <NavBar />
                <Routes>
                    <Route path='/home' element={<HomePage />}></Route>
                    <Route path='/jobsection_dashboard' element={<Jobsection_Dashboard />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='dashboard' element={<Dasboard />} />
                    <Route path='/create_resume' element={<Create_resume />}></Route>
                    <Route path='/body' element={<Body />}></Route>
                    <Route path='/place_wipro' element={<Place_wipro />}></Route>
                    <Route path='/place_tcs' element={<Place_tcs />}></Route> 
                </Routes>
        </UserAuthContextProvider>
    );
}
export default App;


