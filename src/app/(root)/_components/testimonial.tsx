import React from "react";
import "./testimonial.scss";

type Testimonial = {
  review: string;
  name: string;
  flag: string; // URL of the country flag image
};

const testimonials: Testimonial[] = [
  {
    review: "This platform transformed the way I learn. Absolutely love it!",
    name: "Emily, UK",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    review: "Exceptional experience and outstanding course quality.",
    name: "Ahmed, UAE",
    flag: "https://flagcdn.com/w40/ae.png",
  },
  {
    review: "Very professional and user-friendly interface.",
    name: "Maria, Germany",
    flag: "https://flagcdn.com/w40/de.png",
  },
  {
    review: "Highly recommended for personal growth and development!",
    name: "John, USA",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    review: "The best online learning experience I've ever had.",
    name: "Fatima, Pakistan",
    flag: "https://flagcdn.com/w40/pk.png",
  },
];

const TestimonialMarquee = () => {
  return (
    <div className="testimonial-section">
      {/* Top Marquee */}
      <div className="marquee">
        <div className="testimonial-marquee">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div className="testimonial-card" key={`top-${idx}`}>
                <p>{item.review}</p>
                <div className="author">
                  <img src={item.flag} alt="flag" className="flag" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee (reverse direction) */}
      <div className="marquee-reverse">
        <div className="testimonial-marquee">
          <div className="marquee-track reverse">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div className="testimonial-card" key={`bottom-${idx}`}>
                <p>{item.review}</p>
                <div className="author">
                  <img src={item.flag} alt="flag" className="flag" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
