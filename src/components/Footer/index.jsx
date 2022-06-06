import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return(
        <Container className="section-mb">
            <Row className="g-5">
                <Col xs={12} md={4}>
                    Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    <br /><br />
                    binarcarrental@gmail.com
                    <br /><br />
                    081-233-334-808
                </Col>
                <Col xs={12} md={2}>
                    Our services
                    <br /><br />
					Why Us
					<br /><br />
					Testimonial
					<br /><br />
					FAQ
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <Col>
                            Connect with us
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-3 mx-auto">
                            <img src="images/Home/icon_facebook.png" className="img-fluid mt-2" width="35px" />
							<img src="images/Home/icon_instagram.png" className="img-fluid mt-2 ms-1" width="35px"/>
							<img src="images/Home/icon_twitter.png" className="img-fluid mt-2 ms-1" width="35px"/>
							<img src="images/Home/icon_mail.png" className="img-fluid mt-2 ms-1" width="35px" />
							<img src="images/Home/icon_twitch.png" className="img-fluid mt-2 ms-1" width="35px"/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={2}>
                    <Row>
                        <Col>
                            Copyright Binar 2022
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <img src="/images/Home/logo.png" alt="logo" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;