import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="bg-white h-20">
      <Link>
        <Globe className="w-20 h-20" />
      </Link>
      
    </div>
  );
};

export default Navbar2;
