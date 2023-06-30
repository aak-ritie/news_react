import React, { Component } from "react";
import Item from "./Item";
export class News extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top Headlines</h2>

        <div className="row">
          <div className="col-md-4">
            <Item title="myTitle" description="mydesc"></Item>
          </div>
          <div className="col-md-4">
            <Item title="myTitle" description="mydesc"></Item>
          </div>
          <div className="col-md-4">
            <Item title="myTitle" description="mydesc"></Item>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
