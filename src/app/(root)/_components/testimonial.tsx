import React from "react";
import "./testimonial.scss";

type Testimonial = {
  review: string;
  name: string;
  flag: string; // URL of the country flag image
};

const testimonials: Testimonial[] = [
  {
    review:
      "Furqan built a highly scalable web solution for us. His ability to translate requirements into clean, efficient code is impressive.",
    name: "Emily, UK",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    review:
      "He delivered our project on time with excellent attention to detail. The UI/UX exceeded our expectations.",
    name: "Ahmed, UAE",
    flag: "https://flagcdn.com/w40/ae.png",
  },
  {
    review:
      "Furqan is very professional and proactive. His technical expertise in Next.js and backend systems is top-notch.",
    name: "Maria, Germany",
    flag: "https://flagcdn.com/w40/de.png",
  },
  {
    review:
      "Working with him was seamless. Great communication, clear milestones, and a strong grasp of modern development practices.",
    name: "John, USA",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    review:
      "He has the rare combination of technical skill and design sense. Highly recommended for any web or software project.",
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

   
    </div>
  );
};

export default TestimonialMarquee;
