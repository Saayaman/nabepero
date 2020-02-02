import React from "react";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
`;

export const StyleNaveA = styled.li`
    a{
        font-family: 'Noto Sans JP';
        text-decoration: none;
        color: ${props => (props.myColor ? props.myColor : "#545454")};
        button
    }
    button {
        height: 52px;
        width: 204px;
        cursor: pointer;
        border-radius: 50px;
        background-color: #F19437;
        font-family: 'Source Han Sans JP';
    }
`;
