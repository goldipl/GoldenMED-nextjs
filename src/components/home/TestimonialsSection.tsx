import React from "react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="testimonials-section">
      <div className="testimonials-section-wrapper">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Opinie</span>
          <h2>
            Co mówią <span>nasi pacjenci</span>
          </h2>
        </div>
        <div className="cards-grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="testimonial-card">
              <blockquote>{testimonial.text}</blockquote>
              <figcaption>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.service}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
