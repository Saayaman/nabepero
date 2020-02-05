import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/images/Logo.svg";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  ul {
    margin-right: 38px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 182px;
  height: 57px;
  margin-left: 38px;
`;

export const StyleNaveA = styled.li`
  a {
    font-size: 18px;
    line-height: 26px;
    text-decoration: none;
    font-family: "Noto Sans JP";
    color: ${props => (props.myColor ? props.myColor : "#545454")};
  }
  button {
    height: 52px;
    width: 204px;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    border-radius: 50px;
    background-color: #f19437;
    font-family: "Source Han Sans JP";
  }
`;
