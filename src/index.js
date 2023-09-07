import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Akash.jpeg" alt="Akash Raghav" />;
}

function Intro() {
  return (
    <div>
      <h1> Akash Raghav </h1>
      <p>
        {" "}
        As a front-end developer , I love to create websites and applications
        using web languages such as HTML, CSS, and JavaScript that allow users
        to access and interact with the site or app.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="blue" />
      <Skill skill="Html+Css" color="red" />
      <Skill skill="Javascript" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
