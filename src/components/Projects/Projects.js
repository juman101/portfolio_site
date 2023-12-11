import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/bill_system.jpg";
import chatify from  "../../Assets/Projects/jacks_movie.jpeg";
import bitsOfCode from "../../Assets/Projects/get_my_thoughts.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MOVIFLIX"
              description="A dynamic and fully responsive web app that explores exciting movies and web shows."
              ghLink="https://github.com/juman101/jacksmovie"
              demoLink="https://lucent-youtiao-42d69a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Get_My_Thoughts"
              description="a web application that employs the OpenAI’s API to transform text descriptions into lifelikeimages and artworks . "
              ghLink="https://github.com/juman101/imagegenerator/tree/master"
              demoLink="https://github.com/juman101/imagegenerator/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Billing_System"
              description="A Java and Swing based Desktop application used for generating bills and storing various information"
              ghLink="https://github.com/juman101/billsystem"
              demoLink="https://github.com/juman101/billsystem"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/juman101/emotion_detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
