import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import 'overlayscrollbars/overlayscrollbars.css';

export default function App() {
  let Logedin =false; 
  return (
    <div className="h-full overscroll-auto">
        <BrowserRouter >
        <Header/>
          <Routes >
            <Route path="/" Component={Home} />
            <Route path="/About" Component={About} />
            <Route path="/Login" Component={Login} />
            <Route path="/Signup" Component={Signup} />
            <Route path="/Profile" Component={Profile} />
            <Route path="/Contact" Component={Contact} />
            <Route path="/Home" Component={Logedin?Dashboard:Home}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}
