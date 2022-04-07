import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/card.scss";

const Card = (props) => {
  const navigate = useNavigate();
  const { classtitle, classname, name } = props.item;

  const callClass = () => {
    
  };
  return (
    <div className="cardBox" onClick={callClass}>
      <div className="cardBoxHeader">
        <img
          className="cardBoxImg"
          src={"https://www.gstatic.com/classroom/themes/Honors.jpg"}
        ></img>
        <div className="cardTitle">{classname}</div>
        <div>{classtitle}</div>
        <div>{name}</div>
      </div>
      <div className="cardBoxBody"></div>
      <div className="cardBoxFooter"></div>
    </div>
  );
};

export default Card;
