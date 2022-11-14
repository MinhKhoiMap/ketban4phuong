import React from "react";
import "./index.css";

const StartHomeFooter = () => {
  return (
    <footer className="start-home__footer">
      <ul className="start-home__footer-feature-list">
        <li className="start-home__footer-feature-item">
          <h3>PHÁP LÝ</h3>

          <ul className="start-home__footer-feature">
            <li>Quyền Riêng Tư</li>
            <li>Điều khoản</li>
            <li>Chính sách Cookie</li>
            <li>Sở Hữu Trí Tuệ</li>
          </ul>
        </li>
        <li className="start-home__footer-feature-item">
          <h3>NGHỀ NGHIỆP</h3>

          <ul className="start-home__footer-feature">
            <li>Cổng thông tin Nghề nghiệp</li>
            <li>Blog Công Nghệ</li>
          </ul>
        </li>
        <li className="start-home__footer-feature-item">
          <h3>MẠNG XÃ HỘI</h3>

          <div className="social-media-icon__wrapper">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </li>
        <li className="start-home__footer-feature-FAQ">
          <p>Các Câu Hỏi Thường Gặp</p>
          <p>Các điểm đến</p>
          <p>Khu Vực Báo Chí</p>
          <p>Liên Hệ</p>
          <p>Mã Khuyến Mãi</p>
        </li>
      </ul>

      <div className="start-home__letter">
        <div className="start-home__download">
          <h1>TẢI ỨNG DỤNG!</h1>
          <figure className="start-home__images-wrap">
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
        </div>

        <div className="start-home__paragraph">
          <p>
            Gửi những ai còn độc thân: Nếu bạn đang tìm kiếm người yêu, muốn bắt
            đầu hẹn hò, hay chỉ đơn giản là muốn có thêm bạn, bạn cần có mặt
            trên Tinder. Với hơn 55 tỷ lượt tương hợp thành công, Tinder chính
            là nơi để gặp gỡ tương hợp tốt nhất tiếp theo của bạn. Chân thành mà
            nói, môi trường hẹn hò ngày nay không còn giống như xưa nữa, giờ đây
            hầu hết mọi người đang gặp gỡ trực tuyến. Với Tinder, ứng dụng hẹn
            hò miễn phí phổ biến nhất trên thế giới, hàng triệu người độc thân
            tuyệt vời khác luôn nằm trong tầm tay bạn. Không những thế họ luôn
            sẵn sàng gặp gỡ những người mới như bạn. Dù bạn thẳng hay thuộc cộng
            đồng LGBTQIA, Tinder luôn sẵn sàng mang đến cho bạn các cơ hội gặp
            gỡ.
          </p>
          <p>
            Sẽ luôn có điều gì đó phù hợp cho mọi người trên Tinder. Bạn muốn có
            một mối quan hệ? Sẽ có. Bạn muốn tìm thêm bạn bè? Cũng sẽ có. Bạn
            mới tới ký túc xá và muốn trải nghiệm học đại học của mình tuyệt
            nhất? Tinder U sẽ giúp bạn. Tinder không phải là trang hẹn hò thường
            thường bậc trung — Tinder là ứng dụng hẹn hò đa dạng nhất, nơi những
            con người trưởng thành thuộc mọi tầng lớp xã hội với những trải
            nghiệm phong phú khác nhau được khuyến khích tạo dựng các kết nối,
            kỷ niệm, hay những điều tương tự.
          </p>
        </div>
      </div>

      <div className="start-home__copyright">
        <p>© 2022 Match Group, LLC, mọi quyền đã được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default StartHomeFooter;
