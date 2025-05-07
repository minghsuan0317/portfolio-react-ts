import { FaQuoteLeft } from "react-icons/fa";


const HeroMobile = () => {
  return (
    <section className="block md:hidden  pt-20">
      {/* 圖片置頂 */}
      <img
        src="/images/ming-hero-mobile.png"
        alt="Ming mobile"
        className="object-contain mx-auto mb-6"
      />
      {/* 標語與介紹文字 */}
      <div className="text-center space-y-2 mb-6">
        <p className="text-sm font-semibold text-gray-600 flex items-center justify-center">
          <FaQuoteLeft className="inline-block text-2xl mr-2" />I design. I
          debug. I make ideas happen.
        </p>
        <p className="text-sm text-gray-700">
          I build things that (hopefully) make people’s lives easier. I like
          turning messy ideas into real stuff. Things that actually work, make
          sense, and scale.
        </p>
        <br />
        <a
          href="/CV.pdf"
          download="minghsuanchen_CV.pdf"
          className="inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-500 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="inline-block mt-2 bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition font-semibold"
        >
          Hire Me ↗
        </a>
      </div>
    </section>
  );
};

export default HeroMobile;
