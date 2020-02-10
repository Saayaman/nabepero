import React from "react";
import { ReactComponent as Budge } from "assets/images/budge.svg";
import Button from "./button";

export const TopBody = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    window.scrollTo({
      top: element.offsetTop - 150,
      behavior: "smooth"
    });
  };
  return (
    <>
      <div className="hero-bg-color" />
      <section id="header" className="topbody">
        <div className="container">
          {/* <Container> */}
          <div className="hero-bg-color" />
          <div className="hero-left">
            <h1>
              海外登記簿の取得、
              <br />
              お困りですか？
            </h1>

            <p>
              Twitter、Google、２ちゃんねる、５ちゃんねる等。
              <br />
              海外法人との裁判に必要な資格証明書の取得を代行いたします
            </p>

            <Button handleClick={scrollToContact} text={"無料相談する"} />
          </div>

          <div className="hero-right">
            <Budge />
          </div>
          {/* </Container> */}
        </div>
      </section>
    </>
  );
};
