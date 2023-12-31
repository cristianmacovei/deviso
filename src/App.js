import "./App.css";
import Bar from "./Bar";
import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";
import Content from "./Content";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import BlogSection from "./BlogSection";
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

  //  RETURN HERE
  return (
    <>
      <div className="bg-white">
        <Menu scrollToTarget={scrollToTarget} />
        <Bar />
        <About />
        <Content />
        <BlogSection />
        <ContactForm />
        <Footer showButton={showButton} scrollToTarget={scrollToTarget} />
      </div>
    </>
  );
}
