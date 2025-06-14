import "../styles/Card2.css";
import Badge from "./Badge";

const Card2 = ({img, imgAlt, title, text, badge}) => {
  return (
    <div className='card__2'>
      <div className="card__2-badge">
        {badge && <Badge />}
      </div>
      <div>
        <img src={img} alt={imgAlt} />
      </div>
      <div className="card__2-details">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card2