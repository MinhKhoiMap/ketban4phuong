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
                  headerTitle="S???a s??? th??ch"
                  note="Ch???n c??c s??? th??ch b???n mu???n chia s??? v???i m???i ng?????i. Ch???n t???i thi???u 3."
                  label="S??? th??ch"
                  maxSelectTag={5}
                  tagsArray={[
                    "Th??? h??? 9X",
                    "Harry Potter",
                    "SounCloud",
                    "Spa",
                    "Ch??m s??c b???n th??n",
                    "Ti???c gia ????nh",
                    "B??ng r???",
                    "Du l???ch",
                    "L??m vi???c t??? do",
                    "Ph??t tri???n b???n th??n",
                    "?????u t??",
                    "Ph?????t",
                  ]}
                />
              }
            />
            <Route
              path="edit/zodiac"
              element={
                <ChoicesCard
                  headerTitle="S???a cung ho??ng ?????o"
                  label="Cung ho??ng ?????o"
                  note="Cung ho??ng ?????o c???a b???n l?? g???"
                  maxSelectTag={1}
                  tagsArray={[
                    "Ma K???t",
                    "B???o B??nh",
                    "Song Ng??",
                    "B???ch D????ng",
                    "Kim Ng??u",
                    "Song T???",
                    "C??? Gi???i",
                    "S?? T???",
                    "X??? N???",
                    "Thi??n B??nh",
                    "B??? C???p",
                    "Nh??n M??",
                  ]}
                />
              }
            />
            <Route
              path="edit/education"
              element={
                <ChoicesCard
                  headerTitle="S???a tr??nh ????? h???c v???n"
                  label="H???c v???n"
                  note="Tr??nh ????? H???c v???n c???a b???n l???"
                  maxSelectTag={1}
                  tagsArray={[
                    "Trung h???c ph??? th??ng",
                    "C??? nh??n",
                    "ti???n s??",
                    "th???c s??",
                    "gi??o s??",
                  ]}
                />
              }
            />
            <Route
              path="edit/pets"
              element={
                <ChoicesCard
                  headerTitle="S???a S??? Th??ch Th?? C??ng"
                  label="Lo???i th?? c??ng"
                  note="Lo???i th?? c??ng b???n th??ch l???"
                  maxSelectTag={1}
                  tagsArray={[
                    "Ch??",
                    "m??o",
                    "b?? s??t",
                    "?????ng v???t l?????ng c??",
                    "C??",
                    "Kh??ng nu??i th?? c??ng",
                    "T???t c??? c??c lo???i th?? c??ng",
                  ]}
                />
              }
            />
            <Route
              path="edit/smoking"
              element={
                <ChoicesCard
                  headerTitle="S???a th??i quen h??t thu???c"
                  label="Th??i quen h??t thu???c"
                  note="Th??i quen h??t thu???c c???a b???n?"
                  maxSelectTag={1}
                  tagsArray={[
                    "H?? thu???c v???i b???n b??",
                    "H??t thu???c th?????ng xuy??n",
                    "Kh??ng h??t thu???c",
                  ]}
                />
              }
            />
            <Route
              path="edit/gender"
              element={
                <ChoicesCard
                  headerTitle="S???a Gi???i t??nh"
                  note="Gi???i t??nh c???a b???n l?? g???"
                  label="Gi???i t??nh"
                  maxSelectTag={1}
                  tagsArray={["nam", "n???", "kh??c"]}
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
