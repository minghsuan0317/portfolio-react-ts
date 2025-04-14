const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div className="w-full max-w-6xl px-4">
        <div className="relative flex justify-center">
          {/* ✅ 白色全螢幕背景條 */}
          <div className="absolute top-1/2 -translate-y-1/2 w-screen h-20 bg-white shadow-md -z-10 rounded-none" />

          <ul className="w-full flex justify-evenly bg-neutral-900 text-white px-10 py-4 rounded-full text-lg font-medium shadow-md">
            <li className="relative group">
              <a
                href="#home"
                className="relative z-10 px-6 py-2 rounded-full transition text-white group-hover:text-white"
              >
                Home
              </a>
              <div className="absolute top-1/2 left-0 w-full h-12 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
            </li>
            <li className="relative group">
              <a
                href="#home"
                className="relative z-10 px-6 py-2 rounded-full transition text-white group-hover:text-white"
              >
                About
              </a>
              <div className="absolute top-1/2 left-0 w-full h-12 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
            </li>
            <li className="relative group">
              <a
                href="#contact"
                className="relative z-10 px-6 py-2 rounded-full transition text-white group-hover:text-white"
              >
                Resume
              </a>
              <div className="absolute top-1/2 left-0 w-full h-12 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
            </li>
            <li className="relative group">
              <a
                href="#projects"
                className="relative z-10 px-6 py-2 rounded-full transition text-white group-hover:text-white"
              >
                Project
              </a>
              <div className="absolute top-1/2 left-0 w-full h-12 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
            </li>
            <li className="relative group">
              <a
                href="#contact"
                className="relative z-10 px-6 py-2 rounded-full transition text-white group-hover:text-white"
              >
                Contact
              </a>
              <div className="absolute top-1/2 left-0 w-full h-12 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-0 -translate-y-1/2" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
