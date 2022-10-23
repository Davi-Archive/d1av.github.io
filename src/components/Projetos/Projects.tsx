import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projetos() {
  const portfolio = require("../../Assets/Projects/portfolio.png");
  const promocao = require("../../Assets/Projects/promocao.png");
  const cryptoBackend = require("../../Assets/Projects/cryptoBack.png");

  const projects: any = [
    {
      title: "Site Portfólio em inglês",
      image:
        "https://user-images.githubusercontent.com/107776531/193162591-da3ad0da-f8a7-4d69-a430-add61df868b7.png",
      description:
        "Portfolio para melhor apresentação internacional, feito com React.js e Express.",
      ghLink: "https://github.com/d1av/portfolio-en-client",
      demoLink: "https://portfolio-davi.vercel.app/",
    },
    {
      title: "Dashboard Portfólio em inglês",
      image:
        "https://user-images.githubusercontent.com/107776531/195632496-5f8b8f14-597e-4827-83a6-1b22a71c1839.png",
      description:
        "Aplicação para editar informações do meu portfólio atraves de uma dashboard.",
      ghLink: "https://github.com/d1av/portfolio-en-dashboard",
      demoLink: "https://dashboard-portfolio.netlify.app/",
    },
    {
      title: "E-Commerce",
      image:
        "https://raw.githubusercontent.com/davi38/davi38.github.io/main/src/Assets/Projects/ecommerce.png",
      description:
        "Página funcional de um E-Commerce com carrinho de compras usando low code.",
      ghLink: "https://github.com/d1av/ecommerce-nextjs",
      demoLink: "https://ecommerce-site-taupe.vercel.app/",
    },
    {
      title: "Buscador Mejor con Salud",
      image:
        "https://raw.githubusercontent.com/davi38/davi38.github.io/main/src/Assets/Projects/custom-search.png",
      description:
        "Buscador que realiza pesquisa na API do Site mejor con salud.",
      ghLink: "https://github.com/d1av/custom-search",
      demoLink: "https://buscamejorsalud.vercel.app/",
    },
    {
      title: "Site para Pet Shop",
      image:
        "https://raw.githubusercontent.com/davi38/davi38.github.io/main/src/Assets/Projects/petshop.png",
      description: "Site para Pet Shop usando dados de uma API.",
      ghLink: "https://github.com/d1av/petshop-client",
      demoLink: "https://d1av.github.io/petshop-client/",
    },
    {
      title: "Site Portfólio",
      image: portfolio,
      description:
        "Portfolio para melhor apresentação, feito com Typescript e React.js.",
      ghLink: "https://github.com/d1av/d1av.github.io",
      demoLink: "./",
    },
    {
      title: "Página de Promoção",
      image: promocao,
      description:
        "Página de promoção para cadastro de empresas com acesso a uma API com método POST.",
      ghLink: "https://github.com/d1av/promotion-site-client",
      demoLink: "https://d1av.github.io/promotion-site-client/",
    },
    {
      title: "Crypto Backend",
      image: cryptoBackend,
      description:
        "Página web feita com integração a uma API para você saber a cotação das 10 melhores cryptomoedas no EUA.",
      ghLink: "https://github.com/Davi-Archive/crypto-backend",
      demoLink: "https://crypto-backend-eta.vercel.app/",
    },
    {
      title: "Placar em React",
      image:
        "https://raw.githubusercontent.com/d1av/d1av.github.io/main/src/Assets/Projects/placar.png",
      description: "Placar feito em React.",
      ghLink: "https://github.com/d1av/placar-react",
      demoLink: "https://d1av.github.io/placar-react/",
    },
  ];
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
          {projects.map((project: any) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projetos;
