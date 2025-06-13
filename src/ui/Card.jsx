import React from "react";

const Card = ( { image, header, img__name, text, type } ) => {
  return (
    <div>
      <div className="card">
        <div className="card__image-box">
          <img src={image} alt={img__name} />
          {type && <button className="type">{type}</button>}
        </div>

        <div className="card__details">
          <h5 className="mb-2">{header}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
