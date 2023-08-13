import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

/* eslint-disable react/prop-types */
const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Main;
