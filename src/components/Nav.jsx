import React from "react";
import { StyledNav, StyleNaveA, StyledLogo } from "./StyledComponents";
export const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo />
      <ul>
        <StyleNaveA myColor="green">
          <a href="">サービス内容</a>
        </StyleNaveA>
        <StyleNaveA>
          <a href="">取扱法人</a>
        </StyleNaveA>
        <StyleNaveA>
          <a href="">弁護士について</a>
        </StyleNaveA>
        <StyleNaveA>
          <a href="">利用者の声</a>
        </StyleNaveA>
        <StyleNaveA>
          <a href="">会社概要</a>
        </StyleNaveA>
        <StyleNaveA>
          <button>お問い合わせ</button>
        </StyleNaveA>
      </ul>
    </StyledNav>
  );
};
