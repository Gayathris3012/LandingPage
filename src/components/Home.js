import React from "react";
import { Carousel, Image, Form, Button } from "react-bootstrap";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <section id="home">
      <Carousel fade className="container-fluid container mt-4">
        <Carousel.Item>
          <Image src={img1} alt="First slide" className="img-fluid" />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <DeliveryForm />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={img2} alt="Second slide" className="img-fluid" />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <DeliveryForm />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={img3} alt="Third slide" className="img-fluid" />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <DeliveryForm />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

const DeliveryForm = () => {
  return (
    <Form className="mt-5">
      <Form.Group controlId="formAddress">
        <Form.Label>Delivery Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{
          background: "linear-gradient(to right, #ff6b6b, #ffb8b8)",
          border: "none",
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Home;
