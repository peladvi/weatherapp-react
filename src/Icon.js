import React from "react";
import "./icon.css";
import icon from "./icons/01d.svg";

export default function Icon() {
  return (
    <div className="col-6">
      <div>
        <img src={icon} alt="" className="image" id="today-icon" />
      </div>
    </div>
  );
}
