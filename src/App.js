import React from "react";
import { Header, Nav } from "components";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <p style={{ width: 898, margin: "100px auto 100px auto" }}>
          近年インターネット上ではSNSが急速に普及し、
          <br />
          名誉毀損に当たるような誹謗中傷が書き込まれることもあります。
          <br />
          そのような書き込みを削除するため、TwitterやFacebook、5チャンネルなどの海外法人が運営するサービスに対して裁判を提起しなければならない場合もあります。
          <br />
          その際に海外法人の登記簿が必要となりますが、
          その取得は多くの弁護士にとってかなり面倒な作業です。>
          <br />
          場合によっては一定の条件を満たさなければ取得できないこともあります。
          <br />
          我々はそのような面倒な作業を代行し、裁判に必要な書類を低価格で提供しております！
        </p>
        <h1 style={{ textAlign: "center" }}>nabeperoの強み</h1>
      </div>
    </div>
  );
}

export default App;
