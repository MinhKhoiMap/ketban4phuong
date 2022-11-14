import React, { useState } from "react";
import "./index.css";

const EditCardOptionsText = ({
  label,
  note,
  placeholder,
  countWords = false,
  maxWords,
}) => {
  const [textInput, setTextInput] = useState("");
  const [wordsUsedNumber, setWordsUsedNumber] = useState(0);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
    setWordsUsedNumber(e.target.value.length);
  };

  return (
    <div className="edit-card__options">
      <div className="edit-card__options-label">
        <div className="edit-card__options-list-icon"></div>
        <span>{label}</span>
      </div>
      <div className="edit-card__options-enter-data">
        <textarea
          className="edit-card__options-textarea"
          value={textInput}
          onChange={handleTextInputChange}
          maxLength={maxWords}
          placeholder={placeholder}
        ></textarea>
        {countWords && (
          <div className="remaining-word-number">
            {maxWords - wordsUsedNumber}
          </div>
        )}
      </div>
      {note && <div className="edit-card__options-note">{note}</div>}
    </div>
  );
};

export default EditCardOptionsText;
