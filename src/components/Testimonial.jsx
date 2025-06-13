import React from "react";
import ProfileCard from "../ui/ProfileCard";
import Card from "../ui/Card";

const Testimonial = () => {
  return (
    <div>
        <div className="center-heading"> 
            <h2 className="mb-2">What others have <span className="green__text">gained</span></h2>
            <p >Read all about how the Terra Learning internship has impacted other youths and helped them achieve their goals.</p>
        </div>
      <div className="full__width">
        <ProfileCard
          text2={`"It's been a beautiful, exciting, unlearning and relearning three weeks, with one more to go. Side Hustle has had a significant impact on people's lives and has helped me progress in customer management over the last few weeks. There is so much that has been taught, from who a customer is, to how to absolutely delight and create a loyal customer group, and so much more."`}
          name__bold="Bright James"
          image2="bright_james-tera.webp"
          alt="bright-james"
        />
        <ProfileCard
          text2={`"The internship has been fantastic, with extensive explanations on every step required to maintain your customers for loyalty. You should consider yourself fortunate to be a part of this program. I strongly advise you not to pass up this fantastic chance. And to Side Hustle, I want to express my gratitude for providing me with this incredible opportunity to expand my knowledge."`}
          name__bold="Emerole Justice"
          image2="emerole_justice-tera.webp"
          alt="emerole justice"
        />
        <ProfileCard
          text2={`"I started the Side Hustle internship knowing very little about UI/UX and hoped to be much better by the end of the internship. Throughout the four weeks, the lessons, quizzes, and activities have kept me on my toes, broadening my knowledge of the subject. I'm a lot better today than I was when I first started. "`}
          name__bold="Babalola Favour"
          image2="favour_babalola-tera.webp"
          alt="favour"
          
        />
        <ProfileCard
          text2={`"It's been a beautiful, exciting, unlearning and relearning three weeks, with one more to go. Side Hustle has had a significant impact on people's lives and has helped me progress in customer management over the last few weeks. There is so much that has been taught, from who a customer is, to how to absolutely delight and create a loyal customer group, and so much more."`}
          name__bold="Bright James"
          image2="bright_james-tera.webp"
          alt="bright_james"
        />
      </div>

      <div className="footprint">
        <h2 >We’ve got our footprint</h2>
      </div>

      <div className="img__container">
        <div className="image-track">
          <img src="keytrust.24708d27.svg" alt="keytrust" />
          <img src="spurt.cf7df5f5.svg" alt="spurt" />
          <img src="trinipicks.4a3cff02.svg" alt="trinipicks" />
          <img src="reina.8230ab87.svg" alt="reina" />
          <img src="entry-level.5391141f.svg" alt="entry" />
        </div>
      </div>

      <div className="row">
        <div className="card__box">
          <Card
            image="tera1.svg"
            header="Internship"
            image-name="Internship"
            text="Learn soft & hard skills in 4 weeks"
          />
          <Card
            image="tera2.svg"
            header="Certification"
            image-name="certification"
            text="Get a certificate of completion from Terra Learning."
            type="Compulsory"
          />
          <Card
            image="tera3.svg"
            header="Bootcamp"
            image-name="bootcamp"
            text="Join a team of brilliant minds to build a startup, a strong portfolio and world class products."
            type="Optional"
          />
        </div>
      </div>
      
      <div className="sign__up"> 
        <h2>Ready to join the Internship?</h2>
        <button >Sign up for FREE</button>
      </div>
    </div>
  );
};

export default Testimonial;
