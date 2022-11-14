import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EditCardOptionsChoose = ({ label, options }) => {
  return (
    <div className="edit-card__options-choose">
      <div className="edit-card__options-choose-label">
        <div className="edit-card__options-list-icon"></div>
        <span>{label}</span>
      </div>
      {options.map((option, index) => (
        <Link to={option.link}>
          <div className="edit-card__options-choose-title" key={index}>
            <div className="left">
              {option.img && <img src={option.img} />}
              <p>{option.title}</p>
            </div>
            <div className="right">
              {option.userData && <p className="data">{option.userData}</p>}
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EditCardOptionsChoose;
