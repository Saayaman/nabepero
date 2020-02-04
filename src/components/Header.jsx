import React from "react";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
export const Header = () => {
  return (
    <nav className="container navbar">
      <Logo className="logo" />
      <ul>
        <li>サービス内容</li>
        <li>取扱法人</li>
        <li>弁護士について</li>
        <li>利用者の声</li>
        <li>会社概要</li>
        <li>
          <button className="round-orange">お問い合わせ</button>
        </li>
      </ul>
    </nav>
  );
};
