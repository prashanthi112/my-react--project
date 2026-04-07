import { useParams, Link } from "react-router-dom";

const trips = [
  { 
    id: 1, 
    title: "Summer in Sweden", 
    location: "Stockholm", 
    description: "Enjoy lakes, nature, and long summer days.",
    images: [
      "/images/stockholnature.jpg",
      "/images/stockholmlake.jpg"
    ]
  },
  { 
    id: 2, 
    title: "Romantic Paris Getaway", 
    location: "Paris", 
    description: "Experience love, food, and culture.",
    images: [
      "/images/paris nature.jpg",
      "/images/parislake.jpg"
    ]
  },
  { 
    id: 3, 
    title: "Tokyo Adventure", 
    location: "Tokyo", 
    description: "Explore modern tech and traditional temples.",
    images: [
      "/images/tokyolake.jpg",
      "/images/tokyonature.jpg"
    ]
  }
];

export default function TripDetails() {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  if (!trip) {
    return <h2>Trip not found</h2>;
  }

  return (
    <div>
      <h1>{trip.title}</h1>

      {/* Two small images */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {trip.images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={trip.title}
            style={{
              width: "150px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        ))}
      </div>

      <p><strong>Location:</strong> {trip.location}</p>
      <p>{trip.description}</p>

      <br />
      <Link to="/trips">← Back to Trips</Link>
    </div>
  );
}
