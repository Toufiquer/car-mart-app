import { useParams } from "react-router-dom";
import { useGetCarQuery } from "../../redux/features/cars/carsApi";

export default function CarDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetCarQuery(id);
  const { name, quantity } = data?.data || {};
  console.log(data, id, " => Line No: 8");
  return (
    <div className="flex justify-center w-full">
      {" "}
      <main>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/MVPJLm2/2024-lamborghini-revuelto-127-641a1d518802b.jpg"
              alt="HTML"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{"describe cars"}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
