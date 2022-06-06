import { Col, Card } from "react-bootstrap";

const cardItem = ({img, title, text}) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <Card className="mt-5" style={{height: "225px"}}>
        <Card.Body>
          <img src={img} alt={title} className="mb-4 img-fluid" />
          <Card.Title className="fw-bold mt-4">{title}</Card.Title>
          <Card.Text className="mt-3">{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default cardItem;