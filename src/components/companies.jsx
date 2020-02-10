import React from "react";
import { ReactComponent as Flag } from "assets/images/flag.svg";
import { ReactComponent as Ireland } from "assets/images/ireland.svg";
import { ReactComponent as Singapore } from "assets/images/singapore.svg";
import { ReactComponent as Philippines } from "assets/images/philippines.svg";
import { Quote } from "./quote";
import Container from "./container";

const CompanyListSection = ({ title, flag, lists }) => (
  <div className="CompanyListSection">
    <div className="Company-title">
      {flag}
      {title}
    </div>
    <div className="CompanyLists">
      {lists.map((list, i) => (
        <div
          key={i * Math.random()}
          style={{ backgroundColor: list.color }}
          className="CompanyLists-list"
        >
          {list.text}
        </div>
      ))}
    </div>
  </div>
);

export const Companies = () => {
  return (
    <Container size="sm">
      <div id="companies" className="companies">
        <Quote
          className="blue orangequote"
          text="取り扱い海外法人の登記簿一覧"
        />
        <div className="companies-wrapper">
          <CompanyListSection
            title="カリフォルニア州"
            flag={<Flag />}
            lists={[
              {
                text: "Google LLC",
                color: "#3b7ded"
              },
              {
                text: "Facebook Inc",
                color: "#4868ad"
              },
              {
                text: "Twitter Inc",
                color: "#48a1ec"
              },
              {
                text: "YouTubbe LLC",
                color: "#ff0000"
              }
            ]}
          />

          <CompanyListSection
            title="ワシントン州"
            flag={<Flag />}
            lists={[
              {
                text: "Microsoft",
                color: "#47A6EA"
              },
              {
                text: "Amazon",
                color: "#EF9B39"
              }
            ]}
          />

          <CompanyListSection
            title="ネバダ州"
            flag={<Flag />}
            lists={[
              {
                text: "FC2",
                color: "#D93932"
              }
            ]}
          />

          <CompanyListSection
            title="フィリピン"
            flag={<Philippines />}
            lists={[
              {
                text: "Loki Technology, Inc (5ch.net)",
                color: "#FF893B"
              }
            ]}
          />

          <CompanyListSection
            title="シンガポール"
            flag={<Singapore />}
            lists={[
              {
                text: "パケットモンスター（２ちゃんねる",
                color: "#000000"
              }
            ]}
          />

          <CompanyListSection
            title="アイルランド"
            flag={<Ireland />}
            lists={[
              {
                text: "Twitter International Company",
                color: "#48a1ec"
              },
              {
                text: "Facebook Ireland limited",
                color: "#4868ad"
              }
            ]}
          />
        </div>
      </div>
    </Container>
  );
};
