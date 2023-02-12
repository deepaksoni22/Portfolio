import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";

import Contact from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import instagramPage from "./assets/instagramPage.png";
import capstone from "./assets/capstone.png";
import canvas from "./assets/canvas.png";
import dragdrop from "./assets/Drag&Drop.png";
import bootstrapGym from "./assets/bootstrapGym.png";
import todo from "./assets/todo.png";
import entertainmentWeb from "./assets/entertainmentWeb.png";
import stopWatch from "./assets/stopWatch.png";
import navbar from "./assets/navbar.png";
import eCommerce from "./assets/eCommerce.png";

function App() {
  const projects = [
    {
      "HTML and CSS": [
        {
          Name: "Capstone",
          Link: "https://lioo-5a3ad.web.app/#",
          Image: capstone,
        },
        {
          Name: "Drag&Drop",
          Link: "https://draganddrop-e52f8.web.app/",
          Image: dragdrop,
        },
        {
          Name: "Instagram Page",
          Link: "https://instagramdeepaksoni.web.app/",
          Image: instagramPage,
        },
        {
          Name: "Canvas",
          Link: "https://canvas-c1dd7.firebaseapp.com/",
          Image: canvas,
        },
      ],
    },
    {
      Bootstrap: [
        {
          Name: "BootstrapGym",
          Link: "https://bootstrap-d97fd.web.app/",
          Image: bootstrapGym,
        },
      ],
    },
    {
      JavaScript: [
        {
          Name: "EntertainmentWeb",
          Link: "https://web9529-7fb8c.firebaseapp.com/",
          Image: entertainmentWeb,
        },
      ],
    },
    {
      React: [
        {
          Name: "Todo List Redux",
          Link: "https://todolist-6c440.web.app/",
          Image: todo,
        },
        {
          Name: "Stop Watch ",
          Link: "https://stopwatch-reducers.web.app/",
          Image: stopWatch,
        },
        {
          Name: "Navbar ",
          Link: "https://nav-bar-b8535.web.app/Contact",
          Image: navbar,
        },
        {
          Name: "E-Commerce ",
          Link: "https://e-commerce-7d92f.web.app/",
          Image: eCommerce,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio array={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
