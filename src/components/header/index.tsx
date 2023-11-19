import { Link } from "react-router-dom";
import logoImg from "../../assets/Alkmewa.png";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import "./header.module.css";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex items-center justify-between p-5 bg-white">
      <Link to="/">
        <img src={logoImg} alt="" className="w-40" />
      </Link>
      <nav className="flex gap-5 text-xl font-medium ">
        <Link to="#home">Home</Link>
        <Link to="#cakes">Cakes</Link>
        <Link to="#new">New Arrivels</Link>
        <Link to="#about">About</Link>
        <Link to="#review">Review</Link>
        <Link to="#contact">Contact</Link>
      </nav>
      <div className="flex gap-5">
        <div className="icons">
          <FaShoppingCart size={30} />
        </div>

        {showMenu && (
          <div>
            <Sheet>
              <SheetTrigger>
                <FaBars size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center">
                    <img src={logoImg} alt="" />
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-3 mt-4 text-lg text-[#aa7bc3]">
                      <Link to="/home">Home</Link>
                      <Link to="/home">Cakes</Link>
                      <Link to="/home">New Arrivels</Link>
                      <Link to="/home">About</Link>
                      <Link to="/home">Review</Link>
                      <Link to="/home">Contact</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
