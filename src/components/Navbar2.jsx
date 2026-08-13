import { Bell, Globe, Search, SquarePen, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="bg-white h-20 flex gap-10 justify-center items-center">
      <Link to="/world">
        <Globe className="w-20 h-20" />
      </Link>
      <Link to="/search">
        <Search className="w-20 h-20" />
      </Link>
      <Link to="/create">
        <SquarePen className="w-20 h-20" />
      </Link>
      <Link to="/notifications">
        <Bell className="w-20 h-20" />
      </Link>
      <Link to="/chatbot">
          <Bot className="w-20 h-20" />
      </Link>
    </div>
  );
};

export default Navbar2;
