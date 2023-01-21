import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Improving end distrusts refers to methods of quickly reducing mistrust or skepticism towards something or someone.",
  },
  {
    title: "Become the tended active",
    text: "Becoming the tended active refers to using GPT-3 to actively improve and perform language understanding and generation tasks.",
  },
  {
    title: "The Future is Now",
    text: "Adopt new technologies or ways of thinking in order to stay ahead of the curve and be successful in the present and future",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
