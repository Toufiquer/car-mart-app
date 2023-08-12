import Navbar from "../../components/Navbar/Navbar";

/* eslint-disable react/prop-types */
const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Main;
