import { MdDelete } from "react-icons/md";
import swal from "sweetalert";
import { useDeleteCarMutation } from "../../redux/features/cars/carsApi";

// eslint-disable-next-line react/prop-types
export default function DeleteIcon({ data: { id, styleIcon } }) {
  const [deleteCar, { data, isLoading, isError, error }] =
    useDeleteCarMutation();
  if (!isLoading && !isError && data?.data?.deletedCount) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  }
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteCar(id);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return <MdDelete onClick={() => handleDelete(id)} style={styleIcon} />;
}
