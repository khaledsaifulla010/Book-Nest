import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
