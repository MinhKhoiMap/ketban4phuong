import React from "react";
import "./index.css";
import SettingText from "../SettingText";
import SettingChoose from "../SettingChoose";

const SettingDetail = ({ item, type, onlyRead = false }) => {
  return (
    <div className="profile-detail__wrapper">
      {type === "text" && <SettingText item={item} onlyRead={onlyRead} />}
      {type === "choose" && (
        <SettingChoose
          options={item}
          text="You will only see women in discovery"
        />
      )}
    </div>
  );
};

export default SettingDetail;
