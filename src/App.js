import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    {/* <h1>App</h1> */}
  </div>
);

export default App;
