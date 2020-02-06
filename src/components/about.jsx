import React from "react";
import { ReactComponent as Budge } from "assets/images/budge.svg";

export const About = () => {
  return (
    <section id="about" className="about ">
      <div className="container">
        <div className="about-bg"></div>
        <p>
          近年インターネット上ではSNSが急速に普及し、
          <br />
          名誉毀損に当たるような誹謗中傷が書き込まれることもあります。
          <br />
          <br />
          そのような書き込みを削除するため、TwitterやFacebook、5チャンネルなどの海外法人が運営するサービスに対して裁判を提起しなければならない場合もあります。
          <br />
          <br />
          その際に海外法人の登記簿が必要となりますが、
          <br />
          その取得は多くの弁護士にとってかなり面倒な作業です。>
          <br />
          場合によっては一定の条件を満たさなければ取得できないこともあります。
          <br />
          <br />
          我々はそのような面倒な作業を代行し、裁判に必要な書類を低価格で提供しております！
        </p>
      </div>
    </section>
  );
};
