import React from "react";
import Article from "../../components/article/Article";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  reading01,
  reading02,
  reading03,
  reading04,
  reading05,
} from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Mar 15, 2022"
          text="New GPT-3 Capabilities: Edit & Insert"
          url={reading01}
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Mar 3, 2022"
          text="Lessons Learned on Language Model Safety and Misuse"
          url={reading02}
        />
        <Article
          imgUrl={blog03}
          date="Dec 16, 2021"
          text="WebGPT: Improving the Factual Accuracy of Language Models through Web Browsing"
          url={reading03}
        />
        <Article
          imgUrl={blog04}
          date="Oct 29, 2021"
          text="Solving Math Word Problems"
          url={reading04}
        />
        <Article
          imgUrl={blog05}
          date="Mar 25, 2021"
          text="GPT-3 Powers the Next Generation of Apps"
          url={reading05}
        />
      </div>
    </div>
  </div>
);

export default Blog;
