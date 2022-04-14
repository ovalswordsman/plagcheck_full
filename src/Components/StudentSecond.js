import React from "react";
import { useLocation } from "react-router-dom";
import "../Css/studenthome.css";
const StudentSecond = () => {
  const location = useLocation();
  const { title, name, code, email, assignments } = location.state;
  const postAssg = () => {
    return;
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
            <button>Post New Assignment</button>
          </div>
        </aside>
        <main className="main-data">
          <div className="assignment">
            <div className="assign-data">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, adipisci saepe. Explicabo nemo repellat obcaecati
              autem quidem neque enim ut voluptatum quasi mollitia iure
              molestias, hic saepe optio quisquam consectetur!
              <br />
              <spna className="footer">View Submissions</spna>
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

export default StudentSecond;
