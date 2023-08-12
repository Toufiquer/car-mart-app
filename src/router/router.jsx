import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import LogIn from "../pages/LogIn/LogIn";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import AddCar from "../pages/AddCar/AddCar";

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
  { path: "*", element: <NotFound /> },
]);
