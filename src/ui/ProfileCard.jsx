import React from "react";

const ProfileCard = ({ text2, name__bold, image2, profile__name }) => {
  return (
    <div>
      <div className="big__card">
        <p className="mb-2 big__text">{text2}</p>
        <div className="flex">
          <img src={image2} alt={profile__name} />
          <div>
            <span>{name__bold}</span>
            <span>Terra Learning 3.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
