import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Html & Css",
    level: "Advanced",
    color: "yellow",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "#98E776",
  },
  {
    skill: "React & Next ",
    level: "Beginner",
    color: "Grey",
  },
  {
    skill: "Framer & Figma ",
    level: "Advanced",
    color: "#aaffe2",
  },
  {
    skill: "Postman ",
    level: "Beginner",
    color: "Orange",
  },
  {
    skill: "Martial Arts ",
    level: "Intermediate",
    color: "#3da846",
  },
];

const App = () => {
  return (
    <div className="card">
      <header>
        <h1>Let's build the Profile</h1>
      </header>
      <Avatar />
      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div className="image">
      <img src="./good.PNG" alt="Profile-Pic" />;
    </div>
  );
}

function Intro() {
  return (
    <div className="myInfo">
      <h2>Mohamed Bakuly</h2>
      <p>
        Future Psychologist, A Design-Engineer and Founder of PhotoHive,aiming
        to make artist have longlasting careers with their skills. I enjoy
        Martial Arts on my leisure time.
      </p>
    </div>
  );
}

function Skillset() {
  return (
    <div className="allSkills">
      {skills.map((skilled) => (
        <Theskills
          skill={skilled.skill}
          level={skilled.level}
          color={skilled.color}
          key={skilled.skill}
        />
      ))}

      {/* <Skills language="Html & Css +" emoji="😂" color="yellow" />
      <Skills language="JavaScript +" emoji="✈️" color="#98E776" />
      <Skills language="React & Next +" emoji="🚀" color="Grey" />
      <Skills language="Framer & Figma +" emoji="🌟" color="#aaffe2" />
      <Skills language="Postman +" emoji="🌌" color="Orange" />
      <Skills language="Martial Arts +" emoji="🥋" color="#3da846" /> */}
    </div>
  );
}

function Theskills({ skill, color, level }) {
  return (
    <div className="background" style={{ backgroundColor: color }}>
      {skill}
      {level === "Beginner" && "😂"}
      {level === "Advanced" && "🚀"}
      {level === "Intermediate" && "🌟"}
    </div>
  );
}

// function Skills(props) {
//   return (
//     <div className="background" style={{ backgroundColor: props.color }}>
//       {props.language} {props.emoji}
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
