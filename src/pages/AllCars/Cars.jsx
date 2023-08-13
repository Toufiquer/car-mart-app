import { MdDelete } from "react-icons/md";
import { BiCopy } from "react-icons/bi";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import DeleteIcon from "./DeleteIcon";
export default function Cars({ data }) {
  const { name, quantity, _id } = data || {};
  const styleIcon = { height: "20px", width: "20px", cursor: "pointer" };
  return (
    <main>
      <div className="input input-bordered w-full">
        <div className="flex items-center h-full">
          <div className="w-full flex justify-between">
            <div className="px-2  flex justify-start gap-4 w-full">
              <img
                src="https://i.ibb.co/MVPJLm2/2024-lamborghini-revuelto-127-641a1d518802b.jpg"
                alt="HTML"
                style={{ height: "20px", width: "20px" }}
              />
              <strong className={` px-4`}>Name:</strong> {name}
              <strong>Quantity:</strong> {quantity}
            </div>
            <div className="px-2   flex justify-start gap-4 w-30 items-center">
              {/* Details */}
              <Link to={`/allCars/${_id}`}>
                <FcViewDetails style={styleIcon} />
              </Link>
              {/* Update Button */}
              <Link to={`/carUpdate/${_id}`}>
                <BiCopy style={styleIcon} />
              </Link>
              <DeleteIcon data={{ id: _id, styleIcon }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
