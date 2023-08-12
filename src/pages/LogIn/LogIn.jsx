import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { AiFillGoogleCircle } from "react-icons/ai";
import { auth } from "../../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LogIn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  // Decided what to render
  let content = <></>;
  useEffect(() => {
    if (user?.user?.auth) {
      navigate("/");
      swal("Log In Successful");
    }
  }, [user?.user?.auth, navigate]);
  if (error && !loading) {
    content = (
      <DisplayCenter>{error.message || "Ops! Error happen"}</DisplayCenter>
    );
  }
  if (!error && loading) {
    content = <Loading />;
  }
  if (!error && !loading) {
    content = (
      <>
        <main>
          <DisplayCenter>
            <button
              onClick={() => signInWithGoogle()}
              className="btn flex items-center justify-center"
            >
              <AiFillGoogleCircle style={{ width: "20px", height: "20px" }} />{" "}
              Continue With Google
            </button>
          </DisplayCenter>
        </main>
      </>
    );
  }
  return content;
}
