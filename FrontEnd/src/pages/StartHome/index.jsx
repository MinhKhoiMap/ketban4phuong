import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import StartHomeNav from "../../components/StartHomeNav";
import StartHomeShare from "../../components/StartHomeShare";
import StartHomeFooter from "../../components/StartHomeFooter";
import AccountModal from "../../components/AccountModal";

const StartHome = () => {
  const [percentFade, setPercentFade] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [labelModal, setLabelModal] = useState("");

  const navigate = useNavigate();

  const handleFadeScroll = (e) => {
    let offsetHeightSection = e.target.offsetHeight;
    setPercentFade(e.target.scrollTop / offsetHeightSection);
    if (e.target.scrollTop > 550) setShowNav(false);
    else setShowNav(true);
    console.log(e.target.scrollTop);
  };

  const handleCreateAccount = () => {
    setLabelModal("Tạo tài khoản");
    setShowModal(true);
  };

  return (
    <div className="start-home__wrapper" onScroll={handleFadeScroll}>
      {showNav && (
        <StartHomeNav
          setShowModal={setShowModal}
          setLabelModal={setLabelModal}
        />
      )}
      <div className="start-home__overlay">
        <div
          className="start-home__main-section"
          style={{ opacity: `${1 - percentFade * 2}` }}
        >
          <h1>Quẹt Phải</h1>
          <button className="create-account" onClick={handleCreateAccount}>
            Tạo tài khoản
          </button>
        </div>
      </div>
      <div className="start-home__body">
        <StartHomeShare />
        <StartHomeFooter />
      </div>

      {showModal && (
        <AccountModal label={labelModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default StartHome;
