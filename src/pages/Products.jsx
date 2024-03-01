import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { CiStar } from "react-icons/ci"; 

const Products = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error in getting id relate product ", error);
      }
    };

    fetchData();
  }, [id]);

 

  return (
    <>
      <section className="mt-lg-4 mt-2">
        <Container>
          <Link to="/">
            <Button className="bg-info border-info">Go Back</Button>
          </Link>
          <Row className="mt-4">
            <Col lg={5} className="text-center">
              <Image src={data.image} className="img-fluid h-75" />
            </Col>
            <Col lg={3}>
              <h4>{data.title}</h4>
              <hr />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <hr />
              <p>Price : {data.price}</p>
              <hr />
              <p>Description : {data.description}</p>
            </Col>
            <Col lg={{ span: 2, offset: 1 }}>
              <Card>
                <Row className="mt-3 mx-3">
                  <Col lg={5}>Price :</Col>
                  <Col>₹ {data.price}</Col>
                </Row>
                <hr />
                <Row className="mx-3">
                  <Col lg={{ span: 6 }}>Status :</Col>
                  <Col>In Stock</Col>
                </Row>
                <hr />
                <Row className="mx-3">
                  <Col lg={{ span: 5, offset: 1 }}>Qty :</Col>
                  <Col>
                    <select className="form-control w-75 img-fluid">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </Col>
                </Row>
                <hr />
                <Row className="mx-3">
                  <Col className="mb-3 text-center">
                    <Button className="bg-primary">Add To Cart</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
