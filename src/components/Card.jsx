import React from "react";
import "./Card.css";

const Card = ({ title, date, phase }) => {
  return (
    <>
      <div className="card_parent">
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Avengers-Age-Of-Ultron.jpg?q=50&fit=crop&w=740&h=1095&dpr=1.5"
          alt="card cover"
          className="card_img"
        />
        <p className="card_title">{title}</p>
        <p className="card_date_wrap">
          Release Date:{" "}
          <span className="card_date"> {date ? date : "No data found"}</span>
        </p>
        <p className="card_phase_wrap">
          Phase:
          <span className="card_phase"> {phase ? phase : "No data found"}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
