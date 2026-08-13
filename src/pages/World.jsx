import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

const World = () => {
  return (
    <div>
      <Navbar />
      <div className="relative z-10 min-h-screen grid grid-cols-2 text-center justify-items-center gap-10">
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
        <Post width="w-[90%]" />
      </div>
      <footer>
        <Navbar2 />
      </footer>
    </div>
  );
};

export default World;
