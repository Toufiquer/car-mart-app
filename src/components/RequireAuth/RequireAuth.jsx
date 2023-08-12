/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";

const RequireAuth = ({ children }) => {
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  let content;
  if (loading && !error) {
    content = <p>Loading...</p>;
  }
  if (!loading && error) {
    content = <p>{error}</p>;
  }
  if (!loading && !error) {
    content = children;
  }
  console.log(user, " => Line No: 20");
  if (user?.auth) {
    return content;
  }
  if (!loading && !error && !user?.email) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
