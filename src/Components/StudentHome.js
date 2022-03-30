import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/studenthome.css";
const StudentHome = () => {

  // const navigate = useNavigate()
  // const homePage = async () => {
  //   try{
  //     const res = await fetch('/studenthome',{
  //       method:"GET",
  //       headers:{
  //         Accept:"application/json",
  //         "Content-Type":"application/json"
  //       },
  //       credentials:"include"
  //     })
  //     const data = await res.json()

  //     if(!res.status===200)throw new Error(res.error)

  //   }
  //   catch(err){
  //     console.log(err)
  //     navigate('/login')
  //   }
  // };
  // useEffect(() => {
  //   homePage();
  // }, []);
  return (
    <section className="student-home">
      <div className="project-heading">Plag Check</div>
      <button className="btn1">Join Class</button>
      <button>Open</button>
      <button className="btn2">Analyze Submission</button>
    </section>
  );
};

export default StudentHome;
