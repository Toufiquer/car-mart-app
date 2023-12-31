import { Link } from "react-router-dom";
import { auth } from "../../firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const liItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addCar">Add Car</Link>
      </li>
      <li>
        <Link to="/allCars">All Cars</Link>
      </li>
    </>
  );
  return (
    <nav className={` container mx-auto`}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {liItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Car Mart</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{liItems}</ul>
        </div>
        <div className="navbar-end">
          {!user?.uid ? (
            <Link to="/logIn" className="btn">
              Log In
            </Link>
          ) : (
            <button onClick={() => signOut()} className="btn">
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
