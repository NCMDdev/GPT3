import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing model developed by OpenAI. It is capable of understanding and generating human-like text, and can be used for a wide range of natural language processing tasks, such as language translation, text summarization, and question answering."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="A chatbot is a computer program that simulates a conversation with human users, using AI, to perform tasks such as answering questions or helping with transactions."
      />
      <Feature
        title="Knowledgebase"
        text="A knowledge base is a collection of organized information accessible to answer common questions and provide information, it is integrated with chatbot for efficient results."
      />
      <Feature
        title="Education"
        text="Education is the process of acquiring knowledge, skills, values, beliefs, and habits through various means such as teaching, training, research, or self-study. It helps to develop individuals both intellectually and socially."
      />
    </div>
  </div>
);

export default WhatGPT3;
