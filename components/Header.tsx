import Link from "next/link";
import { Merienda } from "next/font/google";
import style from "@/app/About/about.module.css"
const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });
function Header() {
  return (
    <header style={{marginBottom:"40px"}}>
      <div className={`${style.flex} bg-gradient-to-b from-black to-[#26045c] transition-all hover:bg-gradient-to-br hover:from-[#32027e] hover:to-black`} style={{justifyContent:"space-between", padding:"24px"}}>
        <strong style={{ fontSize:"36px"}} >
          𝔐𝔲𝔥𝔞𝔪𝔪𝔞𝔡 ͯś𝔲𝔥𝔞𝔦𝔟
        </strong>
        <nav>
        <ul className={`${merienda.className , style.flex}`} style={{color:"white",marginInline:"16px",listStyle:"none"}}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#technologies">Technologies</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/co">Contact</Link></li>
            <li><Link href="/About">About Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;