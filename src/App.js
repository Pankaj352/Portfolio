import "./App.css";
// Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import Blog from "./components/blog/Blog";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Header component always visible */}
      <Header />

      {/* Main content */}
      <main className="main">
        <Routes>
          {/* Single Page Application */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Work />
                <Testimonials />
                <Contact />
              </>
            }
          />
          {/* Blog page */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      {/* Footer and Scroll Up always visible */}
      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
}

export default App;
