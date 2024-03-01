import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SignUp = () => {
  return (
    <>
      <section>
        <Container fluid>
          <Row>
            <Col md={{ span: 5, offset: 4 }}>
              <h1 className="mt-4">SignUP</h1>
              <Form>
                <div className="mt-3">
                  <FormLabel className="mt-3">Name</FormLabel>
                  <br />
                  <input
                    className="input-s mt-lg-1 img-fluid"
                    placeholder="Enter Your Name"
                    type={"name"}
                  ></input>
                  <br />
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
                  <br />
                  <FormLabel className="mt-3">Confirm Password</FormLabel>
                  <br />
                  <input
                    className="input-s img-fluid"
                    placeholder="Confirm Your Password"
                    type={"password"}
                  ></input>
                </div>
                <Button
                  variant="primary"
                  className="rounded-pill mt-4"
                  type="submit"
                >
                  Signup
                </Button>
                <div className="mt-lg-3 mt-2">
                  <p>
                    Existing Customer?&nbsp;
                    <Link to="/SignIn" className="text-decoration-none">
                      Login
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

export default SignUp;
