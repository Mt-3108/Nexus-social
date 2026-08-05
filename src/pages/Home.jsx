const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000]">
      {/* Luz roxa */}
      <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-400/30 blur-[300px]" />

      {/* Luz rosa */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-400/25 blur-3xl" />

      {/* Luz azul */}
      <div className="absolute top-40 right-0 h-[600px] w-[600px] rounded-full bg-blue-300/25 blur-[120px]" />

      <div className="relative z-10 min-h-screen flex flex-col text-center justify-center items-center">
        {/* Conteúdo */}
        <div className=" bg-white/50 border border-white/10 rounded-3xl w-100 h-100 mb-4">
          <p>Post 1</p>
        </div>
        <div className=" bg-white/50 border  border-white/10 rounded-3xl w-100 h-100 mb-4">
          <p>Post 2</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
