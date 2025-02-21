import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./PAGES/LandingPage";
import UserLogged from "./PAGES/UserLogged";
import Card from "./props/Card";
import RegCourse from "./props/RegCourse";
import Dashboard from "./PAGES/Dashboard";
import Question from "./PAGES/Question";

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

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/question" element={<Question/>} />
      </Routes>
    </>
  );
}

export default App;
