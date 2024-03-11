import mainstyle from "./home.module.css";
// components
import Navbar from "./components/navbar/navbar";
import Posts from "./components/posts/posts";
import Voicechats from "./components/voicechats/voicechats";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const user = useSelector((state) => state.userReducer);

  const showData = () => {
    console.log(user);
  };
  return (
    <>
      <button onClick={showData}>show asdasd</button>
      <nav className={mainstyle.nvbar}>
        <Navbar />
      </nav>
      <section>
        <Posts />
        <Voicechats />
      </section>
    </>
  );
};
export default Home;
