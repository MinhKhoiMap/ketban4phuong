import React from "react";
import "./index.css";

const MatchesPending = () => {
  return (
    <div className="matches-pending__wrapper">
      <div className="matches-pending__img-container">
        <svg width="117" height="170" className="slice-3">
          <linearGradient
            id="svg-fill-linear__grey-gradient"
            x1="0.14644660940672627"
            x2="0.8535533905932737"
            y1="0.8535533905932737"
            y2="0.1464466094067262"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#e9ebee"></stop>
            <stop offset="50%" stopColor="#f0f2f4"></stop>
            <stop offset="100%" stopColor="#ffffff"></stop>
          </linearGradient>
          <rect
            x="0"
            y="0"
            width="117"
            height="170"
            rx="10"
            fill="#656e7b"
            fillRule="evenodd"
          ></rect>
        </svg>
        <svg width="117" height="170" className="slice-2">
          <linearGradient
            id="svg-fill-linear__grey-gradient"
            x1="0.14644660940672627"
            x2="0.8535533905932737"
            y1="0.8535533905932737"
            y2="0.1464466094067262"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#e9ebee"></stop>
            <stop offset="50%" stopColor="#f0f2f4"></stop>
            <stop offset="100%" stopColor="#ffffff"></stop>
          </linearGradient>
          <rect
            x="0"
            y="0"
            width="117"
            height="170"
            rx="10"
            fill="url(#svg-fill-linear__grey-gradient)"
            fillRule="evenodd"
          ></rect>
        </svg>
        <svg width="117" height="170" className="slice-1">
          <linearGradient
            id="svg-fill-linear__primary"
            x1="0"
            x2="1"
            y1="0.5"
            y2="0.49999999999999994"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#fd267a"></stop>
            <stop offset="100%" stopColor="#ff6036"></stop>
          </linearGradient>
          <rect
            x="0"
            y="0"
            width="117"
            height="170"
            rx="10"
            fill="url(#svg-fill-linear__primary)"
            fillRule="evenodd"
          ></rect>
        </svg>
      </div>
      <div className="matches-pending__label">Start Matching</div>
      <p className="matches-pending__note">
        Matches will appear here once you start to Like people. You can message
        them directly from here when you’re ready to spark up the conversation.
      </p>
    </div>
  );
};

export default MatchesPending;
