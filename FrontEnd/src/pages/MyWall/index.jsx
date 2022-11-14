import React from "react";
import "./index.css";
import MyWallAside from "../../components/MyWallAside";
import { Route, Routes } from "react-router-dom";
import MyProfile from "../../components/MyProfile";
import MyWallFeature from "../../components/MyWallFeature";
import SettingDetail from "../../components/SettingDetail";
import MyWallMain from "../../components/MyWallMain";
import MatchesCard from "../../components/MatchesCard";
import ProfileCard from "../../components/ProfileCard";
import EditProfileCard from "../../components/EditProfileCard";
import ChoicesCard from "../../components/ChoicesCard";

const MyWall = () => {
  return (
    <div className="mywall__wrapper">
      <Routes>
        <Route path="" element={<MyWallAside />}>
          <Route path="recs" element={<MyWallFeature />} />
          <Route path="profile/*" element={<MyProfile />}>
            {/* <Route index element={<MyProfile />} />
            <Route path="edit" element={<MyProfile />} />
            <Route path="interests" element={<MyProfile />} /> */}
          </Route>
          <Route path="settings">
            <Route
              path="phone-number"
              element={
                <SettingDetail
                  type="text"
                  item={{ label: "phone number", content: "84369669415" }}
                />
              }
            />
            <Route
              path="email-account"
              element={
                <SettingDetail
                  type="text"
                  onlyRead={true}
                  item={{ label: "Email", content: "minhkhoi.bemap@gmail.com" }}
                />
              }
            />
            <Route
              path="gender"
              element={
                <SettingDetail
                  type="choose"
                  item={["men", "women", "everyone"]}
                />
              }
            />
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="" element={<MyWallMain />}>
          <Route path="recs" element={<MatchesCard />} />
          <Route path="profile/*">
            <Route index element={<ProfileCard />} />
            <Route path="edit" element={<EditProfileCard />} />
            <Route
              path="edit/interests"
              element={
                <ChoicesCard
                  headerTitle="Sửa sở thích"
                  note="Chọn các sở thích bạn muốn chia sẻ với mọi người. Chọn tối thiểu 3."
                  label="Sở thích"
                  maxSelectTag={5}
                  tagsArray={[
                    "Thế hệ 9X",
                    "Harry Potter",
                    "SounCloud",
                    "Spa",
                    "Chăm sóc bản thân",
                    "Tiệc gia đình",
                    "Bóng rổ",
                    "Du lịch",
                    "Làm việc tự do",
                    "Phát triển bản thân",
                    "Đầu tư",
                    "Phượt",
                  ]}
                />
              }
            />
            <Route
              path="edit/zodiac"
              element={
                <ChoicesCard
                  headerTitle="Sửa cung hoàng đạo"
                  label="Cung hoàng đạo"
                  note="Cung hoàng đạo của bạn là gì?"
                  maxSelectTag={1}
                  tagsArray={[
                    "Ma Kết",
                    "Bảo Bình",
                    "Song Ngư",
                    "Bạch Dương",
                    "Kim Ngưu",
                    "Song Tử",
                    "Cự Giải",
                    "Sư Tử",
                    "Xữ Nữ",
                    "Thiên Bình",
                    "Bọ Cạp",
                    "Nhân Mã",
                  ]}
                />
              }
            />
            <Route
              path="edit/education"
              element={
                <ChoicesCard
                  headerTitle="Sửa trình độ học vấn"
                  label="Học vấn"
                  note="Trình độ Học vấn của bạn là?"
                  maxSelectTag={1}
                  tagsArray={[
                    "Trung học phổ thông",
                    "Cử nhân",
                    "tiến sĩ",
                    "thạc sĩ",
                    "giáo sư",
                  ]}
                />
              }
            />
            <Route
              path="edit/pets"
              element={
                <ChoicesCard
                  headerTitle="Sửa Sở Thích Thú Cưng"
                  label="Loại thú cưng"
                  note="Loại thú cưng bạn thích là?"
                  maxSelectTag={1}
                  tagsArray={[
                    "Chó",
                    "mèo",
                    "bò sát",
                    "động vật lưỡng cư",
                    "Cá",
                    "Không nuôi thú cưng",
                    "Tất cả các loại thú cưng",
                  ]}
                />
              }
            />
            <Route
              path="edit/smoking"
              element={
                <ChoicesCard
                  headerTitle="Sửa thói quen hút thuốc"
                  label="Thói quen hút thuốc"
                  note="Thói quen hút thuốc của bạn?"
                  maxSelectTag={1}
                  tagsArray={[
                    "Hú thuốc với bạn bè",
                    "Hút thuốc thường xuyên",
                    "Không hút thuốc",
                  ]}
                />
              }
            />
            <Route
              path="edit/gender"
              element={
                <ChoicesCard
                  headerTitle="Sửa Giới tính"
                  note="Giới tính của bạn là gì?"
                  label="Giới tính"
                  maxSelectTag={1}
                  tagsArray={["nam", "nữ", "khác"]}
                />
              }
            />
          </Route>
          <Route path="settings/*" element={<ProfileCard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyWall;
