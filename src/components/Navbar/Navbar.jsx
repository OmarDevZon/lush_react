import logo from "../../assets/images/logo/logo_284x137.png";

import Mobile from "./Mobile";
import { UseOpenAndClose } from "./Navbar.config";
import { useEffect, useState } from "react";
import Desktop from "./Desktop";


export const Navbar = () => {
  const { open, isOpen, close } = UseOpenAndClose();
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


  


  return (
    <>
      <nav
        className={` z-50 w-full lg:relative  my_shadow_nav container mx-auto`}
      >
       
        <div className="font-Cuprum text-[#D3D3D3] sp">
          <Mobile isOpen={isOpen} close={close} />
          <div className="flex justify-between items-center ">
            {/* Logo Here */}

            
            <a href="./" className="inline-block">
              <img
                src={logo}
                alt="LUSH CONSTRUCTIONS construction company Home Improvement high-quality construction"
              />
            </a>

            <div>
              {/* Desktop Menu */}
              <div className="flex items-center">
                <div className="md:block hidden">
                  <Desktop />
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex items-end flex-col">
                <h2 className="text-white font-bold text-center mb-1 -mt-6">
                  CONTACT 0404 289 437
                </h2>
                <button onClick={open} className="text-white mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
