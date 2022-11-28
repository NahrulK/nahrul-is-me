import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/nahrul-khayattullah/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/nahrul.k/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
