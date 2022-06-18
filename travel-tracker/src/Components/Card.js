import React from "react";

export default function Card(props) {
  return (
    <div>
      <div></div>
      <div className="date">
        <div>
          {" "}
          <img src={props.imageUrl} width="100px" height="100px" />
        </div>
        <div>
          {" "}
          <div className="date">
            <h3>{props.location}</h3>
            <a href={props.googleMapsUrl}>View on Google Map </a>
          </div>
          <h1>{props.title}</h1>
          <div className="date">
            {" "}
            <h3>{props.startDate}-</h3>
            <h3>{props.endDate}</h3>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
