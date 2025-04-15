import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black p-8 p-8 sm:p-20 flex justify-center"
    >
      <div className="bg-white w-full max-w-6xl rounded-3xl z-2 relative overflow-hidden">
        {/* 上方標題：置中獨立一行 */}
        <div className="text-center mb-18">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mt-10 mb-4">
            Contact Me
          </h2>
        </div>
        {/* 下方內容：左右兩欄排版 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 flex-wrap">
          {/* 左側：文字 + icon */}
          <div className="space-y-10 text-left text-gray-800 flex-1 pl-2 sm:pl-10 mb-5 sm:mb-0 text-lg md:text-2xl">
            {/* Email */}
            <a
              href="mailto:minghsuan0317@gmail.com"
              className="flex items-center gap-4 hover:underline"
            >
              <FaEnvelope className="text-lg sm:text-2xl md:text-4xl hover:text-blue-500 transition" />
              minghsuan0317@gmail.com
            </a>

            {/* WhatsApp */}
            <a
              href="tel:+61426358327"
              className="flex items-center gap-4 hover:underline"
            >
              <FaWhatsapp className="text-lg sm:text-2xl md:text-4xl hover:text-green-500 transition" />
              +61 426 358 327
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/minghsuan0317"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:underline"
            >
              <FaGithub className="text-lg sm:text-2xl md:text-4xl  hover:text-orange-600 transition" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ming-hsuan-chen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:underline"
            >
              <FaLinkedin className="text-lg sm:text-2xl md:text-4xl hover:text-blue-700 transition" />
              LinkedIn
            </a>
          </div>

          {/* 右側：插圖 + 背景 + 按鈕 */}
          <div className="hidden sm:block relative flex-1 flex flex-col justify-end min-h-[500px]">
            {/* 插圖 */}
            <img
              src="/images/ming-call.png"
              alt="Ming call"
              className="object-contain absolute bottom-0 right-0"
            />
            {/* 按鈕 */}
            <a
              href="mailto:minghsuan0317@gmail.com"
              className="absolute bottom-10 right-20 z-20 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition font-semibold w-auto whitespace-nowrap"
            >
              Hire Me ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
