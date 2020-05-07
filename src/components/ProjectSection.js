import React from 'react';
import { github, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Row, Col } from "reactstrap"
export default function Footer() {

  const projects = [
    {
      title: "Project 1",
      description: "Project 1 description",
      github: "https://github.com/mibaska/Project01",
      demo: "https://mibaska.github.io/Project01/starwars-quiz.html"
    },
    {
      title: "Project 2",
      description: "Project 2 description",
      github: "https://mibaska.github.io/Project01/starwars-quiz.html",
      demo: "https://immense-wildwood-98172.herokuapp.com"
    },
    {
      title: "Project 3",
      description: "Project 3 description",
      github: "https://github.com/algarran/finalproject",
      demo: ""
    },
    {
      title: "Project 4",
      description: "Project 4 description",
      github: "",
      demo: ""
    },
  ]

  return (
    <Element name="projectSection" className="section">
      <h1>Project Section</h1>

      {projects.map((project, index) => {

        return (
          <Col xs={12} md={6} lg={4}>
              <div style={{margin:`10px`, border:`1px solid black`}}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.github}>GitHub Link</a><br/>
                <a href={project.demo}>Live Demo</a>
              </div>
          </Col>
        )
      })}

    </Element>
  );
}