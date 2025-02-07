import React from "react";
import { Merienda } from "next/font/google";
const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });
import  Style  from "@/app/home.module.css";
function Main() {
  return (
    <div>
      <div className={Style.flexColumn}>
        <h1 className={Style.Name}>
          𝔐𝔲𝔥𝔞𝔪𝔪𝔞𝔡 <span style={{fontSize:"96px"}}> ͯś</span>𝔲𝔥𝔞𝔦𝔟     </h1>
        <h2 className={`${merienda.className , Style.Hero} `}>
          {" "}
          &lt; Ꮤeb 𐌃eveloper/&gt;
        </h2>
        <p style={{width: "75%",marginTop: "2.75rem",fontSize: "1.25rem",}} >
          𝑰&apos;𝒎 𝒂 𝒘𝒆𝒃 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝒔𝒌𝒊𝒍𝒍𝒆𝒅 𝒊𝒏 𝑵𝒆𝒙𝒕𝒋𝒔. 𝒂𝒏𝒅 𝑻𝒂𝒊𝒍𝒘𝒊𝒏𝒅. 𝒇𝒐𝒄𝒖𝒔𝒆𝒅 𝒐𝒏
          𝒃𝒖𝒊𝒍𝒅𝒊𝒏𝒈 𝒄𝒍𝒆𝒂𝒏, 𝒔𝒄𝒂𝒍𝒂𝒃𝒍𝒆 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔. 𝑰 𝒄𝒓𝒆𝒂𝒕𝒆 𝒆𝒇𝒇𝒊𝒄𝒊𝒆𝒏𝒕 𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔
          𝒇𝒐𝒓 𝒅𝒚𝒏𝒂𝒎𝒊𝒄 𝒖𝒔𝒆𝒓 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆𝒔. 𝑳𝒆𝒕&apos;𝒔 𝒃𝒖𝒊𝒍𝒅 𝒔𝒐𝒎𝒆𝒕𝒉𝒊𝒏𝒈 𝒈𝒓𝒆𝒂𝒕 𝒕𝒐𝒈𝒆𝒕𝒉𝒆𝒓!
        </p>
      </div>
    </div>
  );
}

export default Main;
