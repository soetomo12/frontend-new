import { Container, Row } from "react-bootstrap";
import CardHasil from "./cardHasil";

const Tampilan = () => {
  return (
    <Container className="section-mb" id="Tampilan">
      <Row>
        <CardHasil
          img="https://picsum.photos/id/1071/640/480"
          title="Mobil Avanza"
          biaya="Rp. 1.000.000/hari"
          deskripsi="Mobil Avanza merupakan mobil yang terbuat dari bahan berkualitas dan berkualitas"
          tahun="2017"
          tombol="Sewa"
        />
        <CardHasil
          img="https://picsum.photos/id/655/640/480"
          title="Mobil Pajero"
          biaya="Rp. 800.000/hari"
          deskripsi="Mobil Pajero merupakan mobil yang terbuat dari bahan berkualitas dan berkualitas"
          tahun="2019"
          tombol="Sewa"
        />
        <CardHasil
          img="https://picsum.photos/id/133/640/480"
          title="Mobil Agya"
          biaya="Rp. 1.000.000/hari"
          deskripsi="Mobil Agya merupakan mobil yang terbuat dari bahan berkualitas dan berkualitas"
          tahun="2018"
          tombol="Sewa"
        />
        <CardHasil
          img="https://picsum.photos/id/133/640/480"
          title="Mobil Agya"
          biaya="Rp. 1.000.000/hari"
          deskripsi="Mobil Agya merupakan mobil yang terbuat dari bahan berkualitas dan berkualitas"
          tahun="2018"
          tombol="Sewa"
        />
      </Row>
    </Container>
  );
};

export default Tampilan;
