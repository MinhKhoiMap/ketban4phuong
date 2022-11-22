import React, { useState } from "react";
import "./index.css";

const PassionModal = ({ show, setShow, passionsList, setPassionsList }) => {
  const tagsArray = [
    "Thế hệ 9X",
    "Harry Potter",
    "SounCloud",
    "Spa",
    "Chăm sóc bản thân",
    "Tiệc gia đình",
    "Bóng rổ",
    "Du lịch",
    "Làm việc tự do",
    "Phát triển bản thân",
    "Đầu tư",
    "Phượt",
  ];

  const [selectedTagsNumber, setSelectedTagsNumber] = useState(0);

  const handleChooseTag = (e) => {
    console.log([e.target], "passion modal");
    if (e.target.classList.contains("chosen")) {
      e.target.classList.remove("chosen");
      setSelectedTagsNumber((prev) => prev - 1);
      setPassionsList((prev) =>
        prev.filter((passion) => passion !== e.target.innerText)
      );
    } else {
      if (selectedTagsNumber < 5) {
        e.target.classList.add("chosen");
        setSelectedTagsNumber((prev) => prev + 1);
        setPassionsList([...passionsList, e.target.innerText]);
      }
    }
  };

  const handleDoneChoose = () => {
    console.log(passionsList);
    setShow(false);
  };

  return (
    <div
      className="passion-modal__wrapper"
      onClick={() => setShow(false)}
      style={{ display: show ? "flex" : "none" }}
    >
      <div
        className="passion-modal__section"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="passion-modal__body">
          <h3 className="head-title">Sở thích</h3>
          <p className="note">
            Hãy cho mọi người biết bạn thích những gì bằng cách thêm thông tin
            vào hồ sơ.
          </p>
          <div className="passion-modal__tags-container">
            {tagsArray.map((tag) => (
              <span
                className={`passions-tag ${
                  passionsList.includes(tag) ? "chosen" : ""
                }`}
                onClick={handleChooseTag}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <footer className="passion-modal__footer">
          <button onClick={handleDoneChoose} type="button">
            Tiếp tục ({selectedTagsNumber}/5)
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PassionModal;
