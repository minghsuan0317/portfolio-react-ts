import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-neutral-900 pt-20 pb-12 flex justify-center"
    >
      <div className="bg-white w-full max-w-6xl rounded-3xl px-10 z-2 relative overflow-hidden">
        {/* 上方標題：置中獨立一行 */}
        <div className="text-center mb-18">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mt-16 ">
            Contact with me
          </h2>
        </div>
        {/* 下方內容：左右兩欄排版 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 左側：文字 + icon */}
          <div className="space-y-10 text-left text-gray-800 flex-1 pl-10 text-xl md:text-2xl">
            {/* Email */}
            <a
              href="mailto:minghsuan0317@gmail.com"
              className="flex items-center gap-4 hover:underline"
            >
              <FaEnvelope className="text-4xl hover:text-blue-500 transition" />
              minghsuan0317@gmail.com
            </a>

            {/* WhatsApp */}
            <a
              href="tel:+61426358327"
              className="flex items-center gap-4 hover:underline"
            >
              <FaWhatsapp className="text-4xl hover:text-green-500 transition" />
              +61 426 358 327
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/minghsuan0317"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:underline"
            >
              <FaGithub className="text-4xl hover:text-orange-600 transition" />
              github.com/minghsuan0317
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ming-hsuan-chen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:underline"
            >
              <FaLinkedin className="text-4xl hover:text-blue-700 transition" />
              linkedin.com/in/ming-hsuan-chen
            </a>
          </div>

          {/* 右側：插圖 + 背景 + 按鈕 */}
          <div className="relative flex-1 flex flex-col items-center justify-end min-h-[500px]">
            
            {/* 藍色半圓背景 */}
            <div className="absolute w-[800px] h-[800px] bg-blue-300 rounded-full bottom-0 left-1/2 -translate-x-1/4 translate-y-1/2 z-0 overflow-hidden" />

            {/* 插圖 */}
            <img
              src="/images/ming-call.png"
              alt="Ming call"
              className="w-64 md:w-80 object-contain absolute left-1/3 bottom-0 z-10"
            />

            {/* 按鈕：往下移開圖片底部 */}
            <a
              href="mailto:minghsuan0317@gmail.com"
              className="relative z-20 mt-2 bg-orange-500 text-white px-8 py-4 rounded-full shadow-md hover:bg-orange-600 transition font-semibold ml-32 mb-10"
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
