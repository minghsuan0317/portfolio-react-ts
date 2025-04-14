import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 text-gray-800 py-6 mt-5">
      <div className="flex flex-col items-center space-y-6">
        {/* Menu */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#home" className="hover:underline">
              About Me
            </a>
          </li>
          <li>
            <a href="#home" className="hover:underline">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="mailto:mingshuan0317@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://wa.me/61426358327"
            target="_blank"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="hover:text-orange-600 transition" />
          </a>
          <a
            href="https://github.com/minghsuan0317"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-700 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/ming-hsuan-chen"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
