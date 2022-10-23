import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiReact } from 'react-icons/di';
import { FaBook } from 'react-icons/fa';





function Home2() {
  const myImg = require("../../Assets/avatar.png")
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UMA BREVE <span className="purple"> INTRODUÇÃO </span>
            </h1>
            <span className="home-about-body">
              Gosto muito de Web desenvolvimento, caso precise de um site ou
              aplicação, entre em contato. <FaBook />
              <br />
              <br />
              Habilidades:
              <i>
                <span className="yellow">
                  <ul>
                    <li>Typescript</li>
                    <li>
                      React ( React-hooks , Redux , Router , TailwindCSS ,
                      Bootspring , Nextjs , SASS )
                    </li>
                    <li>Nodejs ( Javascript , Expressjs )</li>
                    <li>Banco de Dados ( PostgreSQL , MySQL , MongoDB )</li>
                    <li>Git , Github e Docker</li>
                    <li>Javascript, HTML, CSS</li>
                    <li>BASH e Shell</li>
                    <li> Inglês Avançado</li>
                    <li>E muitas outras...</li>
                  </ul>
                </span>
                <b className="purple">
                  Este site foi feito em React <DiReact />
                </b>
                , usando diversos modulos e as melhores práticas.
              </i>
              <br />
              <br />
              Meus interesses estão em desenvolver&nbsp;
              <i>
                <b className="purple">Produtos e Tecnologias para a Web </b>,
                gosto de{" "}
                <b className="purple">Frameworks e Aplicativos para Celular.</b>
              </i>
              <br />
              <br />
              Estou sempre criando sites! caso precise de um entre em{" "}
              <b className="purple">contato.</b>
            </span>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME SIGA NAS REDES</h1>
            <p>
              Fique livre para me{" "}
              <span className="purple">mandar uma mensagem</span>.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/d1av"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DaviAlvesOli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/d1av/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:davi4alves@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
