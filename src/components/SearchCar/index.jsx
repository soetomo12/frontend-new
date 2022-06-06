import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Car from "../Tampilan/cardHasil";
import { getAllCars } from "../../redux/actions/carsActions";

const SearchCar = (props) => {
  const dispatch = useDispatch();
  const { cars, error } = useSelector((state) => state.cars);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [driver, setDriver] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [penumpang, setPenumpang] = useState("");
  const dateTime = tanggal + " " + jam;

  function getDateTimeNow() {
    var today = new Date();
    var date = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    var time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
    var dateNow = date + " " + time + "";
    return dateNow;
  }

  const filterCar = async () => {
    const tesDriver = true;
    if (driver === undefined || driver === "") {
      return alert("Please select a driver");
    } else if (dateTime < getDateTimeNow()) {
      return alert("Please select a date and time greater than now");
    } else if (penumpang === undefined || penumpang === "") {
      return dispatch(getAllCars({ driver, tanggal, jam, penumpang: 1 }));
    } else {
      return dispatch(getAllCars({ driver, tanggal, jam, penumpang }));
    }
  };

  return (
    <Container className="section-mb" style={{ marginTop: "-170px" }}>
      <Row>
        <Col sm={10} className="layoutfixed mx-auto shadow round" style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
          <Row className="my-4 ms-3">
            <Col sm={10}>
              <Row>
                <Col sm={3}>
                  Tipe Driver
                  <Form.Select aria-label="Floating label select example" value={driver} onChange={(e) => setDriver(e.target.value)} required>
                    <option value="1">Pilih Tipe Driver</option>
                    <option value="2">Dengan Driver</option>
                    <option value="3">Tanpa Driver</option>
                  </Form.Select>
                </Col>
                <Col sm={3}>
                  Tanggal
                  <input type="date" id="date" className="form-control" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
                </Col>
                <Col sm={3}>
                  Waktu Jemput/Ambil
                  <Form.Select aria-label="Floating label select example" value={jam} onChange={(e) => setJam(e.target.value)} required>
                    <option value="">Pilih Waktu</option>
                    <option value="1">09.00</option>
                    <option value="2">10.00</option>
                    <option value="3">11.00</option>
                    <option value="4">12.00</option>
                    <option value="5">13.00</option>
                    <option value="6">14.00</option>
                    <option value="7">15.00</option>
                    <option value="8">16.00</option>
                    <option value="9">17.00</option>
                    <option value="10">18.00</option>
                  </Form.Select>
                </Col>
                <Col sm={3}>
                  Jumlah Penumpang
                  <Form.Control type="number" placeholder="Jumlah Penumpang" value={penumpang} onChange={(e) => setPenumpang(e.target.value)} />
                </Col>
              </Row>
            </Col>
            <Col sm={2} className="mt-2">
              <Button onClick={() => filterCar()} className="text-white mt-3" style={{ backgroundColor: "#5cb85f", border: "none" }}>
                Cari Mobil
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container>
        <Row>
          {cars.length === 0 || driver!== "2" ? (
            <></>
          ) : (
            cars.data.map((car) => (
              <Col key={cars.id} sm={6} md={4} className="my-2">
                <Car car={car} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default SearchCar;
