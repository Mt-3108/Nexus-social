import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative z-10 min-h-screen flex flex-col text-center justify-center items-center gap-10">
        {/* Conteúdo */}
        <Post width={"w-[80%]"} />
        <Post width={"w-[80%]"} />
      </div>
      <footer>
        <Navbar2 />
      </footer>
    </div>
  );
};

export default Home;
