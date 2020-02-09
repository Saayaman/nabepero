/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer>
      <Container size="lg">
        <div className="container footer-wrapper">
          <div>
            <ul>
              <li>
                <a>運営会社</a>
              </li>
              <li>
                <a>利用規約</a>
              </li>
            </ul>
          </div>
          <div>
            <p>copyright 2020 (c) nabepuro all rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
