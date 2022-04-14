import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/card.scss";

const CardT = (props) => {
  const navigate = useNavigate();
  const { name, title, code } = props.item;

  return (
    <div
      className="cardBox"
      onClick={() => {
        navigate("/teacherhome/classes/assignment", {
          state: props.item,
        });
      }}
    >
      <div className="cardBoxHeader">
        <img
          className="cardBoxImg"
          src={"https://www.gstatic.com/classroom/themes/Honors.jpg"}
          alt='img'
        ></img>
        <div className="cardTitle">{title}</div>
        <div>{code}</div>
        <div>{name}</div>
      </div>
      <div className="cardBoxBody"></div>
      <div className="cardBoxFooter"></div>
    </div>
  );
};

export default CardT;
