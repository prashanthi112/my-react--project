
import HeroSection from "../../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Welcome to Travel Planner"
        subtitle="Discover beautiful destinations and plan your next adventure."
        background="https://source.unsplash.com/1600x900/?scandinavia,nature,travel"
      />

      <div className="home-container">
        <p className="home-text">
          Explore destinations, view trips, and enjoy a clean Scandinavian-inspired experience.
        </p>

        <a className="button" href="/destinations">
          Explore Destinations
        </a>
      </div>
    </>
  );
}
