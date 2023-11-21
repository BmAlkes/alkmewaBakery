import { Link } from "react-router-dom";
import logoImg from "../../assets/Alkmewa.png";
import { FaBars } from "react-icons/fa";
import "./header.module.css";
import { useEffect, useState } from "react";
import hebFlag from "../../assets/israel-48.png";
import usaFlag from "../../assets/usa-48.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import i18n from "../../i18n";

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

  const languageOptions = [
    { name: "English", value: "en", flag: usaFlag },
    { name: "Hebrew", value: "he", flag: hebFlag },
  ];

  return (
    <header className="flex items-center justify-between p-5 bg-white w-full">
      <Link to="/">
        <img src={logoImg} alt="" className="lg:w-40 min-[350px]:w-20" />
      </Link>
      <nav className="flex gap-5 text-xl font-medium ">
        <a href="#home">Home</a>
        <a href="#cakes">Cakes</a>
        <a href="#new">New Arrivels</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="flex gap-5">
        <div className="flex ">
          {languageOptions.map((language) => (
            <button
              key={language.value}
              className="flags"
              onClick={() => {
                i18n.changeLanguage(language.value);
              }}
            >
              <img src={language.flag} alt={language.name} />
            </button>
          ))}
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
                      <a href="#home">Home</a>
                      <a href="#cakes">Cakes</a>
                      <a href="#new">New Arrivels</a>
                      <a href="#about">About</a>
                      <a href="#contact">Contact</a>
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
