import React from "react";
// import { useState } from "react";
import EditCardOptionsChoose from "../EditCardOptionsChoose";
import EditCardOptionsText from "../EditCardOptionsText";
import "./index.css";
import { Link } from "react-router-dom";

const EditProfileCard = () => {
  const user = {
    name: "Pham Minh Khoi",
    imgUrl: ["/images/VelvetSun.jpg", "/images/VelvetSun.jpg"],
  };

  // const [introduceTextInput, setIntroduceTextInput] = useState("");
  // const [wordsUsedNumber, setWordsUsedNumber] = useState(0);

  // const handleIntroduceTextInputChange = (e) => {
  //   setIntroduceTextInput(e.target.value);
  //   setWordsUsedNumber(e.target.value.length);
  // };

  const renderImgCard = () => {
    let imgCardArr = [];
    for (let i = 0; i < 9; i++) {
      if (user.imgUrl[i]) {
        imgCardArr.push(
          <div
            key={i}
            className="edit-card__edit-img edit-card__edit-img--has-data"
            style={{ backgroundImage: `url(${user.imgUrl[i]})` }}
          >
            <div className="edit-card__delete-img-btn">
              <div className="edit-card__delete-img-icon">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="#ff4458"
                >
                  <path d="m15.44 12 4.768 4.708c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L12 15.52l-4.713 4.605c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417L8.47 12 3.874 7.271c-1.138-.976-1.138-2.44 0-3.417a1.973 1.973 0 0 1 3.25 0L12 8.421l4.713-4.567c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417L15.44 12Z"></path>
                </svg>
              </div>
            </div>
          </div>
        );
      } else {
        imgCardArr.push(
          <div
            key={i}
            className="edit-card__edit-img"
            style={{ backgroundColor: "#21262e" }}
          >
            <div className="edit-card__add-img-btn">
              <div className="edit-card__add-img-icon">
                <svg
                  focusable="false"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="#fff"
                >
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                </svg>
              </div>
            </div>
          </div>
        );
      }
    }
    return imgCardArr;
  };

  renderImgCard();

  return (
    <div className="card edit-card">
      <div className="edit-card__change-view-btn-group">
        <button className="edit-card__change-view-btn current">
          Ch???nh s???a
        </button>
        <button className="edit-card__change-view-btn">Xem tr?????c</button>
      </div>
      <div className="edit-card__body">
        <div className="edit-card__edit-img-group">
          <div className="edit-card__edit-img-wrapper">{renderImgCard()}</div>
          <div className="edit-card__edit-img-note">
            Th??m video, ???nh ho???c loop ????? ho??n th??nh h??? s?? c???a b???n, c??ng
            c?? h???i nh???n ???????c nhi???u l?????t Th??ch h??n.
          </div>
          <div className="edit-card__img-footer">
            <button className="btn-primary">Th??m ???nh</button>
          </div>
        </div>
        <EditCardOptionsText
          label={`Gi???i thi???u ${user.name}`}
          note="Kh??ng n??n ????a t??n ng?????i d??ng tr??n c??c m???ng x?? h???i ho???c th??ng tin
            li??n l???c kh??c v??o h??? s?? c???a b???n."
          placeholder="Type something here. . ."
          countWords={true}
          maxWords={500}
        />
        <EditCardOptionsChoose
          label="S??? th??ch"
          options={[{ title: "Th??m s??? th??ch", link: "interests" }]}
        />
        <EditCardOptionsChoose
          label="Phong c??ch s???ng"
          options={[
            {
              title: "Cung ho??ng ?????o",
              img: "/images/astrological_sign@1x.png",
              userData: "X??? N???",
              link: "zodiac",
            },
            {
              title: "H???c v???n",
              img: "/images/education@1x.png",
              userData: "?????i h???c",
              link: "education",
            },
            {
              title: "Th?? c??ng",
              img: "/images/pets@1x.png",
              userData: "M??o",
              link: "pets",
            },
            {
              title: "H??t thu???c",
              img: "/images/smoking@1x.png",
              userData: "Kh??ng h??t thu???c",
              link: "smoking",
            },
          ]}
        />
        <EditCardOptionsText
          label="ch???c danh"
          placeholder="Th??m ch???c danh"
          countWords={false}
        />
        <EditCardOptionsText
          label="c??ng ty"
          placeholder="Th??m t??n c??ng ty"
          countWords={false}
        />
        <EditCardOptionsText
          label="tr?????ng"
          placeholder="Th??m t??n tr?????ng"
          countWords={false}
        />
        <EditCardOptionsChoose
          label="gi???i t??nh"
          options={[{ title: "Nam", link: "gender" }]}
        />
      </div>
      <footer className="edit-card__footer">
        <Link to="/app/profile">
          <button className="btn-primary">L??u</button>
        </Link>
      </footer>
    </div>
  );
};

export default EditProfileCard;
