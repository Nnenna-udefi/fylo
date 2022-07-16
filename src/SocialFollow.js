import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com" className="social">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com/nnennaudefi" className="social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://instagram.com/Nnenna-udefi" className="social">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>

      
    </div>
  );
}