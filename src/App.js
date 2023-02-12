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
          GitCode: "https://github.com/deepaksoni22/capstone.git",
        },
        {
          Name: "Drag&Drop",
          Link: "https://draganddrop-e52f8.web.app/",
          Image: dragdrop,
          GitCode: "https://github.com/deepaksoni22/drag-and-drop",
        },
        {
          Name: "Instagram Page",
          Link: "https://instagramdeepaksoni.web.app/",
          Image: instagramPage,
          GitCode: "https://github.com/deepaksoni22/instagramPage",
        },
        {
          Name: "Canvas",
          Link: "https://canvas-c1dd7.firebaseapp.com/",
          Image: canvas,
          GitCode: "https://github.com/deepaksoni22/canvasCircle",
        },
      ],
    },
    {
      Bootstrap: [
        {
          Name: "BootstrapGym",
          Link: "https://bootstrap-d97fd.web.app/",
          Image: bootstrapGym,
          GitCode: "https://github.com/deepaksoni22/bootstrapGym",
        },
      ],
    },
    {
      JavaScript: [
        {
          Name: "EntertainmentWeb",
          Link: "https://web9529-7fb8c.firebaseapp.com/",
          Image: entertainmentWeb,
          GitCode: "https://github.com/deepaksoni22/Portfolio.git",
        },
      ],
    },
    {
      React: [
        {
          Name: "Todo List Redux",
          Link: "https://todolist-6c440.web.app/",
          Image: todo,
          GitCode: "https://github.com/deepaksoni22/redux-todo-app.git",
        },
        {
          Name: "Stop Watch ",
          Link: "https://stopwatch-reducers.web.app/",
          Image: stopWatch,
          GitCode: "https://github.com/deepaksoni22/StopWatch-Reducers",
        },
        {
          Name: "Navbar ",
          Link: "https://nav-bar-b8535.web.app/Contact",
          Image: navbar,
          GitCode: "https://github.com/deepaksoni22/NavBar.git",
        },
        {
          Name: "E-Commerce ",
          Link: "https://e-commerce-7d92f.web.app/",
          Image: eCommerce,
          GitCode: " https://github.com/deepaksoni22/E-commerce.git ",
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
