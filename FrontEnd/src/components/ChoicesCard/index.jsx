import React, { useState } from "react";
import "./index.css";

const ChoicesCard = ({ label, headerTitle, note, maxSelectTag, tagsArray }) => {
  const [selectedTagsNumber, setSelectedTagsNumber] = useState(0);

  const handleChooseTag = (e) => {
    console.log([e]);
    if (
      selectedTagsNumber < maxSelectTag ||
      e.target.classList.contains("chosen")
    ) {
      e.target.classList.toggle("chosen");
      if (e.target.classList.contains("chosen"))
        setSelectedTagsNumber((prev) => prev + 1);
      else setSelectedTagsNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="card choices-card">
      <div className="choices-card__head">{headerTitle}</div>
      <div className="choices-card__body">
        <p className="choices-card__note">{note}</p>
        <div className="choices-card__body-label">
          <p>{label}</p>
          <span>
            ({selectedTagsNumber}/{maxSelectTag})
          </span>
        </div>
        <div className="choices-card__tags-container">
          {tagsArray.map((tag, index) => (
            <span
              className="choices-card__tag"
              key={tag}
              onClick={handleChooseTag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button className="choices-card__done-btn">Xong</button>
    </div>
  );
};

export default ChoicesCard;
