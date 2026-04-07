
export default function HeroSection({ title, subtitle, background }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
