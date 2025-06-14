import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";


const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__header"> 
        <h2 className="testimonial__header-title">What others have <span className="accent">gained</span></h2>
        <p className="testimonial__header-text">Read all about how the Terra Learning internship has impacted other youths and helped them achieve their goals.</p>
      </div>
      <TestimonialCard />
      <h3 className="testimonial__subheader">We’ve got our footprint</h3>

      <div className="img__container">
        <div className="image-track">
          <img src="keytrust.24708d27.svg" alt="keytrust" />
          <img src="spurt.cf7df5f5.svg" alt="spurt" />
          <img src="trinipicks.4a3cff02.svg" alt="trinipicks" />
          <img src="reina.8230ab87.svg" alt="reina" />
          <img src="entry-level.5391141f.svg" alt="entry" />
        </div>
      </div>

      <ProductCard />

      <div className="testimonial__signup"> 
        <h2>Ready to join the Internship?</h2>
        <Button label="Sign up for FREE" />
      </div>
    </div>
  );
};

export default Testimonial;
