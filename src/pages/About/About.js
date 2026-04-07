import HeroSection from "../../components/HeroSection/HeroSection";

export default function About() {
  return (
    <>
      <HeroSection
        title="About This App"
        subtitle="A simple and beautiful way to plan your travels."
        background="https://source.unsplash.com/1600x900/?minimal,scandinavian"
      />

      <div className="page-content">
        <h2>About This Travel Planner</h2>

        <p>
          This Travel Planner app is designed to make exploring the world simple,
          inspiring, and enjoyable. Whether you're dreaming of a weekend getaway
          or planning a long adventure, the app helps you discover destinations,
          organize trips, and view detailed travel information in one place.
        </p>

        <p>
          You can browse popular destinations, check trip details, and build your
          own travel ideas with a clean and easy‑to‑use interface. The goal is to
          give you a smooth experience while exploring new places and planning
          unforgettable journeys.
        </p>

        <p>
          This project is built using React, React Router, and a modular
          component‑based structure — perfect for learning, practicing, and
          expanding your web development skills.
        </p>
      </div>
    </>
  );
}
