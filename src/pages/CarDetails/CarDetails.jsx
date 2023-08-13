import { useParams } from "react-router-dom";
import { useGetCarQuery } from "../../redux/features/cars/carsApi";
import Loading from "../../components/Loading/Loading";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";

export default function CarDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetCarQuery(id);
  const { name, quantity, description } = data?.data || {};
  // decided what to render
  let content = <></>;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <DisplayCenter>{error?.message}</DisplayCenter>;
  }
  if (!isLoading && !isError && data?.data) {
    content = (
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
              <p>{description}</p>
              <p>
                <strong>Quantity: </strong>
                {quantity}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  return content;
}
