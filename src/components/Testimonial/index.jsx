import { Col, Container, Row, Carousel, Card } from "react-bootstrap";

const Testimonial = () => {
    return(
        <Container className="section-mb" id="Testimonial">
            <Row>
                <Col className="text-center">
                    <h3 className="fw-bold">Testimonial</h3>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-4">
                    Berbagai review positif dari para pelanggan kami
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={8} className="mx-auto">
                    <Carousel>
                        <Carousel.Item>
                        <Card className="mb-3" style={{backgroundColor: "#f1f3ff"}}>
                            <Row className="g-0 mx-2 my-5">
                                <Col md={3} className="my-auto text-center">
                                    <img src="/images/Home/img_photo_1.png" alt="" className="img-fluid rounded-start"/>
                                </Col>
                                <Col md={8} className="text-start">
                                    <Card.Body>
                                        <img src="/images/Home/Rate.png" alt="" style={{ height: "16px" }} className="img-fluid"/>
                                        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                        <strong className="mt-2">John Dee 32, Bromo</strong>    
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Card className="mb-3" style={{backgroundColor: "#f1f3ff"}}>
                            <Row className="g-0 mx-2 my-5">
                                <Col md={3} className="my-auto text-center">
                                    <img src="/images/Home/img_photo_2.png" alt="" className="img-fluid rounded-start"/>
                                </Col>
                                <Col md={8} className="text-start">
                                    <Card.Body>
                                        <img src="/images/Home/Rate.png" alt="" style={{ height: "16px" }} className="img-fluid"/>
                                        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                        <strong className="mt-2">John Dee 32, Bromo</strong>    
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="mb-3" style={{backgroundColor: "#f1f3ff"}}>
                            <Row className="g-0 mx-2 my-5">
                                <Col md={3} className="my-auto text-center">
                                    <img src="/images/Home/img_photo_1.png" alt="" className="img-fluid rounded-start"/>
                                </Col>
                                <Col md={8} className="text-start">
                                    <Card.Body>
                                        <img src="/images/Home/Rate.png" alt="" style={{ height: "16px" }} className="img-fluid"/>
                                        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                        <strong className="mt-2">John Dee 32, Bromo</strong>    
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        </Carousel.Item>
                    </Carousel> 
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonial;