import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";

// BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button className="button-sign-in" type="button">
          <a
            href="https://auth0.openai.com/u/login/identifier?state=hKFo2SBpQ2NXQ19zNk9icDBZNkJ6VkczZ0RUUE5aS0gxU1pKOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEVqejBpaWtjZVU3dDQyeThtVTBLMkN3WXdPcVFOUlVqo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"
            target="_blank"
          >
            Sign in
          </a>
        </button>

        <button className="button-sign-up" type="button">
          <a
            href="https://auth0.openai.com/u/signup/identifier?state=hKFo2SBpQ2NXQ19zNk9icDBZNkJ6VkczZ0RUUE5aS0gxU1pKOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEVqejBpaWtjZVU3dDQyeThtVTBLMkN3WXdPcVFOUlVqo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"
            target="_blank"
          >
            Sign up
          </a>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button className="button-sign-in" type="button">
                <a
                  href="https://auth0.openai.com/u/login/identifier?state=hKFo2SBpQ2NXQ19zNk9icDBZNkJ6VkczZ0RUUE5aS0gxU1pKOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEVqejBpaWtjZVU3dDQyeThtVTBLMkN3WXdPcVFOUlVqo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"
                  target="_blank"
                >
                  Sign in
                </a>
              </button>
              <button className="button-sign-up" type="button">
                <a
                  href="https://auth0.openai.com/u/signup/identifier?state=hKFo2SBpQ2NXQ19zNk9icDBZNkJ6VkczZ0RUUE5aS0gxU1pKOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEVqejBpaWtjZVU3dDQyeThtVTBLMkN3WXdPcVFOUlVqo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"
                  target="_blank"
                >
                  Sign up
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
