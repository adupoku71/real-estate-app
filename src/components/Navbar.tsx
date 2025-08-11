import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home", href: "#Header" },
    { id: "about", label: "About", href: "#About" },
    { id: "projects", label: "Projects", href: "#Projects" },
    { id: "testimonials", label: "Testimonials", href: "#Testimonials" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [showMobileMenu]);
  //!! TODO: Implement Mobile version
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      {/* Desktop Nav  */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <a
                className="cursor-pointer hover:text-gray-400"
                href={navItem.href}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>

        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          onClick={() => {
            setShowMobileMenu(true);
          }}
          alt=""
        />
      </div>

      {/* Mobile Nav  */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 left-0 bottom-0 top-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            alt=""
            onClick={() => {
              setShowMobileMenu(false);
            }}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => {
                  setShowMobileMenu(false);
                }}
                className="px-4 py-2 rounded-full inline-block"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
