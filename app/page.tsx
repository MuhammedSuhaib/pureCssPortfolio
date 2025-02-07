import Pic from "../components/Pic";
import Main from "../components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import style from "./home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Pic />
      <Main />
      <section id="technologies">
        <Technologies />
      </section>
      <section id="projects">
        <Projects /> 
      </section>
      <section style={{ width: "100%", paddingBlock: "10", textAlign: "center" }} >
        <p style={{ color: "white", fontSize: "18px", marginBottom: "12px" }} >Click here for:</p>
        <div className={style.flex} >
          <a
            href="https://www.linkedin.com/in/suhaib1/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex} style={{ marginInline: "12px", color: "white" }}
          >
            <Image
              src="/linkedin.png"
              width={500}
              height={172}
              alt="LinkedIn"
              style={{ width: "56px", height: "40px" }}
            />
          </a>
          <a
            href="https://github.com/MuhammedSuhaib"
            target="_blank"
            rel="noopener noreferrer"
            className={style.flex} style={{ marginInline: "12px", color: "white" }}
          >
            <Image
              src="/Github.png"
              width={357}
              height={357}
              alt="GitHub"
              className="size-16 rounded-lg bg-[#26045c]"
              style={{ width: "64px", height: "64px", borderRadius: "0.5rem" }}
            />
          </a>
          <Link href="/About" style={{ paddingInline: "12px", paddingBlock: "8px", background: "#5c0442", color: "white", borderRadius: "0.375rem" }}>About Me</Link>
          <Link href="/co" style={{ paddingInline: "12px", paddingBlock: "8px", background: "#ff5100", color: "white", borderRadius: "0.375rem" }} >Contact Me</Link>
        </div>
      </section>
    </>
  );
}
