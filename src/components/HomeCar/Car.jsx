import { Link } from "react-router-dom";

export default function Car({ data }) {
  const { name, description, _id } = data || {};
  return (
    <Link to={`/allCars/${_id}`}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/MVPJLm2/2024-lamborghini-revuelto-127-641a1d518802b.jpg"
            alt="Cars"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
