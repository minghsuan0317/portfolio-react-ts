import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-900 py-12 flex justify-center">
      <div className="bg-white w-full max-w-6xl rounded-3xl px-10 py-8">
        {/* 上方標題：置中獨立一行 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Contact with me
          </h2>
        </div>
        {/* 下方內容：左右兩欄排版 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 左側：文字 + icon */}
          <div className="space-y-6 text-left text-gray-800 flex-1">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <span>minghsuan0317@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl" />
              <span>+61 426 358 327</span>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-2xl" />
              <a
                href="https://github.com/minghsuan0317"
                target="_blank"
                className="hover:underline"
              >
                github.com/minghsuan0317
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/ming-hsuan-chen"
                target="_blank"
                className="hover:underline"
              >
                linkedin.com/in/ming-hsuan-chen
              </a>
            </div>
          </div>

          {/* 右側：插圖 + 按鈕 */}
          <div className="relative flex-1 flex flex-col items-center">
            <img
              src="/images/ming-call.png"
              alt="Ming call"
              className="w-60 md:w-72 object-contain"
            />
            <a
              href="mailto:minghsuan0317@gmail.com"
              className="absolute -bottom-4 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition font-semibold"
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
