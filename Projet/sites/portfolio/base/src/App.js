import React from "react";
import "./App.css";
import github from "./github.png";
import email from "./email.png";
import wa from "./whatsapp.png";
import profil from "./profil.jpg";
import ProjectCard from "./ProjectCard";
import ContactItem from "./ContactItem";

function App() {
  const projects = [
    {
      name: "Arenah",
      tech: "AJAX, HTML, CSS",
      description: "L’objectif de ce projet était de concevoir un site web moderne et intuitif pour permettre aux clients de découvrir facilement le restaurant, son menu et ses différentes spécialités. L’interface a été pensée pour offrir une navigation fluide et agréable, tout en présentant les informations de manière claire et accessible. L’utilisation d’AJAX permet également de rendre certaines interactions plus dynamiques sans nécessiter le rechargement complet de la page. Ce projet m’a permis de renforcer mes compétences en HTML, CSS et JavaScript, tout en mettant en pratique la conception d’interfaces responsive et interactives adaptées aux différents supports.",
      link: "https://690f4d5340182d31450917f7--joyful-macaron-ccff47.netlify.app/"
    },
    {
      name: "Karataka",
      tech: "React",
      description: "L’objectif de ce site est de présenter et de publier notre projet de jeu vidéo, développé dans le cadre de notre formation. Il permet de mettre en avant l’univers du jeu, son concept, ses fonctionnalités ainsi que les différents éléments qui composent le projet. Le site a été conçu comme une véritable vitrine du projet afin de permettre aux visiteurs de découvrir le jeu, de comprendre son fonctionnement et de suivre son évolution. À travers ce projet, nous avons également mis en pratique plusieurs compétences en développement web, notamment la conception d’une interface responsive, l’organisation du contenu, la création d’une expérience utilisateur cohérente et la mise en ligne du projet. Ce site représente ainsi à la fois une plateforme de présentation pour notre jeu vidéo et une démonstration de notre travail en équipe et de nos compétences techniques.",
      link: "https://jusinho7.github.io/sparkup/"
    }
  ];

  const contacts = [
  {
    name: "Email",
    url: "mailto:lucasjusinho@gmail.com",
    icon: email,
    hoverColor: "#4facfe", 
  },
  {
    name: "GitHub",
    url: "https://github.com/Jusinho7",
    icon: github,
    hoverColor: "#333", 
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
      <header className="site-header">
        <a className="brand" href="#accueil">SJ<span>.</span></a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Développeur logiciel junior</p>
            <h1>Des solutions simples pour des <em>problèmes concrets.</em></h1>
            <p className="hero-description">
              Je suis Sitraka José, développeur junior passionné par la programmation et la résolution de problèmes. Je travaille avec Python, C, JavaScript et React, en m’adaptant aux besoins de chaque projet.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projets">Découvrir mes projets <span>↗</span></a>
              <a className="text-button" href="#contact">Parlons de votre idée</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <img src={profil} alt="Sitraka José" className="profile-photo" />
            <div className="availability"><span /> Disponible pour un projet</div>
          </div>
        </section>

        <section className="quick-facts" aria-label="Informations rapides">
          <div><strong>02</strong><span>projets présentés</span></div>
          <div><strong>Python & C</strong><span>mes bases de programmation</span></div>
          <div><strong>100%</strong><span>curiosité et implication</span></div>
        </section>

        <section className="content-section" id="competences">
          <div className="section-heading">
            <p className="eyebrow">Ce que je pratique</p>
            <h2>Une approche polyvalente, une envie constante de progresser.</h2>
          </div>
          <ul className="skills-grid">
            <li><span>01</span><strong>Développement</strong><p>Python, C, JavaScript et React selon les objectifs et les contraintes du projet.</p></li>
            <li><span>02</span><strong>Python & C</strong><p>Une base solide en programmation, en logique et en résolution de problèmes.</p></li>
            <li><span>03</span><strong>Algorithmique</strong><p>Je conçois des algorithmes structurés et efficaces pour résoudre des problèmes concrets.</p></li>
          </ul>
        </section>

        <section className="content-section projects-section" id="projets">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow">Sélection personnelle</p><h2>Quelques projets dont je suis fier.</h2></div>
            <span className="project-count">01 — 02</span>
          </div>
          <div className="projects">
            {projects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
          </div>
        </section>

        <section className="contact-panel" id="contact">
          <div><p className="eyebrow">Un projet en tête ?</p><h2>Construisons quelque chose de mémorable.</h2></div>
          <div className="contact-content"><ul>{contacts.map((contact, index) => <ContactItem key={index} contact={contact} />)}</ul></div>
        </section>
      </main>

      <footer><span>© 2026 Sitraka José</span><span>Conçu avec React</span></footer>
    </div>
  );
}

export default App;
