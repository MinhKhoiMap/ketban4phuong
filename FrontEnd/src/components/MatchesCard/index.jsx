import React, { useState } from "react";
import "./index.css";

const MatchesCard = () => {
  const match = {
    imgUrl: [
      // "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/272166962_619424902685934_4367621749521895868_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tKT0WCgRaUsAX8tdMoo&_nc_ht=scontent.fsgn13-2.fna&oh=03_AdTthRnPKiXwDfxhO8HKENE4_CmdjpglALcsUs7do4Ufyg&oe=6377CABF",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
    ],
    username: "Pham Minh Khoi",
    age: 19,
    location: "Hồ Chí Minh",
    distance: 3,
    school: "Đại học Kinh Tế TP.HCM",
    "life-style": [
      {
        title: "zodiac",
        icon: "/images/astrological_sign@1x.png",
        value: "Xữ Nữ",
      },
      {
        title: "pets",
        icon: "/images/pets@1x.png",
        value: "Mèo",
      },
      {
        title: "smoking",
        icon: "/images/smoking@1x.png",
        value: "Không hút thuốc",
      },
    ],
    note: "Trời mưa biết chạy về bên em ^^",
    passions: ["Travel", "Festivals", "Festivals", "Basketball"],
  };

  const [slide, setSlide] = useState(0);
  // const [animation, setAnimation] = useState(null);
  const [showNoMatchBanner, setShowNoMatchBanner] = useState(null);
  const [showMatchBanner, setShowMatchBanner] = useState(null);

  const handleNextSlide = () => {
    slide < match.imgUrl.length - 1 && setSlide((prev) => prev + 1);
  };

  const handlePreviousSlide = () => {
    if (slide > 0) setSlide((prev) => prev - 1);
  };

  const handleNoMatch = (e) => {
    e.stopPropagation();
    setShowNoMatchBanner({ opacity: "1" });
  };

  const handleMatch = (e) => {
    e.stopPropagation();
    setShowMatchBanner({ opacity: "1" });
  };

  return (
    <div className="card matches-card__wrapper">
      <div className="card__img-slide">
        <div className="slide-progress-bar__wrapper">
          {match.imgUrl.map((url, index) => (
            <div
              key={index}
              className={
                index === slide
                  ? "slide-progress-bar active"
                  : "slide-progress-bar"
              }
              style={{ width: `calc((100% - 50px)/${match.imgUrl.length})` }}
            ></div>
          ))}
        </div>
        {match.imgUrl.map((url, index) => (
          <div
            className="card__img"
            style={{
              backgroundImage: `url(${url})`,
              transform: `translate(${(-375 - 32) * slide}px)`,
            }}
            key={index}
          ></div>
        ))}
        <div className="card__info">
          <div className="matches-card__info-label">
            <h4 className="matches-card__info-name">{match.username}</h4>
            <span>{match.age}</span>
          </div>
          <div className="matches-card__info-more">
            {slide === 0 && (
              <>
                <div className="live-in">
                  <div className="icon">
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="16px"
                      height="16px"
                    >
                      <g
                        stroke="#fff"
                        strokeWidth=".936"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path d="M19.695 9.518H4.427V21.15h15.268V9.52zM3.109 9.482h17.933L12.06 3.709 3.11 9.482z"></path>
                        <path d="M9.518 21.15h5.086v-6.632H9.518z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text">Sống tại {match.location}</div>
                </div>
                <div className="distance">
                  <div className="icon">
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="16px"
                      height="16px"
                    >
                      <g
                        fill="#fff"
                        stroke="#fff"
                        strokeWidth=".5"
                        fillRule="evenodd"
                      >
                        <path d="M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z"></path>
                        <path d="M11.445 12.5a2.945 2.945 0 0 1-2.721-1.855 3.04 3.04 0 0 1 .641-3.269 2.905 2.905 0 0 1 3.213-.645 3.003 3.003 0 0 1 1.813 2.776c-.006 1.653-1.322 2.991-2.946 2.993zm0-5.544c-1.378 0-2.496 1.139-2.498 2.542 0 1.404 1.115 2.544 2.495 2.546a2.52 2.52 0 0 0 2.502-2.535 2.527 2.527 0 0 0-2.499-2.545v-.008z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="text">Cách xa {match.distance} km</div>
                </div>
              </>
            )}
            {slide === 1 && <p className="note">{match.note}</p>}
            {slide === 2 && (
              <div className="matches-card__tag-group">
                {match.passions.map((passion, index) => (
                  <div className="matches-card__tag" key={index}>
                    <p>{passion}</p>
                  </div>
                ))}
              </div>
            )}
            {slide === 3 && (
              <div className="matches-card__tag-group">
                {match["life-style"].map((style) => (
                  <div className="matches-card__tag" key={style.title}>
                    <img src={style.icon} alt={style.title} />
                    <p>{style.value}</p>
                  </div>
                ))}
              </div>
            )}
            {slide > 3 && (
              <p className="note">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth=".5"
                    d="M11.87 5.026L2.186 9.242c-.25.116-.25.589 0 .705l.474.204v2.622a.78.78 0 0 0-.344.657c0 .42.313.767.69.767.378 0 .692-.348.692-.767a.78.78 0 0 0-.345-.657v-2.322l2.097.921a.42.42 0 0 0-.022.144v3.83c0 .45.27.801.626 1.101.358.302.842.572 1.428.804 1.172.46 2.755.776 4.516.776 1.763 0 3.346-.317 4.518-.777.586-.23 1.07-.501 1.428-.803.355-.3.626-.65.626-1.1v-3.83a.456.456 0 0 0-.022-.145l3.264-1.425c.25-.116.25-.59 0-.705L12.13 5.025c-.082-.046-.22-.017-.26 0v.001zm.13.767l8.743 3.804L12 13.392 3.257 9.599l8.742-3.806zm-5.88 5.865l5.75 2.502a.319.319 0 0 0 .26 0l5.75-2.502v3.687c0 .077-.087.262-.358.491-.372.29-.788.52-1.232.68-1.078.426-2.604.743-4.29.743s-3.212-.317-4.29-.742c-.444-.161-.86-.39-1.232-.68-.273-.23-.358-.415-.358-.492v-3.687z"
                  ></path>
                </svg>
                {match.school ? match.school : match.company}
              </p>
            )}
          </div>
          <div className="show-profile">
            <div className="show-profile__icon">
              <i className="fa-solid fa-info"></i>
            </div>
          </div>
        </div>

        <div className="change-slide-btn__container">
          <div className="previous-btn" onClick={handlePreviousSlide}>
            {slide > 0 && <i className="fa-solid fa-chevron-left"></i>}
          </div>
          <div className="next-btn" onClick={handleNextSlide}>
            {slide !== match.imgUrl.length - 1 && (
              <i className="fa-solid fa-chevron-right"></i>
            )}
          </div>
        </div>
      </div>
      <div className="matches-card__tools" onClick={handleNoMatch}>
        <div className="matches-card__tool-btn no-match">
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
            aria-labelledby="no-match"
          >
            <linearGradient
              id="svg-fill-linear__dark__gradient--backgroundNopeInverse"
              x1="0.14644660940672627"
              x2="0.8535533905932737"
              y1="0.8535533905932737"
              y2="0.1464466094067262"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#fd267a"></stop>
              <stop offset="100%" stopColor="#ff6036"></stop>
            </linearGradient>
            <path
              d="m15.44 12 4.768 4.708c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L12 15.52l-4.713 4.605c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417L8.47 12 3.874 7.271c-1.138-.976-1.138-2.44 0-3.417a1.973 1.973 0 0 1 3.25 0L12 8.421l4.713-4.567c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417L15.44 12Z"
              fill="url(#svg-fill-linear__dark__gradient--backgroundNopeInverse)"
            ></path>
            <title id="no-match">Không Thích</title>
          </svg>
        </div>
        <div className="matches-card__tool-btn like" onClick={handleMatch}>
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
            aria-labelledby="like"
          >
            <linearGradient
              id="svg-fill-linear__dark__gradient--backgroundLike"
              x1="0.14644660940672627"
              x2="0.8535533905932737"
              y1="0.8535533905932737"
              y2="0.1464466094067262"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#2df187"></stop>
              <stop offset="100%" stopColor="#74fef2"></stop>
            </linearGradient>
            <path
              d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"
              fill="url(#svg-fill-linear__dark__gradient--backgroundLike)"
            ></path>
            <title id="like">Thích</title>
          </svg>
        </div>
      </div>

      <div className="no-match__label" style={showNoMatchBanner}>
        Không
      </div>
      <div className="match__label" style={showMatchBanner}>
        Thích
      </div>
    </div>
  );
};

export default MatchesCard;
