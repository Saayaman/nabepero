import React, { useState } from "react";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "beautiful-react-hooks";
export const Header = () => {
  const isSmall = useMediaQuery("(max-width: 1247px)");
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar container">
          <Logo className="logo" />
          <ul className="top-nav">
            <li>サービス内容</li>
            <li>取扱法人</li>
            <li>弁護士について</li>
            <li>利用者の声</li>
            <li>会社概要</li>
            <li>
              <button className="round-orange">お問い合わせ</button>
            </li>
          </ul>
          {isSmall && (
            <MdMenu
              onClick={() => setShowSidebar(true)}
              style={{ fontSize: 35 }}
            />
          )}
        </div>
      </nav>
      <div className={`slide-bar ${showSidebar ? "show" : "hide"}`}>
        <MdClose onClick={() => setShowSidebar(false)} className="close-icon" />
        <div>
          <ul>
            <li>サービス内容</li>
            <li>取扱法人</li>
            <li>弁護士について</li>
            <li>利用者の声</li>
            <li>会社概要</li>
            <li>
              <button className="round-orange">お問い合わせ</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
