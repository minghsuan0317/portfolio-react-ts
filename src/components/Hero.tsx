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
      className="flex w-full min-h-screen justify-center relative px-6 pt-28"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl w-full text-left">
        {/* 左側文字內容 */}
        <div className="space-y-4 max-w-md relative z-10 pt-[5vh] sm:pt-[35vh]">
          <p className="text-sm font-semibold text-gray-600 ">
            <FaQuoteLeft className="text-2xl text-gray-800 mb-3" />I design. I
            debug. I make ideas happen.
          </p>
          <p className="text-sm text-gray-700">
            I build things that (hopefully) make people’s lives easier. I like
            turning messy ideas into real stuff. Things that actually work, make
            sense, and scale. Most of all, they solve real problems with care.
          </p>
          <a
            href="/CV.pdf"
            download="minghsuanchen_CV.pdf"
            className="inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-500 transition"
          >
            Download CV
          </a>
          <br />
          <a
            href="#contact"
            className="inline-block mt-2 bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition font-semibold"
          >
            Hire Me ↗
          </a>
        </div>

        {/* 圖 */}
        <div className="flex items-end h-full justify-center relative z-0">
          <img
            src="/images/ming-hero.png"
            alt="Ming with background"
            className="hidden sm:block w-screen-3/4 h-auto max-w-[600px] object-bottom"
          />
          <img
            src="/images/ming-hero.png"
            alt="Ming with background mobile"
            className="w-full sm:hidden"
          />
        </div>

        {/* 右邊：技能區塊 */}
        <div className="hidden sm:block relative z-10  pt-[35vh]">
          <div className="flex flex-wrap justify-center gap-2.5">
            <SkillItem
              icon={<SiTypescript className="text-blue-600" />}
              label="TypeScript"
            />
            <SkillItem
              icon={<SiJavascript className="text-yellow-400" />}
              label="JavaScript"
            />
            <SkillItem
              icon={<FaHtml5 className=" text-orange-500" />}
              label="HTML"
            />
            <SkillItem
              icon={<FaCss3Alt className="text-blue-500" />}
              label="CSS"
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

//  With a background in digital content and a love for clean UI, I focus on building smarter every day. Because I believe that’s how you grow: by doing, not just thinking!
