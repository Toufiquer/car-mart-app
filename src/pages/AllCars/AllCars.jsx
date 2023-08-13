import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import Loading from "../../components/Loading/Loading";
import { useGetCarsQuery } from "../../redux/features/cars/carsApi";
import Cars from "./Cars";

export default function AllCars() {
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
      <div className="container mx-auto">
        <div className="flex flex-col gap-2">
          {data?.data?.map((curr) => (
            <Cars key={curr._id} data={curr} />
          ))}
        </div>
      </div>
    );
  }
  return content;
}
