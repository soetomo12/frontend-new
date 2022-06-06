import { Button, Card, Container } from "react-bootstrap";
import "../../style.css";

const SewaMobil = () => {
    return (
      <Container className="section-mb">
        <Card className="text-center text-white p-5" style={{backgroundColor: "#0d28a6"}}>
          <Card.Body>
            <h2 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <Card.Body className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            </Card.Body>
              <Button id="btn-sewa" className="fw-bold text-white" href="/cars">Mulai Sewa Mobil</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  };
  
  export default SewaMobil;