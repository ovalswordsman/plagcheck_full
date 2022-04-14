import React from "react";
import { useLocation } from "react-router-dom";
import "../Css/studenthome.css";
const TeacherSecond = () => {
  const location = useLocation();
  const { title, name, code, email, assignments } = location.state;
  const postAssg = async (e) => {
    e.preventDefault();
    
  
    const res = await fetch("/teacherhome/classes/assignment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
       
      }),
    });
    // const data = await res.json();
    // console.log(data);

    // if (res.status === 422 || !data) {
    //   window.alert("Invalid Registration");
    // } else {
    //   window.alert("Successful");
    //   navigate("/login");
    // }
  };
  return (
    <section className="teacher-second">
      <div className="class-heading">
        <div className="class-name">{name}</div>
        <div className="class-title">{title}</div>
      </div>
      <div className="body-data">
        <aside className="side-view">
          <div className="btn-post">
            <button onClick={postAssg}>Post New Assignment</button>
          </div>
        </aside>
        <main className="main-data">
          <div className="assignment">
            <div className="assign-data">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, adipisci saepe. Explicabo nemo repellat obcaecati
              autem quidem neque enim ut voluptatum quasi mollitia iure
              molestias, hic saepe optio quisquam consectetur! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Similique ipsa numquam
              temporibus mollitia eum eveniet alias sunt atque quaerat laborum
              asperiores recusandae animi aliquam est provident, sequi enim quos
              odit!
              <br />
            </div>
            {/* {assignments.map((data, index)=>{
              <div className="assign-data">{data}</div> 
            })} */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default TeacherSecond;
