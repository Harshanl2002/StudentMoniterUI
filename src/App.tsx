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
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function App() {
  let Logedin =false; 
  return (
    <OverlayScrollbarsComponent>
    <div className="min-h-screen bg-primary scrollbar scrollbar-primary">
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
    </OverlayScrollbarsComponent>

  )
}
