import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const user = {
    email: "minhkhoi.bemap@gmail.com",
    phone: "84369669415",
    looking_for: {
      distance: 30,
      gender: "women",
      age: 22,
    },
  };

  const [distanceValue, setDistanceValue] = useState(user.looking_for.distance);
  const [ageValue, setAgeValue] = useState(user.looking_for.age);
  const [isEditAge, setIsEditAge] = useState(false);
  const [isEditDistance, setIsEditDistance] = useState(false);

  const handleDistanceInput = (e) => {
    if (Number(e.target.value) || e.target.value === "") {
      setDistanceValue(e.target.value);
      return;
    }
    alert("Please select a value");
  };

  const handleAgeInput = (e) => {
    if (Number(e.target.value) || e.target.value === "") {
      setAgeValue(e.target.value);
      return;
    }
    alert("Please select a value");
  };

  const handleSendDataDistance = () => {
    setIsEditDistance(false);
  };

  const handleSendDataAge = () => {
    setIsEditAge(false);
  };

  return (
    <div className="my-profile__wrapper">
      <div className="my-profile__account-setting-wrap">
        <ul className="my-profile__account-setting">
          <h4>account settings</h4>
          <Link to="/app/settings/email-account">
            <li className="my-profile__account-setting-part">
              <div className="my-profile__account-setting-label">Email</div>
              <div className="my-profile__account-setting-content">
                <p>{user.email}</p>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </Link>
          <Link to="/app/settings/phone-number">
            <li className="my-profile__account-setting-part">
              <div className="my-profile__account-setting-label">
                Phone Number
              </div>
              <div className="my-profile__account-setting-content">
                <p>{user.phone}</p>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </Link>
        </ul>
        <ul className="my-profile__account-setting">
          <h4>discovery settings</h4>
          <Link to="">
            <li className="my-profile__account-setting-part">
              <div className="my-profile__account-setting-label">location</div>
              <div className="my-profile__account-setting-content">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </Link>
          <li className="my-profile__account-setting-part">
            <div className="my-profile__account-setting-label">
              distance preference
            </div>
            <div className="my-profile__account-setting-content">
              {isEditDistance ? (
                <>
                  <input
                    type="text"
                    value={distanceValue}
                    onChange={handleDistanceInput}
                    autoFocus={true}
                  />
                  <div className="done-btn" onClick={handleSendDataDistance}>
                    <i className="fa-solid fa-square-check"></i>
                  </div>
                </>
              ) : (
                <>
                  <span>{user.looking_for.distance}</span>
                  <span>km</span>

                  <div
                    className="edit-btn"
                    onClick={() => {
                      setIsEditDistance((prev) => !prev);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>
                </>
              )}
            </div>
          </li>
          <Link to="/app/settings/gender">
            <li className="my-profile__account-setting-part">
              <div className="my-profile__account-setting-label">
                looking for
              </div>
              <div className="my-profile__account-setting-content">
                <p style={{ textTransform: "capitalize" }}>
                  {user.looking_for.gender}
                </p>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </Link>
          <li className="my-profile__account-setting-part">
            <div className="my-profile__account-setting-label">
              age preference
            </div>
            <div className="my-profile__account-setting-content">
              {isEditAge ? (
                <>
                  <input
                    type="text"
                    value={ageValue}
                    onChange={handleAgeInput}
                    autoFocus={true}
                  />
                  <div className="done-btn" onClick={handleSendDataAge}>
                    <i className="fa-solid fa-square-check"></i>
                  </div>
                </>
              ) : (
                <>
                  <span>{user.looking_for.age}</span>
                  <div
                    className="edit-btn"
                    onClick={() => {
                      setIsEditAge((prev) => !prev);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className="logout-btn">
        log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
      <div className="delete-account__btn">delete account</div>
    </div>
  );
};

export default MyProfile;
