import "./App.css";
import React, { Component, useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [pageSize, setPageSize] = useState(8);
  const [apiKey, setapiKey] = useState(process.env.apiKey);

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <News
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/business"
          element={
            <News
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/general"
          element={
            <News
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/health"
          element={
            <News
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/sports"
          element={
            <News
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              apiKey={this.apiKey}
            ></News>
          }
        ></Route>
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              apikey={this.apiKey}
            ></News>
          }
        ></Route>
      </Routes>
    </div>
  );
};
