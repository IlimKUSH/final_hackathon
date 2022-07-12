import React from "react";
import Header from "../Header/Header";

import "./main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <main className="hero">
        <div className="container">
          <div className="hero__cards">
            <div className="hero__card">
              <h6>гитары</h6>
            </div>
            <div className="hero__card hero__card-2">
              <h6>укулеле</h6>
            </div>
            <div className="hero__card hero__card-3">
              <h6>аксессуары</h6>
            </div>
            <div className="hero__card hero__card-4">
              <h6>струны</h6>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
