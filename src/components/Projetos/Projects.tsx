import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projetos() {
  const medida = require('../../Assets/Projects/medida.png')
  const portfolio = require('../../Assets/Projects/portfolio.png')
  const calcMedia = require('../../Assets/Projects/calc-media.png')
  const promocao = require('../../Assets/Projects/promocao.png')
  const cryptoBackend = require('../../Assets/Projects/cryptoBack.png')
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Alguns projetos que venho trabalhando recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Porfolio Site"
              description="Portfolio baseado em edição em react com adição de novos módulos, edição e mudanças no projeto de 'soumyajit4419'."
              ghLink="https://github.com/davi38/davi38.github.io"
              demoLink="./"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promocao}
              isBlog={false}
              title="Página de Promoção"
              description="Página de promoção para cadastro de empresas com acesso a uma API com método POST"
              ghLink="https://github.com/davi38/atelie-frontend"
              demoLink="https://davi38.github.io/atelie-frontend/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoBackend}
              isBlog={false}
              title="Crypto Backend"
              description="Página web feita com integração a uma API para você saber a cotação das 10 melhores cryptomoedas no EUA."
              ghLink="https://github.com/davi38/crypto-backend"
              demoLink="https://crypto-backend-eta.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medida}
              isBlog={false}
              title="Conversor de Medidas"
              description="Conversor de medidas que transforma 3 medidas, Quilômetro, Metro e Anos-Luz o algoritmo é feito em Javascript e a página é feita em html com estilos em CSS."
              ghLink="https://github.com/davi38/Conversor-de-Medidas"
              demoLink="https://davi38.github.io/Conversor-de-Medidas/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcMedia}
              isBlog={false}
              title="Calcular Média"
              description="Página web feita para calculo de média escolar bimestral, com média necessária para ser aprovado em 7 e mensagem especial para alunos com média acima de 9, algoritmo feito em Javascript."
              ghLink="https://github.com/davi38/Calcular-Media"
              demoLink="https://davi38.github.io/Calcular-Media/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projetos;
