import React from "react";
import "./App.css";
import "./Iphoneresponsive.css";
import "./Ipadresponsive.css";
import github from "./github.png";
import email from "./email.png";
import insta from "./instagram.png";
import fb from "./facebook.png";
import wa from "./whatsapp.png";
import profil from "./profil.jpg";
import ProjectCard from "./ProjectCard";
import ContactItem from "./ContactItem";

function App() {
  const projects = [
    {
      name: "Arenah",
      tech: "AJAX, HTML, CSS",
      description: "L’objectif était de concevoir une interface moderne et intuitive permettant aux clients de découvrir le menu, visualiser les spécialités et naviguer facilement sur le site. Ce projet m’a permis de mettre en pratique mes compétences en JavaScript, HTML et CSS, tout en apprenant à créer un site responsive et interactif",
      link: "https://690f4d5340182d31450917f7--joyful-macaron-ccff47.netlify.app/",
    },
  ];

  const contacts = [
  {
    name: "Email",
    url: "mailto:lucasjusinho@gmail.com",
    icon: email,
    hoverColor: "#4facfe", 
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jose_rasul/",
    icon: insta,
    hoverColor: "#e1306c",
  },
  {
    name: "GitHub",
    url: "https://github.com/Jusinho7",
    icon: github,
    hoverColor: "#333", 
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/hose.rasoru",
    icon: fb,
    hoverColor: "#1877f2", 
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/261324643193?text=Bonjour%20José,%20je%20veux%20vous%20contacter%20pour%20un%20projet.",
    icon: wa,
    hoverColor: "#25d366", 
  },
];

  return (
    <div className="App">

      <section className="all">
        <section className="intro">
          <img 
            src={profil}
            alt="Photo de moi" 
            className="profile-photo"
          />
          <div className="intro-text">
            <h1>Bonjour, je suis Sitraka José</h1>
            <p>
              Je suis un développeur web junior passionné par React et JavaScript. Je crée des sites web modernes, interactifs et responsives qui aident les clients à concrétiser leurs idées.
            Toujours à l’affût des nouvelles technologies, j’aime concevoir des interfaces élégantes et performantes, avec une attention particulière au détail et à l’expérience utilisateur.
            Disponible pour des projets freelance, je transforme vos idées en applications web fiables et stylées. 
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Compétences Techniques</h2>
          <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>React / AJAX</li>
            <li>Responsive Design</li>
          </ul>
        </section>
      </section>

      <section className="second">
        <section className="projects-section">
          <h2>Mes Projets</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <div className="contact-content">
            <ul>
              {contacts.map((contact, index) => (
                <ContactItem key={index} contact={contact} />
              ))}
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
