const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative px-6 overflow-hidden pt-28
"
    >
      {/* Hero 圓背景 + 插圖 + 標題包在一起 */}
      <div className="relative flex flex-col items-center justify-center z-10  w-full">
        {/* 藍色圓背景 */}
        <div className="absolute w-[700px] h-[700px] bg-blue-200 rounded-full z-0 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />

        {/* 疊在插圖後的文字 */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center text-gray-900 leading-tight relative z-20 -mb-24">
          I’m <span className="text-blue-500">Ming</span>,<br />
          Full-Stack Engineer
        </h1>

        {/* 中央人物插圖 */}
        <div className="relative z-30 translate-y-4">
          <img
            src="/images/ming-mac.png"
            alt="Ming Hero"
            className="w-[260px] sm:w-[325px] md:w-[390px] lg:w-[455px] xl:w-[520px] h-auto"
          />
        </div>
      </div>

      {/* 左側文字內容 */}
      <div className="absolute left-10 top-[50%] z-20 max-w-md space-y-4">
        <p className="text-sm text-gray-700 italic">
          “Jenny’s exceptional product design ensures our website’s success.”
        </p>
        <p className="text-sm font-semibold text-gray-600">
          Highly Recommended
        </p>

        <a
          href="#contact"
          className="inline-block mt-2 bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition font-semibold"
        >
          Hire Me ↗
        </a>
      </div>

      {/* 右上角：RMIT 評價 */}
      <div className="absolute right-10 top-[50%] text-center z-20 text-sm text-gray-600">
        <div className="text-blue-400 text-lg">★★★★★</div>
        <div className="font-bold">RMIT</div>
        <div>Master of IT</div>
      </div>
    </section>
  );
};

export default Hero;
