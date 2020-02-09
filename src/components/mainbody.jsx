import React from "react";
import { Quote } from "./quote";
import { ReactComponent as Arrow } from "../assets/images/icon-arrow.svg";
// import { ReactComponent as Payment } from "../assets/images/clip-payment.svg";
// import { ReactComponent as Waiting } from "../assets/images/clip-waiting.svg";
import clipPayment from "../assets/images/clip-payment.svg";
import clipWaiting from "../assets/images/clip-waiting.svg";

import {ReactComponent as NumOne } from "../assets/images/1.svg";
import {ReactComponent as NumTwo } from "../assets/images/2.svg";
import {ReactComponent as NumThree } from "../assets/images/3.svg";
import Container from "./container";

export const MainBody = props => (
  <div id="mainBody" className="mainbody">
    <Container size="sm">
      <h2 className="mainbody__title">nabeperoの強み</h2>

      <div className="twocard">
        <div>
          <img src={clipWaiting} alt="picture waiting" />
          <div className="cardtitle">
            <NumOne />
            <h3 className="mainbody__subtitle">スピーディーな対応</h3>
          </div>
          <p>
            主要な海外法人の登記簿であれば、 <br />在庫を保有してます。
            迅速なお届けが可能です！
          </p>
        </div>

        <div>
          <img src={clipPayment} alt="picture payment" />
          <div className="cardtitle">
            <NumTwo />
            <h3 className="mainbody__subtitle">安価で確実にお届け</h3>
          </div>
          <p>
            海外法人の登記簿をどこよりも 安く取得いたします。 <br />他社の10%
            off価格で提供中！
          </p>
        </div>
        <div>
          <div className="cardtitle">
            <NumThree />
            <h3 className="mainbody__subtitle">現地対応スタッフ</h3>
          </div>
          <p>
          フィリピンに関連会社があるため、フィリピンに籍を置く Loki Technology（5ちゃんねるの運営会社）の登記簿を取得することができます！
          </p>
        </div>
      </div>

      {/* <Quote className="orange orangequote" text={"なぜこれが可能か"} /> */}

      {/* <div className="arrows">
        <div>
          <Arrow />
          <p className="orange">フィリピン会社</p>
          <p>があり、5chの登記取得代行が可能</p>
        </div>

        <div>
          <Arrow />
          <p>フィリピンの</p>
          <p className="orange">地メンバーやフィリピン現地日本人メンバー</p>
          <p>がいる為、 他社に比べて低価格で提供可能！</p>
        </div>
      </div> */}

      <div className="images">

        {/* <img src={require("../assets/images/image3.png")} />
        <img src={require("../assets/images/image2.png")} />
        <img src={require("../assets/images/image1.png")} /> */}
        
         <div className="image-wrapper"><img src={require("../assets/images/image3.png")} /></div>
         <div className="image-wrapper"><img src={require("../assets/images/image2.png")} /></div>
         <div className="image-wrapper"><img src={require("../assets/images/image1.png")} /></div>
      </div>

    </Container>
  </div>
);
