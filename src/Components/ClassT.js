import React from "react";
import Card from "./Card";
import classes from "./Class";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ClassT = () => {
  const navigate = useNavigate()
  const [classDetails, setClassDetails] = useState({
    name: "",
    title: "",
    code: "",
  });
  let n, value;
  const handleInputs = (e) => {
    n = e.target.name;

    value = e.target.value;

    setClassDetails({ ...classDetails, [n]: value });
  };

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  const postData = async (e) => {
    e.preventDefault();
    const { name, title, code } = classDetails;
    console.log(classDetails);
    const res = await fetch("/registerclass", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        title,
        code,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Invalid Class Details");
    } else {
      window.alert("Successful");
      window.location.reload()
    }
  };

  return (
    <>
      <div className="classT-btn">
        <button onClick={openForm}>Create Class</button>
      </div>
      <div className="form-popup" id="myForm">
        <form className="form-container" method="POST">
          <h1>Create Class</h1>

          <label for="name">
            <b>Class Name</b>
          </label>
          <input
            type="text"
            onChange={handleInputs}
            placeholder="Enter Class Name"
            name="name"
          />

          <label for="class-code">
            <b>Class title</b>
          </label>
          <input
            type="text"
            onChange={handleInputs}
            placeholder="Enter Class title"
            name="title"
          />
          <label for="class-code">
            <b>Class Code (Should be Unique)</b>
          </label>
          <input
            type="text"
            onChange={handleInputs}
            placeholder="Enter Class Code"
            name="code"
          />

          <button class="btn" onClick={postData}>
            Submit
          </button>
          <button className="btn cancel" onclick={closeForm}>
            Close
          </button>
        </form>
      </div>
      <div className="card-item" id="card-item">
        {classes.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ClassT;
