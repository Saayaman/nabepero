import React, { useState } from "react";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "beautiful-react-hooks";
export const Header = () => {
  const isSmall = useMediaQuery("(max-width: 1247px)");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const scrollTo = (id, condition) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 150,
      behavior: "smooth"
    });
    condition && setShowMenu(false);
  };
  return (
    <>
      <nav>
        <div className="navbar container">
          <Logo className="logo" />
          <ul className="top-nav">
            <li onClick={() => scrollTo("header")}>サービス内容</li>
            <li onClick={() => scrollTo("about")}>取扱法人</li>
            <li onClick={() => scrollTo("mainBody")}>弁護士について</li>
            <li onClick={() => scrollTo("companies")}>利用者の声</li>
            <li onClick={() => scrollTo("bio")}>会社概要</li>
            <li onClick={() => scrollTo("testimonial")}>
              <button
                onClick={() => scrollTo("contacts")}
                className="round-orange"
              >
                お問い合わせ
              </button>
            </li>
          </ul>
          {isSmall && (
            <MdMenu
              onClick={() => {
                setShowSidebar(true);
                setTimeout(() => {
                  setShowMenu(true);
                }, 500);
              }}
              style={{ fontSize: 35 }}
            />
          )}
        </div>
      </nav>
      <div className={`slide-bar ${showSidebar ? "show" : "hide"}`}>
        <MdClose
          onClick={() => {
            setShowSidebar(false);
            setShowMenu(false);
          }}
          className="close-icon"
        />
        <div>
          <ul className={showMenu ? "showMenu" : "hideMenu"}>
            <li onClick={() => scrollTo("header", true)}>サービス内容</li>
            <li onClick={() => scrollTo("about", true)}>取扱法人</li>
            <li onClick={() => scrollTo("mainBody", true)}>弁護士について</li>
            <li onClick={() => scrollTo("companies", true)}>利用者の声</li>
            <li onClick={() => scrollTo("bio", true)}>会社概要</li>
            <li onClick={() => scrollTo("testimonial", true)}>
              <button
                onClick={() => scrollTo("contacts", true)}
                className="round-orange"
              >
                お問い合わせ
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
