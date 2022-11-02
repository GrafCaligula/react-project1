import React from "react";
import portrait from "./logo192.png";

export default function Info(){
  return (
    <div className="info-section">
      <img scr={portrait} alt="Portrait of me" />
      <h1>Name</h1>
      <p>Job Title</p>
      <p><small>websiteLink</small></p>
    </div>
  )
}