import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/Alkmewa.png";
import "./header.module.css";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase.config";

const HeaderDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between p-5 bg-white">
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
      <nav className="flex gap-5 text-xl font-medium ">
        <Link to="/dashboard">Home</Link>
        <Link to="/new">Register new</Link>
      </nav>
      <div className="flex gap-5">
        <div className="icons">
          <LogOut size={30} onClick={handleLogout} />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
