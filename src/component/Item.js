import React, { Component } from "react";

export class Item extends Component {
  render() {
    let { title, description, img_url } = this.props; //if props is an object then tyo object bta yo duita pull garera title ra description ko place ma provide garxa.This is called destructuring
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
