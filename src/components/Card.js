import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.item.imageUrl}`} className="card-img" />

      <div className="card-info">
        <div className="location-info">
          <span className="country">
            <img src="/images/icon-location.svg" className="icon" />{" "}
            {props.item.location}
          </span>

          <span className="map-links">
            <a href={props.item.googleMapsUrl} className="map-link">
              View on Google Maps
            </a>
          </span>
        </div>

        <h2 className="location">{props.item.title}</h2>

        <span className="date">
          {props.item.startDate} - {props.item.endDate}
        </span>

        <p>{props.item.description}</p>

        <a
          href={props.item.learnMore}
          target="_blank"
          className="learn-more-link"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
