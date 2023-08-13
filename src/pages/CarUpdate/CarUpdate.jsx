import { useForm } from "react-hook-form";
import { useUpdateCarMutation } from "../../redux/features/cars/carsApi";
import swal from "sweetalert";
export default function CarUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateCar, { data, isLoading, isError, error }] =
    useUpdateCarMutation();
  console.log({ data, isLoading, isError, error }, " => Line No: 11");
  if (data?.data?._id) {
    swal("Car Successfully Saved.");
  }
  if (!isLoading && !data?.data?._id && isError) {
    swal(error?.data?.message || "Ops! Error Happen");
  }

  const onSubmit = (data) => {
    const newCar = {
      name: data.name,
      description: "Product Description",
      price: 100,
      unit: "kg",
      quantity: 10,

      supplier: "5f1234567890",
      categories: [
        {
          name: "Category 1",
          _id: "5f1234567891",
        },
        {
          name: "Category 2",
          _id: "5f1234567892",
        },
      ],
    };
    updateCar(newCar);
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-control w-full max-w-xs">
                <input
                  className="input input-bordered w-full max-w-xs"
                  defaultValue="Car "
                  {...register("name")}
                />
              </div>

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                className="input btn mt-2 input-bordered w-full max-w-xs"
                type="submit"
                value="Update"
                disabled={isLoading}
              />
            </form>
            <p>
              {
                "automobile, by name auto, also called motorcar or car, a usually four-wheeled vehicle designed primarily for passenger transportation and commonly propelled (Read Henry Ford.s 1926 Britannica essay on mass production."
              }
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
