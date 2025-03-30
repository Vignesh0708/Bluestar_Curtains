import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image0 from "../Customers/Ellipse 1.png";
import "./Customers.css"; // Import CSS for background and styling

// Testimonial Data with Images
const testimonials = [
  {
    name: "Lana Bernier",
    role: "Senior Paradigm Strategist",
    text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    image: image0,
  },
  {
    name: "Mrs. Van Hartmann",
    role: "Legacy Usability Manager",
    text: "I like Infinity Estate more and more each day because it makes my life a lot easier. Infinity Estate has got everything I need. The service was excellent.",
    image: image0,
  },
  {
    name: "Philip Deckow",
    role: "District Assurance Officer",
    text: "You’ve saved our business! Infinity Estate has got everything I need. We were treated like royalty. It’s really wonderful.",
    image: image0,
  },
  {
    name: "John Doe",
    role: "Product Designer",
    text: "Amazing experience! The quality and service exceeded my expectations. Highly recommend this to everyone!",
    image: image0,
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    text: "Great product and excellent customer service. Will definitely purchase again in the future!",
    image: image0,
  },
  {
    name: "Robert Brown",
    role: "Software Engineer",
    text: "This was a life-changing experience. The service was absolutely phenomenal, and I couldn't be happier.",
    image: image0,
  },
];

// Split testimonials into groups of 3 for the carousel slides
const groupedTestimonials = [];
for (let i = 0; i < testimonials.length; i += 3) {
  groupedTestimonials.push(testimonials.slice(i, i + 3));
}

const CustomerWords = () => {
  return (
    <div className="customer-section">
      <Container>
        <h2 className="customer-title text-center">Our Customer Words!</h2>

        {/* Auto-Swiping Carousel with 3 cards per slide */}
        <Carousel controls={true} indicators={false} interval={3000} pause={false}>
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((testimonial, idx) => (
                  <Col key={idx} md={4} sm={12} className="mb-4">
                    <Card className="testimonial-card text-center p-4">
                      <div className="stars">★★★★★</div>
                      <Card.Text className="testimonial-text">{testimonial.text}</Card.Text>
                      <div className="user-info">
                        <img src={testimonial.image} alt={testimonial.name} className="user-img" />
                        <div>
                          <h5 className="testimonial-name">{testimonial.name}</h5>
                          <span className="testimonial-role">{testimonial.role}</span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default CustomerWords;
