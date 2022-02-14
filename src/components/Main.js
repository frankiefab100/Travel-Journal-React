import React from "react";
import Location from "../img/location-point.png";
import "../index.css";
const Main = (props) => {
  return (
    <div className="container">
      <section className="left">
        <img src={`./img/${props.image}`} alt="" />
      </section>
      <section className="right">
        <div className="location">
          <img src={Location} alt="" />
          <p className="location-name">{props.location}</p>
          <a href="https://maps.google.com">View on Google Maps</a>
        </div>
        <h1 className="title">{props.title}</h1>
        <h4 className="date">{props.date}</h4>
        <p className="description">{props.details}</p>
      </section>
    </div>
  );
};

export default Main;
