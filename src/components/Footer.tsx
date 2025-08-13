import { assets } from "../assets/assets";

export const Footer = () => {
  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About us", href: "#About" },
    { id: "contact", label: "Contact us", href: "#Contact" },
    { id: "privacy", label: "Privacy policy", href: "#" },
  ];
  return (
    <footer
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">Let us be your real estate plug.</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            {navItems.map((item) => (
              <li key={item.id}>
                <a className="hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>

          {/* Handle the subsribe by sending a received email to subscribers  */}
          <form>
            <div className="flex gap-2">
              <input
                className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button className="py-2 px-4 rounded bg-blue-500 text-white">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 &copy; Adu-Poku. All Right Reserved.
      </div>
    </footer>
  );
};
