import React from "react";
import "../styles/Comment.css";

export default function Comment() {
  return (
    <div className="Comment">
      <img src="http://freelanceme.net/Images/default%20profile%20picture.png" />
      <div className="C-content">
        <h4>UserName</h4>
        <p>Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}
