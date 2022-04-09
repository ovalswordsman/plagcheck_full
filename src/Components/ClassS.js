import React from "react";
import Card from "./Card";
import classes from "./Class";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ClassS = (props) => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [classCode, setClassCode] = useState({
    code: "",
  });
  let n, value;
  const handleInputs = (e) => {
    n = e.target.name;
    value = e.target.value;
    setClassCode({ ...classCode, [n]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { code } = classCode;
    console.log(classCode);
    const res = await fetch("/joinclass", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        code,
        email: props.userData.email,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Class does not exists!");
    } else {
      window.alert("Successful");
      setSubmit(false)
    }
  };

  return (
    <>
      <div className="classT-btn">
        <button onClick={() => setSubmit(true)}>Join</button>
      </div>
      {submit && (
        <div className="form-popup" id="myForm">
          <form className="form-container">
            <h1>Join Class</h1>

            <label htmlFor="name">
              <b>Class Code</b>
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
            <button className="btn cancel" onClick={() => setSubmit(false)}>
              Close
            </button>
          </form>
        </div>
      )}
      <div className="card-item" id="card-item">
        {classes.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ClassS;
