import React from "react";
import { Quote } from "./quote";
import { ReactComponent as Arrow } from "../assets/images/Arrow.svg";
import { ReactComponent as Payment } from "../assets/images/clip-payment.svg";
import { ReactComponent as Waiting } from "../assets/images/clip-waiting.svg";

export const MainBody = props => (
  <div className="mainbody">
    <h3>nabeperoの強み</h3>

    <div className="twocard">
      <div>
        <Payment />
        <div className="cardtitle">
          <h1>1</h1>
          <h3>スピーディーな対応</h3>
        </div>
        <p>
          主要な海外法人の登記簿であれば、 在庫を保有してます。
          迅速なお届けが可能です！
        </p>
      </div>

      <div>
        <Waiting />
        <div className="cardtitle">
          <h1>2</h1>
          <h3>安価で確実にお届け</h3>
        </div>
        <p>
          海外法人の登記簿をどこよりも 安く取得いたします。 他社の10%
          off価格で提供中！
        </p>
      </div>
    </div>

    <Quote className="orange orangequote" text={"なぜこれが可能か"} />

    <div className="arrows">
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
    </div>

    <div className="images">
      <img src={require("../assets/images/image3.png")} />
      <img src={require("../assets/images/image2.png")} />
      <img src={require("../assets/images/image1.png")} />
    </div>

    <Quote className="blue orangequote" text="取り扱い海外法人の登記簿一覧" />
  </div>
);
