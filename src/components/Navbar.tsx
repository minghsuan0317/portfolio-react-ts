const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white  shadow-md flex items-center justify-center overflow-x-auto h-12 md:h-24">
        <ul className="flex bg-black text-white  rounded-full text-xs md:text-lg font-medium shadow-md px-3 py-2 md:px-10 md:py-3 gap-1 md:gap-4 lg:gap-8">
          <li className="relative group">
            <a
              href="#home"
              className="relative z-10 px-3 md:px-6 py-2 rounded-full transition text-white group-hover:text-white"
            >
              Home
            </a>
            <div className="absolute top-1/2 left-0 w-full h-8 md:h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
          </li>
          <li className="relative group">
            <a
              href="#home"
              className="relative z-10 px-3 md:px-6 py-2 rounded-full transition text-white group-hover:text-white"
            >
              About
            </a>
            <div className="absolute top-1/2 left-0 w-full h-8 md:h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className="relative z-10 px-3 md:px-6 py-2 rounded-full transition text-white group-hover:text-white"
            >
              Resume
            </a>
            <div className="absolute top-1/2 left-0 w-full h-8 md:h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
          </li>
          <li className="relative group">
            <a
              href="#projects"
              className="relative z-10 px-3 md:px-6 py-2 rounded-full transition text-white group-hover:text-white"
            >
              Projects
            </a>
            <div className="absolute top-1/2 left-0 w-full h-8 md:h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className="relative z-10 px-3 md:px-6 py-2 rounded-full transition text-white group-hover:text-white"
            >
              Contact
            </a>
            <div className="absolute top-1/2 left-0 w-full h-8 md:h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
