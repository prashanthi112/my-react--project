import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import { destinations } from "../../data/destinations";

export default function Destinations() {
  return (
    <>
      <HeroSection
        title="Popular Destinations"
        subtitle="Choose a place you’d love to explore."
        background="https://source.unsplash.com/1600x900/?travel,landscape"
      />

      <div className="page-content">
        <div className="card-grid">
          {destinations.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
