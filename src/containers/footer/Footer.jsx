import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="https://openai.com/" target="_blank">
        <p>Request Early Access</p>
      </a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://openai.com/about/" target="_blank">
          <p>About us</p>
        </a>
        <a href="https://www.youtube.com/openai" target="_blank">
          <p>Social Media</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>

        <a
          href="https://openai.com/api/policies/service-terms/"
          target="_blank"
        >
          <p>Terms & Policy </p>
        </a>
        <a href="https://openai.com/" target="_blank">
          <p>Contact</p>
        </a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>
        @2023
        <a href="https://www.ncmd.dev" target="_blank">
          GPT-3_NCMD.dev
        </a>
        | All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
