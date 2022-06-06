import { Container, Row } from "react-bootstrap";
import CardItem from "./cardItem";

const WhyUs = () => {
  return (
    <Container className="section-mb" id="WhyUs">
        <h3 className="fw-bold">Why Us?</h3>
        <p className="mt-4">Mengapa harus pilih Binar Car Rental?</p>
      <Row>
        <CardItem img="images/Home/icon_complete.png" title="Mobil Lengkap" text="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat" />
        <CardItem img="images/Home/icon_price.png" title="Harga Murah" text="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain" />
        <CardItem img="images/Home/icon_24hrs.png" title="Layanan 24 Jam" text="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu" />
        <CardItem img="images/Home/icon_professional.png" title="Sopir Profesional" text="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu" />
      </Row>
    </Container>
  );
};

export default WhyUs;