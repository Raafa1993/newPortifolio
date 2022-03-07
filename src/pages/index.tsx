import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Nav from "../components/sections/Nav";
import Portfolio from "../components/sections/Portfolio";

export default function Home() {
  return (
    <div className="container">
      <div className="main">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>  
    </div>
  )
}
