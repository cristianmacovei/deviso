import "./App.css";
import Bar from "./Bar";
import Menu from "./Menu";
import About from "./About";

import Content from "./Content";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div className="bg-white">
        <Menu />
        <Bar />
        <About />
        <Content />

        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
