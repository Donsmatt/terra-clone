import "../styles/Card.css"

const Card = ({text, img, name}) => {
  return (
    <div>
      <div className="testimonial__card">
        <p>{text}</p>
        <div className="testimonial__card-profile">
          <div>
            <img src={img} alt={name} />
          </div>
          <div>
            <h4>{name}</h4>
            <p>Terra Learning 3.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card