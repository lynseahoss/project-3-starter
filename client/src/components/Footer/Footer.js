import React from "react";
import "./Footer.css";
import {Share} from 'react-twitter-widgets'
const Footer = () => {
  return (
    <section className="hero-foot has-text-centered">
      
      <Share url="https://andrewsuzuki.com" options={{ size: "large" }} />
      
            <strong>Let's Guess</strong> <br />
            Copyright 2020
       
     
      
    </section>
  );
};

export default Footer;
