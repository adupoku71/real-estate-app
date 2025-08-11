import { assets } from "../assets/assets";

export const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home", href: "#Header" },
    { id: "about", label: "About", href: "#About" },
    { id: "projects", label: "Projects", href: "#Projects" },
    { id: "testimonials", label: "Testimonials", href: "#Testimonials" },
  ];

  //!! TODO: Implement Mobile version
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
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
      </div>
    </nav>
  );
};
