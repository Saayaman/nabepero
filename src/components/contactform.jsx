import React from "react";
import Container from "./container";
import Button from "./button";

export const ContactForm = () => {
  return (
    <div id="contacts" className="contactform">
 
        <Container size="sm">
         <h2 className="title">お問い合わせ</h2>

         <div className="description">
           <p>ご質問は下記のフォーム、もしくは</p>
           <a href="〇〇＠nabepuro.com">〇〇＠nabepuro.com</a>
           <p>にて受け付けております！</p>
         </div>

         <div className="mainform">
           <div className="input-row">
             <p className="label">お名前</p>
             <div className="input-row-two">
               <input type="text" placeholder="山田" />
               <input type="text" placeholder="太郎" />
             </div>
           </div>

           <div className="input-row">
             <p className="label">フリガナ</p>
             <div className="input-row-two">
               <input type="text" placeholder="ヤマダ" />
               <input type="text" placeholder="タロウ" />
             </div>
           </div>

           <div className="input-row">
             <p className="label">メールアドレス</p>
             <input type="text" placeholder="yamadataro@gmail.com" />
           </div>

           <div className="input-row">
             <p className="label">お問合せ内容</p>
             <textarea placeholder="ご用件・ご質問"></textarea>
           </div>

           <div className="input-row button">
             <p className="label"></p>
             <Button text="送信する" size="sm" />
           </div>
         </div>
       </Container>
    </div>
  );
};
