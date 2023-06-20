import React from "react";
import MultipleCakes from "../assets/coffee-cake.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleCakes})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Buy and send cakes to India on any occasion among various varieties of fruit cakes, Eggless cakes, chocolate cakes and many more.Send Delicious Cakes Baked with Love to Your Beloved Online with Foodie's Bakery. Order Now. Freshly Baked & Delivered to Their Door For Any Occasion. Delivery Available...Cakes have been one of the favorite desserts that add joy to every occasion and make it memorable. You can send cakes for the people you love and make their ordinary days extraordinary with this web app. We have wide range of cakes that are available for online cake delivery in India. We deliver finest cakes worldwide at affordable rates.
        </p>
      </div>
    </div>
  );
}

export default About;