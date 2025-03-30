 
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Carousel.css";



 
const testimonials = [
  {
    id: 1,
    name: "Kanishka Shre",
    image: "images/user (2).png",
    rating: "★★★★★",
    feedback:
      "I had a personalized Ayurvedic treatment plan at Kaayakalpam Ayurveda, and it truly worked wonders for my body. The therapists are experienced and make you feel comfortable throughout the process. I feel much more energetic and balanced now!",
  },
  {
    id: 2,
    name: "Santhosh Khan",
    image: "images/user (2).png",
    rating: "★★★★★",
    feedback:
      "I had been suffering from chronic back pain, and after a few sessions at Kaayakalpam Ayurveda, I noticed significant improvement. The treatments are holistic, and the experience was therapeutic. The care they provide is exceptional.",
  },
  {
    id: 3,
    name: "Vignesh Kumar",
    image: "images/user (2).png",
    rating: "★★★★★",
    feedback:
      "Visiting Kaayakalpam Ayurveda was one of the best decisions I made for my health. The atmosphere is calm, the staff is friendly, and most importantly, the treatments are effective. My skin feels smoother, and I’m less stressed after my sessions.",
  },
  {
    id: 4,
    name: "Kanishka Shre",
    image: "images/user (2).png",
    rating: "★★★★★",
    feedback:
      "I had a personalized Ayurvedic treatment plan at Kaayakalpam Ayurveda, and it truly worked wonders for my body. The therapists are experienced and make you feel comfortable throughout the process. I feel much more energetic and balanced now!",
  },
  {
    id: 5,
    name: "Santhosh Khan",
    image: "images/user (2).png",
    rating: "★★★★★",
    feedback:
      "I had been suffering from chronic back pain, and after a few sessions at Kaayakalpam Ayurveda, I noticed significant improvement. The treatments are holistic, and the experience was therapeutic. The care they provide is exceptional.",
  },
  {
    id: 6,
    name: "Vignesh Kumar",
    image: "images/user (2).png",
    rating: "★★★★★",
    feedback:
      "Visiting Kaayakalpam Ayurveda was one of the best decisions I made for my health. The atmosphere is calm, the staff is friendly, and most importantly, the treatments are effective. My skin feels smoother, and I’m less stressed after my sessions.",
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="testimonial-section ">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Our Customer Words!</h2>
        <Carousel
          controls={true}
          indicators={false}
          interval={3000}
          prevIcon={<span className="custom-prev">&#8249;</span>}
          nextIcon={<span className="custom-next">&#8250;</span>}
        >
          {testimonials.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="testimonial-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="user-image"
                />
                <h5>{item.name}</h5>
                <p className="stars">{item.rating}</p>
                <p className="testimonial-text">{item.feedback}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialCarousel;
