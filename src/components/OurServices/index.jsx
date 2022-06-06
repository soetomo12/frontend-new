import { Col, Container, Row } from "react-bootstrap";
import { serviceList } from "./serviceList";

const OurServices = () => {
    return (
      <Container className="section-mb" id="OurServices">
        <Row>
          <Col className="mx-auto" md={9} lg={5}>
            <img src="/images/Home/img_service.png" className="img-fluid" />
          </Col>
          <Col className="mx-auto mt-5" lg={5}>
            <h4 className="fw-bold lh-base">Best Car Rental for any kind of trip in Malang!</h4>
            <p className="mt-4">Sewa mobil di Malang bersama Binar Car Rental jaminan harga lebih murah 
            dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan 
            wisata, bisnis, wedding, meeting, dll.</p>
            <table>
              <tbody>
                {serviceList.map((service, id) => {
                  return (
                    <tr key={id} >
                      <td>
                        <img src="/images/Home/img_check.png" alt="tick" className="mt-1 me-3" />
                      </td>
                      <td>{service}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default OurServices;