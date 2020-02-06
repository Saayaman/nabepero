import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  1024: { items: 2 }
};

export const Summary = () => {
  return (
    <div className="summary">
      <div className="row">
        <h4>社名</h4>
        <p>株式会社nabepero</p>
      </div>

      <div className="row">
        <h4>設立</h4>
        <p>2018年10月</p>
      </div>

      <div className="row">
        <h4>所在地</h4>
        <p>東京都世田谷3-23-3 GOOGLE MAPSで住所を開く</p>
      </div>

      <div className="row">
        <h4>資本金</h4>
        <p>100万円</p>
      </div>

      <div className="row">
        <h4>事業内容</h4>
        <p>
          1. ウェブサイトの運営代行業務・広告審査代行サービス業務
          <br />
          2. ウェブサイトの運営
          <br />
          3.LINEオリジナルスタンプの作成、販売
          <br />
          4. 上記各号に附帯関連する一切の事業
        </p>
      </div>
      <div className="row">
        <h4>代表者</h4>
        <p>渡邊裕貴</p>
      </div>
      <div className="row">
        <h4>決算期</h4>
        <p>6月</p>
      </div>
    </div>
  );
};
