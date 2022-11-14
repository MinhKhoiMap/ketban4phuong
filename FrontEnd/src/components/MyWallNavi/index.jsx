import React from "react";
import "./index.css";
import { Link, useHref, useParams } from "react-router-dom";

const MyWallNavi = () => {
  const user = {
    username: "Pham Minh Khoi",
    avatar:
      "https://images-ssl.gotinder.com/633d973a2cc9590100224304/172x216_75_85617b13-ba3f-4d35-884e-fa0635afcb7f.webp",
  };

  const href = useHref();
  const hrefPartNumber = href.split("/").length;
  const lastPage = "/app/recs";

  return (
    <nav className="mywall__navigation">
      {!href.includes("profile") ? (
        <Link to="/app/profile">
          <div className="mywall__proflie">
            <div className="mywall__proflie-avatar">
              <img src={user.avatar} />
            </div>
            <div className="mywall__proflie-name">
              <p>{user.username}</p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={lastPage}>
          <div className="back-btn">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path
                d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                fill="#ff4458"
                fillRule="nonzero"
              ></path>
            </svg>
          </div>
        </Link>
      )}

      <div className="mywall__tools">
        <Link to="/">
          <div className="mywall__tools-explore">
            <svg
              focusable="false"
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <path d="M19.272 9.872V4.707A.708.708 0 0 0 18.564 4h-5.66a.707.707 0 0 0-.707.707v5.038a6.495 6.495 0 0 1 2.434-.878 6.664 6.664 0 0 1 4.64 1.005Zm1.131 7.57 2.123 1.57a1.062 1.062 0 0 1-1.175 1.77l-.085-.064-2.122-1.578h-.042a5.037 5.037 0 1 1-5.886-8.065h-.057a4.952 4.952 0 0 1 1.726-.594 5.023 5.023 0 0 1 3.226.594h-.064a5.002 5.002 0 0 1 2.562 3.672v-.036a5.03 5.03 0 0 1-.312 2.66l.106.071Zm-5.89.404c.473.223 1.001.302 1.518.226h-.021a2.639 2.639 0 0 0 2.25-3.021 2.646 2.646 0 1 0-3.746 2.795ZM3.708 13.197h5.66a6.678 6.678 0 0 0 .708 5.943v.424a.707.707 0 0 1-.708.708h-5.66A.708.708 0 0 1 3 19.564v-5.66a.707.707 0 0 1 .707-.707Zm0-9.197h5.66c.39 0 .708.317.708.707v5.66c0 .39-.317.708-.708.708h-5.66A.707.707 0 0 1 3 10.367v-5.66c0-.39.317-.707.707-.707Z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MyWallNavi;
