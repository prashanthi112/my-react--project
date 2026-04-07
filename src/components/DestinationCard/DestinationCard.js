
const DestinationCard = ({ image, title, description }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
