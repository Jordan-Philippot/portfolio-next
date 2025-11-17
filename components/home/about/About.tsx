import React, { useRef, useState } from "react";

export default function About({ AboutComponentRef }) {
  const [showSkills, setShowSkills] = useState(true);

  const smokyPresentationRef = useRef();
  const smokyDescriptionRef = useRef();

  return (
    <section id="about" className="container-fluid" ref={AboutComponentRef}>
      <h2>À propos</h2>

      <div className="container-about">
        <p id="about-presentation" ref={smokyPresentationRef}>
          En tant que développeur Fullstack <b>JavaScript</b> et <b>PHP</b>,
          j'ai fait le choix de me spécialiser sur la bibliothèque{" "}
          <b>ReactJS</b> et le framework <b>Symfony</b>.
          <br></br>
          <br></br>
          Depuis 2020, j'ai contribué à de nombreux projets, dont la création
          des sites web de la start-up Ted Consulting (& Aliz), dans laquelle
          j'ai effectué mon alternance, ainsi que la refonte complète d'un back-office chez Meilleurtaux Assurances.
          <br /><br/>
          Les compétences acquises durant ces 4 années me permettent aujourd'hui
          de répondre tant aux problématiques techniques que clientèles, le tout
          dans les plus brefs délais et dans une approche agile.
          <br /><br/>
          Mon appétence pour le front m'a également conféré une attention toute particulière à l'expérience utilisateur,
          allant du design aux performances web, en passant par la mise en cache des données côté client de manière sécurisée.   
        </p>

        <div className="hr-dotted"></div>

        <div id="about-description" ref={smokyDescriptionRef}>
          <div className="description-choice">
            <h3
              className={`${showSkills ? "choice-active" : "choice-inactive"}`}
              onClick={() => setShowSkills(true)}
            >
              Mes compétences
            </h3>
            <h3
              className={`${showSkills ? "choice-inactive" : "choice-active"}`}
              onClick={() => setShowSkills(false)}
            >
              Languages et outils{" "}
            </h3>
          </div>

          <div>
            {showSkills ? (
              <div className="revealScroll" id="skills">
                <p>Méthode agile / Scrum</p>
                <p>Web performance</p>
                <p>Gestion du cache</p>
                <p>Intégration Design system</p>
                <p>API REST </p>
                <p>Stripe (système de paiement CB / SEPA) </p>
                <p>Création d'espace client & admin </p>
                <p>Listeners d’entités</p>
                <p>Modélisation de BDD </p>
                <p>Création de webhook</p>
                <p>CI/CD </p>
                <p>Tâches CRON </p>
                <p>Envoies automatisés de SMS / Email </p>
                <p>Création / intégration de maquettes</p>
              </div>
            ) : (
              <div className="revealScroll" id="langage">
                <p>React </p>
                <p>Typescript</p>
                <p>Redux</p>
                <p>React-Query</p>
                <p>Symfony</p>
                <p>Styled components</p>
                <p>Jira</p>
                <p>Github</p>
                <p>GCP</p>
                <p>SQL / NOSQL </p>
                <p>GSAP animation</p>
                <p>Scss </p>
                <p>Figma</p>
                <p>Brevo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
