import React from "react";
import { ReactComponent as Budge } from "assets/images/budge.svg";
import Button from  "./button";

export const TopBody = () => {
  return (
    <section id="header" className="topbody">
      <div className="container">
        <div className="hero-left">
          <h1>海外登記簿の取得、<br />お困りですか？</h1>

          <p>
            Twitter、Google、２ちゃんねる、５ちゃんねる等。<br />
            海外法人との裁判に必要な資格証明書の取得を代行いたします
          </p>

          <Button text={"無料相談する"} />
        </div>

        <div className="hero-right">
          <Budge />
        </div>
      </div>
    </section>
  );
};
