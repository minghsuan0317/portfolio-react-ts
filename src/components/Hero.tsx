import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaAws,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiMongodb,
  SiTableau,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiTrello,
} from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative px-6 overflow-hidden pt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-3 items-center gap-8 text-left">
        {/* 左側文字內容 */}
        <div className="space-y-4 max-w-md">
          <FaQuoteLeft className="text-2xl text-gray-800 mb-2" />
          <p className="text-sm font-semibold text-gray-600">
            I design. I debug. I make ideas happen.
          </p>
          <p className="text-sm text-gray-700">
            I build things that (hopefully) make people’s lives easier. With a
            background in digital content and a love for clean UI, I focus on
            building smarter every day. Because I believe that’s how you grow:
            by doing, not just thinking!
            <br />
            <br />I like turning messy ideas into real stuff. Things that
            actually work, make sense, and scale. Most of all, they solve real
            problems with care.
          </p>

          <a
            href="#contact"
            className="inline-block mt-2 bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition font-semibold"
          >
            Hire Me ↗
          </a>
        </div>

        {/* Hero 圓背景 + 插圖 + 標題包在一起 */}
        <div className="relative flex justify-center items-end">
          <div
            className="relative flex flex-col items-center justify-center z-10 w-full"
            style={{ height: "700px" }}
          >
            {/* 藍色圓背景 */}
            <div className="absolute w-[700px] h-[700px] bg-blue-200 rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-1" />

            {/* 標題固定大小 */}
            <h1 className="text-[50px] font-bold text-center text-gray-900 leading-tight relative z-20 mb-[-96px]">
              I’m <span className="text-blue-500">Ming</span>,<br />
              <span className="whitespace-nowrap">Full-Stack Engineer</span>
            </h1>
            {/* 插圖固定大小 */}
            <div className="relative z-30 translate-y-14 bottom-0">
              <img
                src="/images/ming-mac.png"
                alt="Ming Hero"
                className="w-[340px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* 右邊：技能區塊 */}
        <div className="relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            <SkillItem
              icon={<FaHtml5 className=" text-orange-500" />}
              label="HTML"
            />
            <SkillItem
              icon={<FaCss3Alt className="text-blue-500" />}
              label="CSS"
            />
            <SkillItem
              icon={<SiJavascript className="text-yellow-400" />}
              label="JavaScript"
            />
            <SkillItem
              icon={<SiTypescript className="text-blue-600" />}
              label="TypeScript"
            />
            <SkillItem
              icon={<FaReact className="text-blue-400" />}
              label="React"
            />
            <SkillItem
              icon={<FaPython className="text-yellow-500" />}
              label="Python"
            />
            <SkillItem
              icon={<SiFlask className="text-gray-700" />}
              label="Flask"
            />
            <SkillItem
              icon={<FaJava className="text-red-600" />}
              label="Java"
            />
            <SkillItem
              icon={<SiPostgresql className="text-blue-600" />}
              label="SQL"
            />
            <SkillItem
              icon={<SiMongodb className="text-green-600" />}
              label="MongoDB"
            />
            <SkillItem
              icon={<FaAws className="text-orange-400" />}
              label="AWS"
            />
            <SkillItem
              icon={<SiTrello className="text-blue-400" />}
              label="Trello"
            />
            <SkillItem
              icon={<SiTableau className="text-indigo-500" />}
              label="Tableau"
            />
            <SkillItem
              icon={<SiNumpy className="text-purple-500" />}
              label="Numpy"
            />
            <SkillItem
              icon={<SiPandas className="text-black" />}
              label="Pandas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs">
    {icon}
    <span>{label}</span>
  </div>
);

export default Hero;
