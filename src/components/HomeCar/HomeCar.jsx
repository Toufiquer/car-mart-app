import { useGetCarsQuery } from "../../redux/features/cars/carsApi";
import DisplayCenter from "../DisplayCenter/DisplayCenter";
import Loading from "../Loading/Loading";
import Car from "./Car";

export default function HomeCar() {
  const { data, isLoading, isError, error } = useGetCarsQuery();
  //   decided what to render
  let content = <></>;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <DisplayCenter>{error?.message}</DisplayCenter>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = (
      <main className={` container mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <DisplayCenter>Ops! Nothing Was Found.</DisplayCenter>
        </div>
      </main>
    );
  }
  if (!isLoading && !isError && data?.data) {
    content = (
      <main className={` container mx-auto my-4`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {data?.data?.map((curr) => (
            <Car key={curr._id} data={curr} />
          ))}
        </div>
      </main>
    );
  }
  return content;
}
