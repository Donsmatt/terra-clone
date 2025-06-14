import heroImg from '../assets/hero-image.png';
import partner1Img from '../assets/jobberman.svg';
import partner2Img from '../assets/raven.svg';
import partner3Img from '../assets/thire.svg';
import Button from '../components/Button';
import VideoModal from '../components/VideoModal';



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-main wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Gain in-demand skills for <span className="accent">free</span></h1>
          <p className="hero-description">Join the Terra Learning Internship to learn and get the hands-on experience needed. Our interns are ready to take on entry-level and junior positions in just 8 weeks.</p>
          <div className="hero-cta">
            <Button label="Sign up for FREE" />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
          <p><span className='dot'></span>Over 300 thousand young Africans have started their journey into tech with us</p>
        </div>
      </div>
      <div className="hero-footer wrapper">
        <VideoModal />
        <div className='partners'>
          <img src={partner1Img} alt="Jobberman" />
          <img src={partner2Img} alt="Raven Bank" />
          <img src={partner3Img} alt="Terra hire" />
        </div>
      </div>
    </section>
  )
}

export default Hero