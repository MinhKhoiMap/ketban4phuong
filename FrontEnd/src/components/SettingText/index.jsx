import React, { useState } from "react";
import "./index.css";

const SettingText = ({ item, onlyRead = false }) => {
  const [update, setUpdate] = useState(false);
  const [dataValue, setDataValue] = useState(item.content);

  const handeOnChangeInput = (e) => {
    setDataValue(e.target.value);
  };

  const handleUpdate = () => {
    setUpdate((prev) => !prev);
  };

  return (
    <>
      <div className="profile-detail__update">
        <h4>{item.label}</h4>

        <div className="profile-details__content">
          {update ? (
            <>
              <input
                type="text"
                value={dataValue}
                onChange={handeOnChangeInput}
                autoFocus={true}
              />
              <i
                className="fa-solid fa-circle-check"
                onClick={() => {
                  setUpdate((prev) => !prev);
                }}
              ></i>
            </>
          ) : (
            <p>{item.content}</p>
          )}
          {!onlyRead && !update && (
            <i
              className="fa-regular fa-pen-to-square"
              onClick={handleUpdate}
            ></i>
          )}
        </div>
      </div>
      {!onlyRead && <div className="update-btn">Update my {item.label}</div>}
    </>
  );
};

export default SettingText;
