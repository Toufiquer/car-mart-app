import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { AiFillGoogleCircle } from "react-icons/ai";
export default function LogIn() {
  return (
    <main>
      <DisplayCenter>
        <button className="btn flex items-center justify-center">
          <AiFillGoogleCircle style={{ width: "20px", height: "20px" }} />{" "}
          Continue With Google
        </button>
      </DisplayCenter>
    </main>
  );
}
