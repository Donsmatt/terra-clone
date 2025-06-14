import Card2 from './Card2'
import internshipCardImg from '../assets/product-internship.svg'
import certificationCardImg from '../assets/product-certification.svg'
import bootcampCardImg from '../assets/product-bootcamp.svg'
import '../styles/ProductCard.css'


const ProductData = [
  {
    img: internshipCardImg,
    imgAlt: "Internship Program Logo",
    title: "Internship",
    text: "Learn soft & hard skills in 4 weeks"
  },
  {
    img: certificationCardImg,
    imgAlt: "Certification Logo",
    title: "Certification",
    text: "Get a certificate of completion from Terra Learning."
  },
  {
    img: bootcampCardImg,
    imgAlt: "Bootcamp Program Logo",
    title: "Bootcamp",
    text: "Join a team of brillant minds to build a startup, a strong portfolio and worls class products."
  }
]

const ProductCard = () => {
  return (
    <div className="product-container">
        {ProductData.map((product, index) => (
          <Card2
            key={index}
            img={product.img}
            imgAlt={product.imgAlt}
            title={product.title}
            text={product.text}
          />
        ))}
    </div>
  )
}

export default ProductCard