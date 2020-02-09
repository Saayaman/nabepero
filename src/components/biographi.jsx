import React from "react";
import Button from './button';
import Container from "./container";
import imgBio from "../assets/images/sampleBio.jpg";

export const BioGraphi = () => {
  return (
    <div className="BioGraphi-container">
      <Container size="sm" style={{background: "#FAFAFA" }}>
        <div className="BioGraphi">
          <h2>監修弁護士　鈴木太郎</h2>

          <div className="BioGraphi-wrapper">
            <div className="BioGraphi-left">
              <div className="BioGraphi-image"><img src={imgBio} /></div>
              <div className="BioGraphi-section-text">

                <p><span>所属</span>〇〇法律事務所</p>
                <p><span>対応言語</span>英語・日本語</p>
              </div>
            </div>

            <div className="BioGraphi-right">
              <div className="BioGraphi-section">
                <h4>経歴</h4>
                <div className="BioGraphi-section-text">
                  <p><span>2003年</span>京都大学法学部（法学士）</p>
                  <p><span>2006年</span>京都大学大学院法学研究科（法学修士）</p>
                  <p><span>2007年</span>最高裁判所司法研修所修了（60期）</p>
                  <p><span>2007-2018年</span>西村あさひ法律事務所勤務</p>
                  <p><span>2013-2014年</span>	金融庁総務企画局市場課 出向</p>
                  <p><span>2016年</span>米国Cornell Law School（LL.M.）</p>
                  <p><span>2016-2017年	</span>香港のHarney Westwood & Riegels法律事務所勤務</p>
                  <p><span>2018年	</span>当事務所入所</p>
                </div>
              </div>
              <div className="BioGraphi-section">
                <h4>著者・メディア</h4>
                <div className="BioGraphi-section-text">
                  <p>投資信託の法制と実務対応 商事法務<br/><span>2015年12月</span></p>
                  <p>平成25年改正金商法等(1年半以内施行)政府令の解説(2・完)　投資信託・投資法人法制の見直し 旬刊商事法務No.2045（2014年10月5・15日合併号）<span>2014年10月</span></p>
                  <p>平成25年改正金商法政府令の解説(2)　投資証券等の取引に関するインサイダー取引規制の導入等 旬刊商事法務No.2030（2014年4月15日号）<span>2014年4月</span></p>
                  <p>Tax on corporate lending and bond issues (Japan Chapter) Practical Law Multi-jurisdictional guide 2013/14 Tax on Transaction<span>2013年4月</span></p>
                  <p>Tax on Finance Transactions (Japan Chapter) Practical Law Multi-jurisdictional guide <span>2012/13</span></p>
                    <p>Tax on Transactions<span>2012年7月</span></p>
                  <p>D1-Law.com 要件事実体系 一般民事編 D1-Law.com Website<span>2012年4月</span></p>
                  <p>Tax on Transactions Handbook (Japan Chapter) The PLC Cross-border Tax on Transactions Handbook 2011/12<span>2011年6月</span></p>
                  <p>法的紛争処理の税務〔第3版〕(下)会社・倒産・国際税務 民事法研究会<span>2009年7月</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            id="bio"
            className="bioimage"
            src={require("../assets/images/design1.png")}
          /> */}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              text="今すぐ無料相談！"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
