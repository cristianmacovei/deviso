import "./App.css";
import Bar from "./Bar";
import Menu from "./Menu";
import About from "./About";

import Content from "./Content";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import { useState, useEffect } from "react";

export default function App() {
  function scrollToTarget(target) {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  }
  const [showButton, setShowButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Show the button when scrolling down and hide when at the top
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      //Calc position Y of contact form
      const contactFormPos = document.getElementById("contact").offsetTop;

      setShowButton(window.scrollY > contactFormPos);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="bg-white">
        <Menu scrollToTarget={scrollToTarget} />
        <Bar />
        <About />
        <Content />

        <ContactForm />
        <Footer showButton={showButton} />
      </div>
    </>
  );
}
