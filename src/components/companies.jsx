import React from "react";
import { ReactComponent as Flag } from "assets/images/flag.svg";
import { ReactComponent as Ireland } from "assets/images/ireland.svg";
import { ReactComponent as Singapore } from "assets/images/singapore.svg";
import { ReactComponent as Philippines } from "assets/images/philippines.svg";
import { Quote } from "./quote";
import Container from "./container";

export const Companies = () => {
  return (
    <Container size="sm">
      <div id="companies" className="companies">
        <Quote className="blue orangequote" text="取り扱い海外法人の登記簿一覧" />
        <div className="col column1">
          <Flag />
          <p>カリフォルニア州</p>
        </div>

        <div className="col column2">
          <button>Google LLC</button>
          <button>Facebook Inc</button>
          <button>Twitter Inc</button>
          <button>YouTube LLC</button>
        </div>

        <div className="col column3">
          <div className="subcol subcol1">
            <Flag />
            <button>Microsoft</button>
          </div>
          <div className="subcol subcol2">
            <p></p>
            <button>Amazon</button>
          </div>
          <div className="subcol subcol3">
            <Flag />
            <button>FC2</button>
          </div>
        </div>

        <div className="col column4">
          <div className="subcol subcol1">
            <div>
              <Philippines />
              <p>フィリピン</p>
            </div>

            <button>Loki Technology, Inc (5ch.net)</button>
          </div>

          <div className="subcol subcol2">
            <div>
              <Singapore />
              <p>シンガポール</p>
            </div>

            <button>パケットモンスター（２ちゃんねる）</button>
          </div>
        </div>

        <div className="col column5">
          <div className="subcol subcol1">
            <div>
              <Ireland />
              <p>フィリピン</p>
            </div>

            <button>Twitter International</button>
          </div>

          <div className="subcol subcol2">
            <h1></h1>
            <button>Facebook Ireland limited</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
