import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { CiStar } from "react-icons/ci";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Products data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="mt-3">
        <Container>
          <Row>
            {data.map((item) => (
              <Col key={item.id} md={3} className="mb-4">
                <Link
                  to={`/Products/${item.id}`}
                  className="text-decoration-none"
                >
                  <Card
                    style={{ width: "18rem", height: "30rem" }}
                    className="img-fluid"
                  >
                    <Card.Img
                      variant="top"
                      className="img-fluid"
                      style={{ height: "15rem" }}
                      src={item.image}
                    />
                    <Card.Body>
                      <Card.Title className="fs-5">{item.title}</Card.Title>
                      <Card.Text>₹ {item.price}</Card.Text>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
