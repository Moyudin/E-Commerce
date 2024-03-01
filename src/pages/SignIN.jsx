import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SignIN = () => {
  return (
    <>
      <section>
        <Container fluid>
          <Row>
            <Col md={{ span: 5, offset: 4 }}>
              <h1 className="mt-4">SignIN</h1>
              <Form>
                <div className="mt-3">
                  <FormLabel className="mt-3">Email Address</FormLabel>
                  <br />
                  <input
                    className="input-s mt-lg-1 img-fluid"
                    placeholder="Enter Your Email"
                    type={"email"}
                  ></input>
                  <br />
                  <FormLabel className="mt-3">Password</FormLabel>
                  <br />
                  <input
                    className="input-s img-fluid"
                    placeholder="Enter Your Password"
                    type={"password"}
                  ></input>
                </div>
                <Button
                  variant="primary"
                  className="rounded-pill mt-4"
                  type="submit"
                >
                  Login
                </Button>
                <div className="mt-lg-3 mt-2">
                  <p>
                    New Customer?&nbsp;
                    <Link to="/SignUp" className="text-decoration-none">
                      Signup
                    </Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignIN;
