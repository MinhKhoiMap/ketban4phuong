import React, { useState } from "react";
import EditCardOptionsChoose from "../EditCardOptionsChoose";
import EditCardOptionsText from "../EditCardOptionsText";
import "./index.css";
import { Link } from "react-router-dom";

const EditProfileCard = () => {
  const user = {
    name: "Pham Minh Khoi",
    imgUrl: [
      "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/272166962_619424902685934_4367621749521895868_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tKT0WCgRaUsAX8tdMoo&_nc_ht=scontent.fsgn13-2.fna&oh=03_AdTthRnPKiXwDfxhO8HKENE4_CmdjpglALcsUs7do4Ufyg&oe=6377CABF",
      "/images/VelvetSun.jpg",
      "/images/VelvetSun.jpg",
    ],
  };

  const [introduceTextInput, setIntroduceTextInput] = useState("");
  const [wordsUsedNumber, setWordsUsedNumber] = useState(0);

  const handleIntroduceTextInputChange = (e) => {
    setIntroduceTextInput(e.target.value);
    setWordsUsedNumber(e.target.value.length);
  };

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
          Chỉnh sửa
        </button>
        <button className="edit-card__change-view-btn">Xem trước</button>
      </div>
      <div className="edit-card__body">
        <div className="edit-card__edit-img-group">
          <div className="edit-card__edit-img-wrapper">{renderImgCard()}</div>
          <div className="edit-card__edit-img-note">
            Thêm video, ảnh hoặc loop để hoàn thành thêm 4% hồ sơ của bạn, cùng
            cơ hội nhận được nhiều lượt Thích hơn.
          </div>
          <div className="edit-card__img-footer">
            <button className="btn-primary">Thêm Ảnh</button>
          </div>
        </div>
        <EditCardOptionsText
          label={`Giới thiệu ${user.name}`}
          note="Không nên đưa tên người dùng trên các mạng xã hội hoặc thông tin
            liên lạc khác vào hồ sơ của bạn."
          placeholder="Type something here. . ."
          countWords={true}
          maxWords={500}
        />
        <EditCardOptionsChoose
          label="Sở thích"
          options={[{ title: "Thêm sở thích", link: "interests" }]}
        />
        <EditCardOptionsChoose
          label="Phong cách sống"
          options={[
            {
              title: "Cung hoàng đạo",
              img: "/images/astrological_sign@1x.png",
              userData: "Xữ Nữ",
              link: "zodiac",
            },
            {
              title: "Học vấn",
              img: "/images/education@1x.png",
              userData: "Đại học",
              link: "education",
            },
            {
              title: "Thú cưng",
              img: "/images/pets@1x.png",
              userData: "Mèo",
              link: "pets",
            },
            {
              title: "Hút thuốc",
              img: "/images/smoking@1x.png",
              userData: "Không hút thuốc",
              link: "smoking",
            },
          ]}
        />
        <EditCardOptionsText
          label="chức danh"
          placeholder="Thêm chức danh"
          countWords={false}
        />
        <EditCardOptionsText
          label="công ty"
          placeholder="Thêm tên công ty"
          countWords={false}
        />
        <EditCardOptionsText
          label="trường"
          placeholder="Thêm tên trường"
          countWords={false}
        />
        <EditCardOptionsChoose
          label="giới tính"
          options={[{ title: "Nam", link: "gender" }]}
        />
      </div>
      <footer className="edit-card__footer">
        <Link to="/app/profile">
          <button className="btn-primary">Lưu</button>
        </Link>
      </footer>
    </div>
  );
};

export default EditProfileCard;
