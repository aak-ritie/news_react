import React from "react";

const Item = (props) => {
  let { title, description, img_url, newsUrl, author, date, source } = props; //if props is an object then tyo object bta yo duita pull garera title ra description ko place ma provide garxa.This is called destructuring
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !img_url
              ? "https://images.hindustantimes.com/tech/img/2023/06/30/1600x900/World_Asteroid_Day_2023_1688098248538_1688098248723.jpg"
              : img_url
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="badge bg-secondary">{source}</span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown author"} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
