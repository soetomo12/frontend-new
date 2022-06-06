import { Col, Container, Row } from "react-bootstrap";
import AccordionItem from "./accordionItem";
import { itemDetails } from "./itemDetails";

const Faq = () => {
  return (
    <Container className="section-mb" id="FAQ">
      <Row>
        <Col md={5} xs={10}>
          <h2 className="fw-bold mb-4">Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col>
          {itemDetails.map((accordion, id) => {
            return <AccordionItem key={id} {...accordion} id={id} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;