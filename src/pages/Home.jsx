/*
    File: Home.jsx
    Author: Vadym Lidovskyi
    Copyright: 2023 - Vadym Lidovskyi https://edpark.space
    Version: 1.0
*/

import { useOutletContext } from "react-router-dom";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
// import Testimonials from "../components/Testimonials";
import SplashSection from "../components/SplashSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [isDarkMode] = useOutletContext();

  return (
    <>
      <SplashSection
        splashMessage={"AI API Integration GPT-4 | RAG | LLM"}
        isDarkMode={isDarkMode}
        isErrorMode={false}
      />
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h1 className="text-center max-w-[18em]">
          Solving Visions with Passion and Technical Expertise
        </h1>
        <p className="text-justify">
          Hello, and welcome! I&apos;m Vadym Lidovskyi, AI Web developer with a
          passion for solving visions through technical expertise. Like many
          others, initial interest lay in web and E-commerce development, and
          still continue to development. With a blend of creativity and
          technical expertise, I take pride in crafting user-centric Chatbot and
          websites that leave a lasting impact. I'm excited about the
          opportunity to contribute my skills and expertise to your
          projectsTogether, let&apos;s unravel the possibilities of the digital
          realm and create online solutions that captivate, inspire, and drive
          success.
        </p>
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>My Projects</h2>
        <Projects />
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        {/* <h2>Testimonials</h2>
        <Testimonials /> */}
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Contact</h2>
        <Socials />
        <p className="text-center">
          Are you ready to unlock your dream? Let&apos;s chat!
        </p>
        <ContactForm />
      </section>
    </>
  );
}
