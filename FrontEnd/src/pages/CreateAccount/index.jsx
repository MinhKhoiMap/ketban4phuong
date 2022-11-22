import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import http from "../../http-common";
import { Link } from "react-router-dom";
import PassionModal from "../../components/PassionModal";
import "./index.css";

const CreateAccount = () => {
  const [nameValue, setNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [genderRefValue, setGenderRefValue] = useState("");
  const [imageList, setImageList] = useState(["", "", "", "", "", ""]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [passionsList, setPassionsList] = useState([]);

  const [showPassionModal, setShowPassionModal] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [genderPrev, setGenderPrev] = useState();
  const [genderRefPrev, setGenderRefPrev] = useState();
  // const testRef = useRef();

  const handleUploadImage = (e) => {
    // console.log([e.target]);
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setSelectedFiles([...selectedFiles, e.target.files[0]]);
  };

  const handleSetDateValue = (e) => {
    if (e.target.value > 31) {
      e.target.classList.add("error");
    } else e.target.classList.remove("error");
    setDateValue(e.target.value);
  };

  const handleSetMonthValue = (e) => {
    if (e.target.value > 12) {
      e.target.classList.add("error");
    } else e.target.classList.remove("error");
    setMonthValue(e.target.value);
  };

  const handleSetYearValue = (e) => {
    if (e.target.value > new Date().getFullYear() - 18) {
      e.target.classList.add("error");
    } else e.target.classList.remove("error");
    setYearValue(e.target.value);
  };

  const handleSetName = (e) => {
    if (!e.target.value) e.target.classList.add("error");
    else {
      e.target.classList.remove("error");
    }
    setNameValue(e.target.value);
  };

  useEffect(() => {
    // console.log("object");
    let url = [];
    for (let i = 0; i < 6; i++) {
      // console.log(selectedFiles, "selectedFiles");
      if (selectedFiles[i]) {
        url[i] = URL.createObjectURL(selectedFiles[i]);
      } else url[i] = "";
    }
    setImageList(url);
  }, [selectedFiles.length]);

  useEffect(() => {
    if (
      selectedFiles.length >= 2 &&
      nameValue &&
      dateValue < 32 &&
      monthValue < 13 &&
      yearValue
    ) {
      setButtonActive(true);
    } else setButtonActive(false);
  }, [selectedFiles.length, nameValue, dateValue, monthValue, yearValue]);

  const handleGenderChoose = (e) => {
    genderPrev?.classList.remove("chose");
    e.target.classList.add("chose");
    setGenderPrev(e.target);
    setGenderValue(e.target.value);
  };

  const handleGenderRef = (e) => {
    genderRefPrev?.classList.remove("chose");
    e.target.classList.add("chose");
    setGenderRefPrev(e.target);
    setGenderRefValue(e.target.value);
  };
  const handleDeleteImage = (e) => {
    // console.log(testRef, "test Ref");
    setSelectedFiles((prev) =>
      prev.filter((file, index) => {
        console.log(index !== e.target.attributes.index.value);
        return index !== e.target.attributes.index.value;
      })
    );
  };
  const formRef = useRef();
  const handleSubmitFormData = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(selectedFiles);
    formData.append("album-profile", "faf", selectedFiles);
    formData.append("passions", JSON.stringify(passionsList));
    axios.post("http://localhost:3002/test", formData, {
      headers: "multipart/form-data",
    });
  };

  return (
    <div className="create-account__main">
      <div className="create-account__header">
        <div className="create-account-logo">
          <Link to="/">
            <svg viewBox="0 0 519 123">
              <g fill="none" fillRule="evenodd">
                <title>Tinder</title>
                <path
                  d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z"
                  fill="#fff"
                ></path>
                <path
                  d="M171.2 101.1l1.7-2 5.3 16.8-.7.7c-4 3.7-10 5.6-17.7 5.6h-.3c-7 0-12.5-2-16.3-5.7-3.8-3.8-5.8-9.5-5.8-16.7V54h-13.5V35.5h13.5V13.2h20.8v22.3h16.5V54h-16.6v41.3c0 1.9.5 8 6.3 8 3 0 5.8-1.1 6.8-2.3zm11 19.2V35.6H203v84.7h-20.8zM192.5 1A12.5 12.5 0 1 1 180 13.6C180 6.8 185.7 1 192.5 1zm66.4 32.5c18 0 27.9 9.8 27.9 27.7v59H266V66.2c-.4-9.6-5-14-14.8-14-8.8 0-15.9 5.4-19.5 10v58h-20.8V35.7h20.8v9c6-5.8 15.6-11 27.2-11zM356 44.4V4.6h20.8v115.8H356v-8.8a34.3 34.3 0 0 1-24.7 10.7c-22.7 0-37.9-17.8-37.9-44.3 0-26.6 15.2-44.4 37.9-44.4A34 34 0 0 1 356 44.4zm0 17.9a25.6 25.6 0 0 0-19.6-10c-12.9 0-21.5 10.3-21.5 25.7 0 15.3 8.6 25.6 21.5 25.6 7.5 0 15.7-4 19.6-9.8V62.3zm69.4-28.7c24.6 0 41.7 19 41.7 46v5.7h-62.9c2.1 11.9 11.5 19.5 24.3 19.5 8.1 0 17-3.5 22.1-8.6L452 95l9.9 14.2-1 .9a48.6 48.6 0 0 1-34.1 12.2c-26 0-44.3-18.3-44.3-44.4a42.8 42.8 0 0 1 43-44.3zm-21.3 36h42.7c-1.2-12.7-11.7-18.5-21.4-18.5-14.6 0-20.1 11-21.3 18.6zm113.3-36h1.5v21l-1.8-.3c-1.5-.3-3.4-.5-5.3-.5-6.7 0-16 4.7-19.5 9.7v56.7h-20.8V35.6h20.9V45c6.9-7.2 16-11.4 25-11.4z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="create-account__container">
        <div className="create-account__body">
          <h2 className="create-account__label">TẠO TÀI KHOẢN</h2>
          <form
            // action="http://localhost:3002/test"
            ref={formRef}
            className="create-account__info-photo-upload"
            // method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmitFormData}
          >
            <div className="create-account__info">
              <div className="create-account__info-main">
                <div className="create-account__info-group">
                  <label htmlFor="#name">Tên của bạn</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="username"
                    placeholder="Tên của bạn"
                    value={nameValue}
                    onChange={handleSetName}
                  />
                </div>
                <div className="create-account__info-group">
                  <label htmlFor="#birthday">Ngày sinh của bạn</label>
                  <br />
                  <div id="birthday">
                    <input
                      type="text"
                      placeholder="DD"
                      value={dateValue}
                      name="birthday"
                      onChange={handleSetDateValue}
                    />
                    <input
                      type="text"
                      placeholder="MM"
                      value={monthValue}
                      name="birthday"
                      onChange={handleSetMonthValue}
                    />
                    <input
                      type="text"
                      placeholder="YYYY"
                      value={yearValue}
                      name="birthday"
                      onChange={handleSetYearValue}
                    />
                  </div>
                </div>
                <div className="create-account__info-group">
                  <label htmlFor="#gender">Giới tính của bạn</label>
                  <br />
                  <div id="gender">
                    <div className="radio-part">
                      <input
                        type="radio"
                        value="Man"
                        onClick={handleGenderChoose}
                        name="gender"
                        placeholder="Man"
                      />
                      <div className="title__radio">Man</div>
                    </div>
                    <div className="radio-part">
                      <input
                        type="radio"
                        value="Woman"
                        onClick={handleGenderChoose}
                        name="gender"
                      />
                      <div className="title__radio">Woman</div>
                    </div>
                    <div className="radio-part">
                      <input
                        type="radio"
                        value="More"
                        onClick={handleGenderChoose}
                        name="gender"
                      />
                      <div className="title__radio">More</div>
                    </div>
                  </div>
                </div>
                <div className="create-account__info-group">
                  <label htmlFor="#genderRefer">
                    Kết nối người có giới tính
                  </label>
                  <br />
                  <div id="genderRefer">
                    <div className="radio-part">
                      <input
                        type="radio"
                        value="Man"
                        onClick={handleGenderRef}
                        name="genderRefer"
                      />
                      <div className="title__radio">Man</div>
                    </div>
                    <div className="radio-part">
                      <input
                        type="radio"
                        value="Woman"
                        onClick={handleGenderRef}
                        name="genderRefer"
                      />
                      <div className="title__radio">Woman</div>
                    </div>
                    <div className="radio-part">
                      <input
                        type="radio"
                        value="Everyone"
                        onClick={handleGenderRef}
                        name="genderRefer"
                      />
                      <div className="title__radio">Everyone</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-account__info-photos">
                <h4>Ảnh hồ sơ</h4>
                {imageList.map((item, index) => (
                  <div className="create-account__info-upload-part" key={index}>
                    <input
                      type="file"
                      // name="album-profile"
                      className="uploadImage-input"
                      accept=".jpg, .png, .webp"
                      onChange={handleUploadImage}
                      // ref={testRef}
                      style={{
                        backgroundImage: `url(${item})`,
                        border: `${item && "none"}`,
                      }}
                    />
                    {/* {console.log(testRef.current?.value)} */}
                    <span>
                      {!item ? (
                        <i
                          className="fa-solid fa-circle-plus"
                          style={{ color: "#ff4458" }}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-circle-xmark"
                          style={{ color: "#fff" }}
                          onClick={handleDeleteImage}
                          index={index}
                        ></i>
                      )}
                    </span>
                  </div>
                ))}
                <p className="note">Thêm ít nhất 2 ảnh để tiếp tục</p>
              </div>
            </div>

            {showPassionModal && (
              <PassionModal
                show={showPassionModal}
                setShow={setShowPassionModal}
                setPassionsList={setPassionsList}
                passionsList={passionsList}
              />
            )}

            {/* <PassionModal
              show={showPassionModal}
              setShow={setShowPassionModal}
              setPassionsList={setPassionsList}
              passionsList={passionsList}
            /> */}

            <div className="create-account__optionals-more">
              <div className="header">
                <div className="line"></div>
                <h3>Tùy chọn</h3>
                <div className="line"></div>
              </div>
              <div className="main">
                <div className="create-account__option-group">
                  <p className="label">Sở thích</p>
                  <button
                    className="create-account__option-choose-btn"
                    onClick={() => {
                      setShowPassionModal(true);
                    }}
                    type="button"
                  >
                    <i className="fa-solid fa-plus"></i>
                    <span>Thêm sở thích</span>
                  </button>
                </div>
              </div>
            </div>
            <footer className="create-account__footer">
              <button
                className={`create-account_continue-btn`}
                disabled={!buttonActive ? true : false}
                type="submit"
              >
                Tiếp tục
              </button>
              <p>Đã có tài khoản? Đăng nhập ngay!</p>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
