import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        From virtual reality to machine learning, there are countless ways that
        technology can be used to improve our lives and solve problems. With the
        right tools and resources, we can build something truly amazing. Let's
        explore the possibilities together, and see what we can create.
      </p>
    </div>
  </div>
);

export default Possibility;
