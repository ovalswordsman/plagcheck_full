import React from 'react'
import "../Css/guest.css";
import { useNavigate } from "react-router-dom";
const Guest = () => {
  const navigate=useNavigate();
  return (
   <div class='guest-home'>
  <img class="icon"  onClick={()=>{navigate("/")}} src={require('../Images_copy/Plag_Check.png')} height="150" ></img>
  <h3 class="icon">Ｐｌａｇ Ｃｈｅｃｋ</h3>
   {/* <input class="type-box" type="text" /> */}
   <textarea class="type-box" placeholder="Enter Text or upload file ..." name="Text1" cols="40" rows="5"></textarea>
   <button class="upload" ></button>
   <button class="scan1" >Scan for plagiarism</button>
   <button class="scan2">Scan for gramatical errors</button>
   <img  class="guest-image" src={require('../Images_copy/plagiarism-concept-with-man-stealing-ideas_23-2148422590.png')} height="200" width="150"></img>
   </div>
  )
}

export default Guest