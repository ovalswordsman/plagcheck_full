import React, { createContext, useReducer } from "react";
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
import { initialState, reducer } from "./reducer/UseReducer";
import Logout from "./Components/Logout";

//1. Context API
export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/support" element={<Support />} />
            <Route path="/studenthome" element={<StudentHome />} />
            <Route path="/teacherhome" element={<TeacherHome />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </UserContext.Provider>
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
