import React from 'react';
import Project from '../../components/Project';


const projectCard = [

  {
    deployedLink: "https://sharing-is-caring-dreamteam.herokuapp.com/login",
    imageIcon: "Productivity-Hub-SS.png",
    descriptionImage: "Productivity Hub",
    projectName: "Sharing Caring",
    projectDescription: "A food app that you can comment on.",
    githubLink: "https://github.com/mus-ali1/sharing-is-caring",
    id: 1
  },
  {
    deployedLink: "https://jjcourtney.github.io/PDJ-InfoCraft/",
    imageIcon: "Team-Profile-Cards.png",
    descriptionImage: "Profile Cards",
    projectName: "InfoCraft",
    projectDescription: "An application that helps you keep track of your minecraft profile.",
    githubLink: "https://github.com/jjcourtney/PDJ-InfoCraft/",
    id: 2
  },
  {
    deployedLink: "https://odders17.github.io/Work-Day-Scheduler/",
    imageIcon: "Daily-Planner-Blank.png",
    descriptionImage: "work schedule",
    projectName: "Daily Work Planner",
    projectDescription: "An application that allows the user to see their appointments for the day color coding times by past, present, and future events.",
    githubLink: "https://github.com/odders17/Work-Day-Scheduler",
    id: 3
  },
  {
    deployedLink: "https://odders17.github.io/Weather-Dashboard/",
    imageIcon: "Weather-Dashboard.png",
    descriptionImage: "Weather Dashboard",
    projectName: "Weather Dashboard",
    projectDescription: "An application that lets the user see the current weather and the forecast for the next 5 days.",
    githubLink: "https://github.com/odders17/Weather-Dashboard",
    id: 4
  },
  {
    deployedLink: "https://odders17.github.io/Password-Generator/",
    imageIcon: "Password-Generator-SS.png",
    descriptionImage: "Password Generator",
    projectName: "Password Generator",
    projectDescription: "An application that generates a random password for a user based on the criteria selected.",
    githubLink: "https://github.com/odders17/Password-Generator",
    id: 5
  }
 
];

function Portfolio() {
    return (
      <div>
        {projectCard.map((project ) => (
          <Project project = { project } />
        ))}
      </div>
    )
  };
  
  export default Portfolio;

      
  