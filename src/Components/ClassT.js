import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";



const ClassT = (props) => {
  //props includes email and role
  const [userClass, setUserClass] = useState([]);
  const [classDetails, setClassDetails] = useState({
    name: "",
    title: "",
    code: "",
  });
  const [submit,setSubmit] = useState(false);

  //Setting the classDetails input by user


  let n, value;
  const handleInputs = (e) => {
    n = e.target.name;
    value = e.target.value;

    setClassDetails({ ...classDetails, [n]: value });
  };

  //Registering the class created by user
  const postData = async (e) => {
    e.preventDefault();
    const { name, title, code } = classDetails;

    const res = await fetch("/registerclass", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        title,
        code,
        email: props.userData.email,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("Fill data correclty / Class already exists");
    } else {
      window.alert("Successful");
      setUserClass(prev=>{
        return [...prev,data.class]
      })
      setSubmit(false);
    }
  };

  //Fetching the class details of respective user
  const homePage = async () => {
    try {
      const res = await fetch("/teacherhome/classes", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      const classList = await res.json();
      console.log(classList);
      setUserClass(classList.classList);
      console.log(userClass);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <div className="classT-btn">
        <button onClick={()=>{setSubmit(true)}}>Create Class</button>
      </div>
      {submit&&<div className="form-popup" id="myForm">
        <form className="form-container">
          <h1>Create Class</h1>

          <label htmlFor="name">
            <b>Class Name</b>
          </label>
          <input
            type="text"
            onChange={handleInputs}
            placeholder="Enter Class Name"
            name="name"
          />

          <label htmlFor="class-code">
            <b>Class title</b>
          </label>
          <input
            type="text"
            onChange={handleInputs}
            placeholder="Enter Class title"
            name="title"
          />
          <label htmlFor="class-code">
            <b>Class Code (Should be Unique)</b>
          </label>
          <input
            type="text"
            onChange={handleInputs}
            placeholder="Enter Class Code"
            name="code"
          />

          <button className="btn" onClick={postData}>
            Submit
          </button>
          <button className="btn cancel" onClick={()=>{setSubmit(false)}}>
            Close
          </button>
        </form>
      </div>}
      <div className="card-item" id="card-item">
        {userClass.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ClassT;
