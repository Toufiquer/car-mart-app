import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import LogIn from "../pages/LogIn/LogIn";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import AddCar from "../pages/AddCar/AddCar";
import AllCars from "../pages/AllCars/AllCars";
import CarDetails from "../pages/CarDetails/CarDetails";
import CarUpdate from "../pages/CarUpdate/CarUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Home />
      </Main>
    ),
  },
  {
    path: "/logIn",
    element: (
      <Main>
        <LogIn />
      </Main>
    ),
  },
  {
    path: "/addCar",
    element: (
      <RequireAuth>
        <Main>
          <AddCar />
        </Main>
      </RequireAuth>
    ),
  },
  {
    path: "/allCars",
    element: (
      <RequireAuth>
        <Main>
          <AllCars />
        </Main>
      </RequireAuth>
    ),
  },
  {
    path: "/allCars/:id",
    element: (
      <RequireAuth>
        <Main>
          <CarDetails />
        </Main>
      </RequireAuth>
    ),
  },
  {
    path: "/carUpdate/:id",
    element: (
      <RequireAuth>
        <Main>
          <CarUpdate />
        </Main>
      </RequireAuth>
    ),
  },
  { path: "*", element: <NotFound /> },
]);
