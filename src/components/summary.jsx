import React from "react";
import Container from "./container";

const responsive = {
  0: { items: 1 },
  1024: { items: 2 }
};

export const Summary = () => {
  return (
    <Container size="sm">
      <div className="summary">
        <h2>会社概要</h2>
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
          <p>東京都世田谷3-23-3
            <a href="https://www.google.com/maps/place/3-ch%C5%8Dme-23-3+Setagaya,+Setagaya+City,+T%C5%8Dky%C5%8D-to+154-0017,+Japan/@35.6456045,139.6460073,16z/data=!4m5!3m4!1s0x6018f3789d950475:0xe556fc3ba3fc9dfd!8m2!3d35.6456045!4d139.6503847"
              style={{ color: '#F19437', marginLeft: '10px', fontWeight: 'normal'}}
              target="_blank"
            >
              GOOGLE MAPSで住所を開く
            </a>
          </p>
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
    </Container>
  );
};
