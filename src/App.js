import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Routes, Route, Router } from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              ></News>
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              ></News>
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              ></News>
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              ></News>
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              ></News>
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              ></News>
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              ></News>
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              ></News>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
