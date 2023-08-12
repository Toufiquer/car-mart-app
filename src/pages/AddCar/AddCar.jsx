import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useForm } from "react-hook-form";
export default function AddCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newCar = {
      name: data.name,
      description: "Product Description",
      price: 100,
      unit: "kg",
      quantity: 0,

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
    console.log(newCar, " => Line No: 29");
  };
  return (
    <main>
      <DisplayCenter>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
         */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is the name of Car?</span>
            </label>
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
          />
        </form>
      </DisplayCenter>
    </main>
  );
}
