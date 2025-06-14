import "../styles/Card2.css";

const Card2 = ({img, imgAlt, title, text}) => {
  return (
    <div className='card_2'>
      <div>
        <img src={img} alt={imgAlt} />
      </div>
      <div className="card_2-details">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card2