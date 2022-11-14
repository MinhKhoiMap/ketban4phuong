import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ProfileCard = () => {
  const user = {
    email: "minhkhoi.bemap@gmail.com",
    name: "Pham Minh Khoi",
    phone: "84369669415",
    birthday: 2003,
    looking_for: {
      distance: 30,
      gender: "women",
      age: 22,
    },
    imgUrl: [
      "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/272166962_619424902685934_4367621749521895868_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tKT0WCgRaUsAX8tdMoo&_nc_ht=scontent.fsgn13-2.fna&oh=03_AdTthRnPKiXwDfxhO8HKENE4_CmdjpglALcsUs7do4Ufyg&oe=6377CABF",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
    ],
  };
  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => {
    slide < user.imgUrl.length - 1 && setSlide((prev) => prev + 1);
  };

  const handlePreviousSlide = () => {
    if (slide > 0) setSlide((prev) => prev - 1);
  };

  return (
    <div className="card profile-card__wrapper">
      <div className="card__img-slide">
        <div className="slide-progress-bar__wrapper">
          {user.imgUrl.map((url, index) => (
            <div
              key={index}
              className={
                index === slide
                  ? "slide-progress-bar active"
                  : "slide-progress-bar"
              }
              style={{ width: `calc((100% - 50px)/${user.imgUrl.length})` }}
            ></div>
          ))}
        </div>
        <div className="change-slide-btn__container">
          <div className="previous-btn" onClick={handlePreviousSlide}>
            {slide > 0 && <i className="fa-solid fa-chevron-left"></i>}
          </div>
          <div className="next-btn" onClick={handleNextSlide}>
            {slide !== user.imgUrl.length - 1 && (
              <i className="fa-solid fa-chevron-right"></i>
            )}
          </div>
        </div>
        {user.imgUrl.map((url, index) => (
          <div
            className="card__img"
            style={{
              backgroundImage: `url(${url})`,
              transform: `translate(${(-375 - 32) * slide}px)`,
            }}
            key={index}
          ></div>
        ))}
      </div>
      <div className="profile-card__pre-info">
        <span className="profile-card__name">{user.name}</span>
        <span className="profile-card__age">
          {new Date().getFullYear() - user.birthday}
        </span>
      </div>
      <div className="profile-card__edit-btn-wrapper">
        <Link to="edit">
          <button className="btn-primary">sửa thông tin</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
