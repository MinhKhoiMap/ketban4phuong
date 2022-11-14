import React from "react";
import "./index.css";

const StartHomeShare = () => {
  const sharing = [
    {
      name: "Shannon Lawton",
      share:
        "Tôi đã rất chắc chắn về người đàn ông tiếp theo tôi ở bên một cách nghiêm túc, sẽ là người tôi dành trọn phần đời ở bên (chỉ là không kết hôn). Tôi đã rất kén chọn và không mong gặp một người đàn ông trên Tinder. Nhưng tôi vẫn quyết định đăng ký rồi cứ tương hợp xem sao.",
    },
    {
      name: "Sean & Marianna",
      share:
        'Tôi vừa chấm dứt một mối quan hệ còn Annie vừa bắt đầu hẹn hò với phụ nữ vì vậy cả hai chúng tôi hơi nhát và đề phòng, dè dặt tiến từng bước! Cả hai đều đã "đổ" rất nhanh và nhận ra là mình đã tìm được mảnh ghép còn lại.',
    },
    {
      name: "Kenneth ❤️",
      share:
        "CẢM ƠN TINDER vì đã giúp tôi gặp được tri kỷ của mình. Chỉ năm phút sau khi bắt đầu nói chuyện, cô ấy, người hiện là bà xã của tôi đã nói về chuyện chúng tôi sẽ có một đám cưới tuyệt thế nào.",
    },
  ];

  return (
    <div className="start-home__share-wrapper">
      {sharing.map((share, index) => {
        return (
          <div className="sharing-item" key={index}>
            <div className="header">
              <div className="text">
                <h2 className="sharing-item__name">{share.name}</h2>
              </div>
              <div className="icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
            <div className="body">
              <p className="sharing-item__paragraph">{share.share}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StartHomeShare;
