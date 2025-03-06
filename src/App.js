import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./PAGES/LandingPage";
import UserLogged from "./PAGES/UserLogged";
import Card from "./props/Card";
import RegCourse from "./props/RegCourse";
import Dashboard from "./PAGES/Dashboard";
import Question from "./PAGES/Question";
import WebPage from "./PAGES/WebPage";
import Notfound from "./PAGES/Notfound";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* route with nested */}
        <Route path="/userLoggedIn" element={<UserLogged />}>
          <Route index element={<Card />} />
          <Route path="all-courses" element={<Card />} />
          <Route path="continue-learning" element={<RegCourse />} />
        </Route>

        <Route path="/landing" element={<WebPage/>}>
          <Route index element={<Card/>}/>
          <Route path="explore-courses" element={<Card />}/>
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/question" element={<Question/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
      
      <ToastContainer/>

    </>
  );
}

export default App;
