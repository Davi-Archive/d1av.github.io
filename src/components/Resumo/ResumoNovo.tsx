import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
/* import { Document, Page } from "react-pdf"; */
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const resumoLinkAutoAtualiza = "https://raw.githubusercontent.com/d1av/d1av.github.io/main/src/Assets/DaviAlves-developer.pdf";

function ResumeNew() {
  const pdf = require("../../Assets/../Assets/DaviAlves-developer.pdf");
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumoLinkAutoAtualiza ?? pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Baixar CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumoLinkAutoAtualiza ?? pdf} className="d-flex justify-content-center"
          options={{ workerSrc: "/pdf.worker.js" }}>  {/* mudar quando tiver no github */}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumoLinkAutoAtualiza ?? pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Baixar CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
