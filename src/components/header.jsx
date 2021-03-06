import React, { useState } from "react";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import { MdMenu, MdClose } from "react-icons/md";
import {
  useMediaQuery
  // useWindowScroll,
  // useThrottledFn
} from "beautiful-react-hooks";
import Container from "./container";
import Button from "./button";

export const Header = () => {
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // const [scrollY, setScrollY] = useState(window.scrollY);

  // useWindowScroll(
  //   useThrottledFn(event => {
  //     setScrollY(window.scrollY);
  //   })
  // );
  const scrollTo = (id, condition) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 150,
      behavior: "smooth"
    });
    if (condition) {
      setShowSidebar(false);
      setShowMenu(false);
    }
  };
  return (
    <>
      <nav>
        <Container size="lg">
          <div className="navbar container">
            <Logo
              onClick={() => scrollTo("header")}
              id="top-nav"
              className="logo"
            />
            <ul className="top-nav">
              <li
                // className={`${scrollY < 710 && scrollY > 0 ? "active" : ""}`}
                onClick={() => scrollTo("about")}
              >
                サービス内容
              </li>
              <li
                // className={`${scrollY < 2300 && scrollY > 710 ? "active" : ""}`}
                onClick={() => scrollTo("companies")}
              >
                取扱法人
              </li>
              <li
                // className={`${scrollY < 2800 && scrollY > 2300 ? "active" : ""}`}
                onClick={() => scrollTo("BioGraphi")}
              >
                弁護士について
              </li>
              <li
                // className={`${scrollY < 3700 && scrollY > 2800 ? "active" : ""}`}
                onClick={() => scrollTo("testimonial")}
              >
                利用者の声
              </li>
              <li
                // className={`${scrollY < 4300 && scrollY > 3700 ? "active" : ""}`}
                onClick={() => scrollTo("summary")}
              >
                会社概要
              </li>
              <li
              // className={`${scrollY < 4900 && scrollY > 4000 ? "active" : ""}`}
              >
                <Button
                  size="sm"
                  text="お問い合わせ"
                  handleClick={() => scrollTo("contact")}
                />
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
        </Container>
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
            <li onClick={() => scrollTo("about", true)}>サービス内容</li>
            <li onClick={() => scrollTo("companies", true)}>取扱法人</li>
            <li onClick={() => scrollTo("BioGraphi", true)}>弁護士について</li>
            <li onClick={() => scrollTo("testimonial", true)}>利用者の声</li>
            <li onClick={() => scrollTo("summary", true)}>会社概要</li>
            <li>
              <Button
                handleClick={() => scrollTo("contact", true)}
                size="sm"
                text={"お問い合わせ"}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
