import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

const { REACT_APP_API_OAUTH, REACT_APP_API_LOGIN } = process.env;

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    }
    if (password === "") {
      alert("Password is required");
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      const response = await fetch(REACT_APP_API_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.email);
        setToken(result.token);
        navigate("/");
        alert("Login Success");
      } else {
        alert("Something went wrong!");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };
      const response = await fetch(REACT_APP_API_OAUTH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.email);
        setToken(result.token);
        navigate("/");
        alert("Login Success");
      } else {
        alert("Something went wrong!");
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <>
    <Header />
    <div>
      <header className="App-header container section-mb">
        <Container
          className="card card-login mx-auto mt-5 pr-5 pl-5"
          style={{ paddingleft: "50px" }}
        >
          <Row className="card-header">
            <Col className="card-body">
              {!token ? (
                <>
                <Button variant="light" href="/">
                <img src="images/Home/img_back2.png" style={{width: "50px"}} href="/"></img>
                </Button>
                  <div className="d-grid">
                    <div className="m-auto">
                      <Button variant="primary" onClick={() => login()}>
                        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                      </Button>
                    </div>
                  </div>

                  <Form className="mt-5 form-group " onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ paddingleft: "50px" }}>
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label style={{ paddingleft: "50px" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button variant="primary" size="lg" type="submit">
                        Submit
                      </Button>
                    </div>
                    <div className="text-center">
                      <a className="d-block small mt-3" href="/register">
                        Register Your Account
                      </a>
                    </div>
                  </Form>
                </>
              ) : (
                <>
                <Button variant="light" href="/">
                <img src="images/Home/img_back2.png" style={{width: "50px"}} href="/"></img>
                </Button>
                <div className="d-grid gap-2">
                  <Button variant="danger" size="lg" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
    <Footer />
    </>
  );
};

export default Login;
