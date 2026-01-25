import React from "react";
import Image from "next/image";
import { Merienda } from "next/font/google";
import techStyles from "./Technologies.module.css"; // Import for title styles
const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });
const projects = [
  {
    link: `https://muhammedsuhaibhackathon2.vercel.app/`,
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce platform built with Next.js and Tailwind CSS.",
    image: "./Hekto.png",
  },
  {
    link: `https://hackathon-milestone-3-4-5-alpha.vercel.app/`,
    title: "Interactive Resume Builder",
    description:
      "A resume builder with interactive features using pure HTML and CSS.",
    image: "./resume.jpg",
  },
  {
    link: `https://muhammedsuhaibhackathon2.vercel.app/`,
    title: "Pixel-Perfect E-commerce Clone",
    description:
      "A precise, pixel-perfect recreation of an e-commerce website.",
    image: "./px.jpeg",
  },
  {
    link: `https://pana-cloud-sepia.vercel.app/`,
    title: "Panacloud Website",
    description: "A static website built with HTML and CSS.",
    image: "./pc.jpeg",
  },
  {
    link: `https://q2-assi8.vercel.app/`,
    title: "Next.js & Sanity Project",
    description:
      "Exploring Sanity as a headless CMS with Next.js and Tailwind.",
    image: "./Sanity.png",
  },
  {
    link: `https://my-app-data-fetching.vercel.app/`,
    title: "API Data Fetching Project",
    description: "Fetching and displaying API data in a Next.js project.",
    image: "./get.png",
  },
  {
    link: `https://mob-responsive.vercel.app/`,
    title: "Educational Website Clone",
    description:
      "A cloned educational website built with Next.js and Tailwind CSS.",
    image: "./edu.png",
  },
  {
    link: `https://github.com/MuhammedSuhaib/1stfigmaClone.git`,
    title: "Jewelry Website Clone",
    description: "A pixel-perfect Figma-based jewelry website clone.",
    image: "./clone-img.webp",
  },
  {
    link: `https://tailwind-css-phi-woad.vercel.app/`,
    title: "Space Exploration Landing Page",
    description: "A Next.js landing page showcasing space exploration.",
    image: "./space.jpg",
  },
  {
    link: `https://my-1st-responsive-site.vercel.app/`,
    title: "Next.js Landing Page",
    description: "A landing page built with Next.js and pure CSS modules.",
    image: "./resp.jpg",
  },
  {
    link: `https://next-js-page-routing.vercel.app/`,
    title: "Next.js Hot Reload Demo",
    description: "A project demonstrating Next.js Hot Reload feature.",
    image: "./hotReload.png",
  },
  {
    link: `https://www.linkedin.com/posts/suhaib1_activity-7238076836780343296-H6YC?utm_source=social_share_send&utm_medium=member_desktop_web`,
    title: "CLI Ghost Image",
    description:
      "Displays a ghost image in the terminal using Chalk and animations.",
    image: "./ghoost.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/Fast-Quiz`,
    title: "CLI Quiz App",
    description:
      "A CLI-based quiz app built with TypeScript, Inquirer, and Chalk.",
    image: "./Quiz.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/Adventure-game`,
    title: "CLI Adventure Game",
    description:
      "A text-based adventure game created with TypeScript and CLI libraries.",
    image: "./g.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/Student-Management-System`,
    title: "CLI Student Management System",
    description: "A CLI-based student management system built with TypeScript.",
    image: "./Std.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/TODOS`,
    title: "CLI To-Do App",
    description:
      "A simple CLI to-do list application using TypeScript and Inquirer.",
    image: "./todos.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/ATM`,
    title: "CLI ATM Simulator",
    description: "A command-line ATM simulation built with TypeScript.",
    image: "./atm.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/currency_converter`,
    title: "CLI Currency Converter",
    description: "A CLI app for converting currencies using TypeScript.",
    image: "./crr.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/word_counter.git`,
    title: "CLI Word Counter",
    description: "A word-counting tool built for the terminal.",
    image: "./w.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/Guess-the-Number-Game`,
    title: "CLI Number Guessing Game",
    description: "A CLI game where users guess a number.",
    image: "./guess.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/smple_calculator`,
    title: "CLI Calculator",
    description: "A simple command-line calculator using TypeScript.",
    image: "./Simple.jpg",
  },
  {
    link: `https://github.com/MuhammedSuhaib/45-taks.git`,
    title: "Node.js TypeScript Tasks",
    description: "A collection of 45 TypeScript tasks built with Node.js.",
    image: "./45.png",
  },
];

function Projects() {
  return (
    <section
      id="pro"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "4rem 1rem",
      }}
    >
      <h1
        className={`${merienda.className} ${techStyles.title} ${techStyles.titlemd}`}
        style={{ margin: 0 }}
      >
        Projects
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {projects.map((project, index) => (
          <article key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={techStyles.card}
            >
              <div className={techStyles.cardImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={techStyles.cardImage}
                />
              </div>
              <div className={techStyles.cardHeader}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    margin: 0,
                    color: "#ffffff", // White text
                  }}
                >
                  {project.title}
                </h2>
              </div>
              <div className={techStyles.cardBody}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#a1a1aa", // Muted gray text
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;
