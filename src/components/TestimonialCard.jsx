import "../styles/TestimonialCard.css";
import brightImg from "../assets/bright_james.webp";
import emeroleImg from "../assets/emerole_justice.webp";
import babalolaImg from "../assets/favour_babalola.webp";
import jamesImg from "../assets/james_adewuyi.webp";
import mbodeImg from "../assets/mbode_pamela.png";
import Card from "./Card";

const cardData = [
  {
    text: `"It's been a beautiful, exciting, unlearning and relearning three weeks, with one more to go. Side Hustle has had a significant impact on people's lives and has helped me progress in customer management over the last few weeks. There is so much that has been taught, from who a customer is,to how to absolutely delight and create a loyal customer group, and so much more."`,
    img: brightImg,
    name: "Bright James"
  },
  {
    text: `"The internship has been fantastic, with extensive explanations on every step required to maintain your customers for loyalty. You should consider yourself fortunate to be a part of this program. I strongly advise you not to pass up this fantastic chance. And to Side Hustle, I want to express my gratitude for providing me with this incredible opportunity to expand my knowledge."`,
    img: emeroleImg,
    name: "Emerole Justice"
  },
  {
    text: `"I started the Side Hustle internship knowing very little about UI/UX and hoped to be much better by the end of the internship. Throughout the four weeks, the lessons, quizzes, and activities have kept me on my toes, broadening my knowledge of the subject. I'm a lot better today than I was when I first started."`,
    img: babalolaImg,
    name: "Babalola Favour"
  },
  {
    text: `"Side Hustle was a fantastic opportunity to enroll in an internship for me. Our Mentors and organizers were incredible and hardworking. Thanks to this internship. I am on the verge of having a real-life project in my portfolio. I've also learned the fundamentals of WordPress, from creating an outstanding blog to an E-commerce web store with the Elementor page builder. Thank you for this wonderful opportunity, Side Hustle."`,
    img: jamesImg,
    name: "James Adewuyi"
  },
  {
    text: `"I've learnt a lot about customers and how to manage and understand them better. We were taught the importance of customer service policy as a way of prioritizing how customers can get the best of service. I will like to say a very big thank you to Side Hustle Internship for giving me this huge opportunity to learn and obtain great value. Kudos to our mentors for their efforts in making the class a memorable one."`,
    img: mbodeImg,
    name: "Mbode Pamela Ukamaka"
  }
];

const TestimonialCard = () => {
  return (
    <div className="testimonial-container slider-wrapper">
      <div className="testimonial-slider">
        {cardData.map((card, index) => (
          <Card key={index} text={card.text} img={card.img} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard