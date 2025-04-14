import { FaGithub } from "react-icons/fa6";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  github,
  link,
}: ProjectProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-10">
      {/* 左側圖片 */}
      <img
        src={image}
        alt={title}
        className="w-full max-w-[350px] h-auto object-contain rounded-md"
      />

      {/* 右側文字 */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>

          {/* 技術 icon 列 */}
          <div className="flex flex-wrap gap-2 mt-4 text-sm">
            {tech.map((t, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-x-4 mt-4">
          {/* GitHub 按鈕 */}
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-sm transition"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          {/* 只有有提供 link 才顯示 */}
          {link && (
            <a
              href={link}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              Check Live Site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
