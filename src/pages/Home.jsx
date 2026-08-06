import { motion } from "framer-motion";
import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000]">
      {/* Luz roxa */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-violet-500/30 blur-[170px]"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, 30, -20, 0],
          opacity: [0.05, 0.6, 0.1, 0.5, 0.05],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Luz rosa */}
      import {motion} from "framer-motion";
      <motion.div
        className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-500/40 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          opacity: [0.15, 0.45, 0.2, 0.5, 0.15],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Luz azul */}
      <motion.div
        className="absolute top-40 right-0 h-[600px] w-[600px] rounded-full bg-blue-400/35 blur-[140px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 20, -40, 0],
          opacity: [0.15, 0.45, 0.2, 0.5, 0.15],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
       <Navbar/>
      <div className="relative z-10 min-h-screen flex flex-col text-center justify-center items-center">
        {/* Conteúdo */}
       
        <div className=" bg-white/50 border border-white/10 rounded-3xl overflow-hidden w-[80%] aspect-square min-h-[250px] mb-4">
          <div className="bg-white p-9  ">
            <p>Post 1</p>
          </div>
        </div>
        <div className=" bg-white/50 border  border-white/10 rounded-3xl overflow-hidden w-[80%] aspect-square min-h-[250px] mb-4">
          <div className="bg-white p-9 ">
            <p>Post 2</p>
          </div>
        </div>
      </div>
      <footer>
        <Navbar2 />
      </footer>
    </div>
  );
};

export default Home;
