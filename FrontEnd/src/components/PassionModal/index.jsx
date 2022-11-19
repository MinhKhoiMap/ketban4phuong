import React, { useState } from "react";
import "./index.css";

const PassionModal = ({ setShowPassionModal, show }) => {
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
    // console.log([e]);
    if (selectedTagsNumber < 5 || e.target.classList.contains("chosen")) {
      e.target.classList.toggle("chosen");
      if (e.target.classList.contains("chosen"))
        setSelectedTagsNumber((prev) => prev + 1);
      else setSelectedTagsNumber((prev) => prev - 1);
    }
  };

  const handleDoneChoose = () => {
    setShowPassionModal(false);
  };

  return (
    <div
      className="passion-modal__wrapper"
      onClick={() => setShowPassionModal(false)}
      style={{ display: `${show ? "flex" : "none"}` }}
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
            {tagsArray.map((tag, index) => (
              <div className="passions-tag__group" key={tag}>
                <input
                  className="passions-tag__input"
                  onClick={handleChooseTag}
                  value={tag}
                  type="checkbox"
                  name="passions"
                />
                <span className="passions-tag">{tag}</span>
              </div>
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
