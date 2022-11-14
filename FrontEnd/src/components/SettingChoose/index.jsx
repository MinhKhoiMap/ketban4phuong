import React, { useState } from "react";
import "./index.css";

const SettingChoose = ({ options, text }) => {
  const [currentChoice, setCurrentChoice] = useState("women");
  const handleChooseOption = (e) => {
    const currentChoiceData = e.target.childNodes[0].textContent;
    setCurrentChoice(currentChoiceData);
  };
  return (
    <div className="setting-profile__choose-container">
      {options.map((option, index) => (
        <div
          className="setting-profile__options"
          key={index}
          onClick={handleChooseOption}
        >
          {option}

          {option === currentChoice && (
            <svg
              focusable="false"
              aria-hidden="false"
              role="img"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-labelledby="722e628844a89206"
            >
              <path
                d="M21.33 4.783C20.883 4.223 20.212 4 19.542 4c-.67 0-1.34.224-1.788.783l-8.156 7.832-3.352-2.797c-.335-.56-1.006-.783-1.453-.783-.67 0-1.34.224-1.787.783-.783.56-1.006 1.12-1.006 1.679 0 .783.223 1.454.782 1.902l4.916 5.93c.559.447 1.118.671 1.9.671.67 0 1.117-.224 1.787-.783L21.218 8.14c.559-.448.782-1.119.782-1.79 0-.672-.223-1.343-.782-1.79l.112.223z"
                fill="#ff4458"
                fillRule="evenodd"
              ></path>
              <title id="722e628844a89206">Checked</title>
            </svg>
          )}
        </div>
      ))}

      {text && <div className="text">{text}</div>}
    </div>
  );
};

export default SettingChoose;
