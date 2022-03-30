import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TeacherHome from "./Components/TeacherHome";
// import TeacherSecond from "./Components/TeacherSecond";
// import TeacherThird from "./Components/TeacherThird";
import Home from "./Components/Home";
// import StudentHome from "./Components/StudentHome";
// import StudentSecond from "./Components/StudentSecond";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Guest from "./Components/Guest";
import Support from "./Components/Support";
import Error from "./Components/Error";
import StudentHome from "./Components/StudentHome";

function App() {
  //1. Context API
   const UserContext = createContext();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/support" element={<Support />} />
          <Route path='/studenthome' element={<StudentHome />} />
          <Route path='/teacherhome' element={<TeacherHome />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      {/* <StudentHome /> */}
      {/* <TeacherHome /> */}
      {/* <StudentSecond /> */}
      {/* <TeacherSecond /> */}
      {/* <TeacherThird /> */}
    </div>
  );
}

export default App;
