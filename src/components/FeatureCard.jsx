import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg";
import feature3 from "../assets/feature3.svg";
import feature4 from "../assets/feature4.svg";
import "../styles/FeatureCard.css";
import Card3 from "./Card3";

const FeatureData = [
  {
    img: feature1,
    imgAlt: "Feature 1",
    title: "Earn a certificate",
    desc: "All Terra Learning finalists will be awarded a paid certificate of completion at the end of the internship.",
  },
  {
    img: feature2,
    imgAlt: "Feature 2",
    title: "Get hands-on experience",
    desc: "During the Terra Learning internship, you will be assigned projects and team assignments that will give you the needed experience, and help you build your portfolio, teamwork, and communication skills.",
  },
  {
    img: feature3,
    imgAlt: "Feature 3",
    title: "Learn from the very best",
    desc: "Learning is a wonderful experience, and learning from the best makes everything ten times easier. The Terra Learning mentors and lead instructors are all here to make your internship experience unforgettable.",
  },
  {
    img: feature4,
    imgAlt: "Feature 4",
    title: "Be a part of a fast-growing startup",
    desc: "During the bootcamp, all Terra Learning finalists will have the opportunity to build a fast-paced start-up.",
  },
]

const FeatureCard = () => {
  return (
    <div className="feature-container">
      {FeatureData.map((feature, index) => (
        <Card3
          key={index}
          img={feature.img}
          imgAlt={feature.imgAlt}
          title={feature.title}
          desc={feature.desc}
        />
      ))}
    </div>
  )
}

export default FeatureCard