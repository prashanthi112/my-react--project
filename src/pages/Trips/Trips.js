
import { Link } from "react-router-dom";

const trips = [
  { id: 1, title: "Summer in Sweden", location: "Stockholm" },
  { id: 2, title: "Romantic Paris Getaway", location: "Paris" },
  { id: 3, title: "Tokyo Adventure", location: "Tokyo" }
];

export default function Trips() {
  return (
    <div>
      <h1>Your Trips</h1>
      <p>View your planned adventures and explore more.</p>

      {trips.map((trip) => (
        <div key={trip.id} style={{ marginBottom: "20px" }}>
          <h3>{trip.title}</h3>
          <p>{trip.location}</p>

          <Link to={`/trips/${trip.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}