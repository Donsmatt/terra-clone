import "../styles/Card3.css"

const Card3 = ({img, imgAlt, title, desc}) => {
  return (
      <div className="card__3">
        <div className="card__3-img">
          <img src={img} alt={imgAlt} />
        </div>
        <div className="card__3-details">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
  )
}

export default Card3