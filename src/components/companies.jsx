import React from "react";
import { ReactComponent as Flag } from "assets/images/flag.svg";
import { ReactComponent as Ireland } from "assets/images/ireland.svg";
import { ReactComponent as Singapore } from "assets/images/singapore.svg";
import { ReactComponent as Philippines } from "assets/images/philippines.svg";

export const Companies = () => {
  return (
    <div className="companies">
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
  );
};
