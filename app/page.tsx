import Pic from "../components/Pic";
import Main from "../components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import style from "./home.module.css";
import Link from "next/link";
import { Github, Linkedin, Mailbox, ScrollText } from "lucide-react";

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
      <section
        className={`${style["w-full"]} ${style["text-center"]} ${style["py-10"]}`}
      >
        <p
          className={`${style["text-white"]} ${style["text-lg"]} ${style["mb-3"]}`}
        >
          Click here for:
        </p>
        <div
          className={`${style["flex"]} ${style["flex-col"]} ${style["md-flex-row"]} ${style["justify-center"]} ${style["items-center"]} ${style["gap-5"]}`}
        >
          <a
            href="https://github.com/MuhammedSuhaib"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className={`${style["flex"]} ${style["flex-col"]} ${style["items-center"]} ${style["text-white"]}`}
          >
            <Github className={style["size-10"]} />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://www.linkedin.com/in/suhaib1/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin Profile"
            className={`${style["flex"]} ${style["flex-col"]} ${style["items-center"]} ${style["text-white"]}`}
          >
            <Linkedin className={style["size-10"]} />
            <span>Linkedin Profile</span>
          </a>
          <Link
            href="/co"
            className={`${style["flex"]} ${style["flex-col"]} ${style["items-center"]} ${style["text-white"]}`}
          >
            <Mailbox className={style["size-10"]} />
            <span>Contact Me</span>
          </Link>
          <Link
            href="/"
            className={`${style["flex"]} ${style["flex-col"]} ${style["items-center"]} ${style["text-white"]}`}
          >
            <ScrollText className={style["size-10"]} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </>
  );
}
