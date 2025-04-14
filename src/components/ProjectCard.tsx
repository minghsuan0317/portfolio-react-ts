interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  link,
}: ProjectProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-10">
      {/* 左側圖片 */}
      <img
        src={image}
        alt={title}
        className="w-full max-w-[350px] h-auto object-cover rounded-md"
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

        {/* 按鈕 */}
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            Check Live Site ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
