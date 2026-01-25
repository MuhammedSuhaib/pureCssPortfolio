import { Merienda, Montserrat } from "next/font/google";
import Link from "next/link";
import style from "./about.module.css";
import { Github, Linkedin, Mailbox, ScrollText } from "lucide-react";

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600"] });

const TimelineItem = ({ year, text }: { year: string, text: string }) => (
    <div className={style.timelineItem}>
        <div className={style.flexRow}>
            <div className={style.timelineYear}>{year}</div>
            <div className={style.timelineText}>
                <p style={{ fontSize: "15px", color: "black" }}>{text}</p>
            </div>
        </div>
    </div>
);

export default function Timeline() {
    const levels = [
        { year: "2025-01", text: "Working on a presentation 'Learn Computing in 0 Day.'" },
        { year: "2025-01", text: "Completed front-end development training from GIAIC." },
        { year: "2024-08", text: "Developed an interest in internet security & backdoors." },
        { year: "2024", text: "Completed TypeScript course from GIAIC." },
        { year: "2023-12", text: "Taught basic computing to two young students." },
        { year: "2023-07", text: "Learned fundamentals of web development (HTML, CSS, JavaScript)." },
        { year: "2023-07", text: "Passed aptitude test at GIAIC." },
        { year: "2023", text: "Discovered AI-driven websites." },
        { year: "2023", text: "Learned Urdu typing." },
        { year: "2023", text: "Advanced skills in Photoshop." },
        { year: "2022-2023", text: "Enhanced design skills with Canva." },
        { year: "2021-2023", text: "Completed FSC (Pre-Engineering) from SM Science." },
        { year: "2020-2021", text: "Completed Graphic Designing course from DigiSkills." },
        { year: "2007-2021", text: "Completed CIT & Basics of Computing from SCOSIT School." },
        { year: "2007-2021", text: "Passed Matriculation from SCOSIT School." }
    ];

  return (
    <div
      style={{ minHeight: "100vh", paddingBlock: "40px" }}
      className={style.flexColumn}
    >
      <section
        style={{
          maxWidth: "768px",
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
        }}
      >
        <h1
          className={`${merienda.className}`}
          style={{ color: "white", fontSize: "48px" }}
        >
          About Me
        </h1>
        <p className={`${montserrat.className}`}>
          I am a passionate self-learner and tech enthusiast with a growing
          interest in front-end development, and design. Over the past few
          years, I have dedicated myself to expanding my skill set through
          various courses and hands-on projects.
        </p>
        <p className={`${montserrat.className}`}>
          In 2025, I am working on a presentation titled{" "}
          <strong> &quot;Learn Computing in 0 Days&quot;</strong>, aimed at
          helping beginners understand basic computing concepts. Prior to that,
          I explored internet security and backdoors, which sparked my
          fascination with the digital landscape.
        </p>
        <p className={`${montserrat.className}`}>
          My journey into tech began in 2023 when I took my first steps in web
          development (HTML, CSS, JavaScript) and enhanced my skills with tools
          like Photoshop and Canva. However, after diving into web development,
          I no longer focus on graphic design.
        </p>
        <p className={`${montserrat.className}`}>
          I am now diving deeper into technologies like TypeScript, Next.js, and
          preparing to explore Agentic AI, Metaverse, and Cloud Computing. My
          journey is just beginning, and I&apos;m excited about where it will
          take me.
        </p>
      </section>
      <h2
        className={`${merienda.className}`}
        style={{ color: "white", fontSize: "48px" }}
      >
        My Timeline
      </h2>
      {levels.map((item, index) => (
        <TimelineItem key={index} year={item.year} text={item.text} />
      ))}
      {/* Buttons */}
      <p style={{ color: "white", fontSize: "18px", marginBottom: "12px" }}>
        Click here for:
      </p>
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
    </div>
  );
}
