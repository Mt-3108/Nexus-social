import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import World from "./pages/World";
import Logus from "./pages/Logus";
function App() {
  return (
    <>
      <BrowserRouter>
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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/chatbot" element={<Logus />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
