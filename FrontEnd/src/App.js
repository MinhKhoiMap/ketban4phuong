import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";

import MyWall from "./pages/MyWall";
import StartHome from "./pages/StartHome";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.token) navigate("/app/recs");
  }, []);
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<StartHome />} />
        <Route path="app" element={<MyWall />}>
          <Route path="profile">
            <Route path="edit" />
            <Route path="edit/interests" />
            <Route path="edit/zodiac" />
            <Route path="edit/education" />
            <Route path="edit/pets" />
            <Route path="edit/smoking" />
            <Route path="edit/gender" />
          </Route>
          <Route path="recs" />
          <Route path="settings">
            <Route path="phone-number" />
            <Route path="email-account" />
            <Route path="gender" />
          </Route>
        </Route>
      </Routes> */}
      <CreateAccount />
    </div>
  );
}

export default App;
