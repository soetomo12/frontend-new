import { Button, Container, Col, Row } from "react-bootstrap";
import "../../style.css";

const Sewa = () => {
    return (
        <>
        <section className="nav-background">
            <Container>
                <Row className="section-mb">
                    <Col className="mt-5 mx-auto" xs={12} md={12} lg={6} >
                        <h2 className="fw-bold lh-base w-75">Sewa & Rental Mobil Terbaik di kawasan Malang</h2>
                        <p className="w-75 mt-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <Button className="fw-bold text-white mt-4 mb-5" id="btn-sewa" href="/cars">Mulai Sewa Mobil</Button>
                    </Col>
                    <Col className="mx-auto" xs={12} md={12} lg={6}>
                        <img src="/images/Home/img_car.png" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
  };
  
export default Sewa;