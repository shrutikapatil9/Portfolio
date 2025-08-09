/* jshint ignore:start */
export default function ProjectCard({ title, description, stack = [], github, live, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up">
      {image && (
        <img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, i) => (
          <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
