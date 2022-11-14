import React from "react";
import "./index.css";

const AccountModal = ({ label, setShowModal }) => {
  const handleCloseModal = (e) => {
    setShowModal(false);
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="account-modal__wrapper" onClick={handleCloseModal}>
      <div className="account-modal__section" onClick={handlePropagation}>
        <header className="account-modal__header">
          <div className="account-modal__header-icon">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <linearGradient
                id="svg-fill-linear__primary"
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
                d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                fill="url(#svg-fill-linear__primary)"
                fillRule="nonzero"
              ></path>
            </svg>
          </div>
          <h3 className="account-modal__header-label">{label}</h3>
        </header>
        <section className="account-modal__body">
          <div className="account-modal__privacy">
            Khi bấm vào{" "}
            <span className="text-capitalize text-bold">Đăng nhập</span>, bạn
            đồng ý với{" "}
            <span className="text-underline text-capitalize">Điều khoản</span>{" "}
            của chúng tôi. Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn
            trong{" "}
            <span className="text-underline text-capitalize">
              Chính sách quyền riêng tư
            </span>{" "}
            của chúng tôi.
          </div>

          <div className="account-modal__btn-wrap">
            <a href="http://localhost:3002/auth/google" className="log-in-with-gg">
              <img src="images/gg_logo.svg" />
              <span>Đăng nhập với Google</span>
            </a>
            <button className="another-options">tùy chọn khác</button>
          </div>
        </section>
        <footer className="account-modal__footer">
          <h1>Tải ứng dụng!</h1>
          <figure>
            <a href="#">
              <img
                loading="lazy"
                width="140px"
                src="images/app_ios.webp"
                alt="Tải xuống cho IOS"
              />
            </a>
            <a href="#">
              <img
                loading="lazy"
                width="180px"
                src="images/app_android.webp"
                alt="Tải xuống cho Android"
              />
            </a>
          </figure>
        </footer>
        <button className="close-modal-btn" onClick={handleCloseModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default AccountModal;
