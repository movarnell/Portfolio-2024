import React from 'react';
import { Ban, Github } from 'lucide-react';
import OpenAIIcon from '../assets/OpenAI.svg';
import ReactIcon from '../assets/Logos/react.svg';
import ViteIcon from '../assets/Logos/ViteJS logo.svg';
import ExpressIcon from '../assets/Logos/Express.svg';
import TailwindIcon from '../assets/Logos/Tailwind CSS icon.svg';
import JavaScriptIcon from '../assets/Logos/javascript.svg';
import HTML5Icon from '../assets/Logos/html-5.svg';
import CSS3Icon from '../assets/Logos/css-3.svg';
import TypeScriptIcon from '../assets/Logos/typescript-icon.svg';
import MySQLIcon from '../assets/Logos/mysql.svg';
import ApacheIcon from '../assets/Logos/apache.svg';
import PHPIcon from '../assets/php.svg';
import BootstrapIcon from '../assets/Logos/bootstrap.svg';
import ReactRouterIcon from '../assets/Logos/react-router.svg';

const iconMap = {
  OpenAI: OpenAIIcon,
  React: ReactIcon,
  Vite: ViteIcon,
  Express: ExpressIcon,
  'Tailwind CSS': TailwindIcon,
  JavaScript: JavaScriptIcon,
  HTML5: HTML5Icon,
  CSS3: CSS3Icon,
  TypeScript: TypeScriptIcon,
  MySQL: MySQLIcon,
  Apache: ApacheIcon,
  PHP: PHPIcon,
  Bootstrap: BootstrapIcon,
  'React Router': ReactRouterIcon,
};

const ProjectCard = ({ project }) => {
  const { title, description, image, githubLink, liveLink, icons } = project;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Move the image to the top of the card */}
      <div className="w-full h-60 flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-fit object-center" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex space-x-4 mb-6">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Visit Site
            </a>
          )}
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          ) : (
            <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100">
              <Ban className="mr-2 h-4 w-4" />
              Repository is Private
            </span>
          )}
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-500 mb-2 text-center">Technologies Used</h4>
          <div className="flex flex-wrap justify-evenly gap-2">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={iconMap[icon]}
                alt={`${icon} logo`}
                className="h-8 w-8 object-contain"
                title={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
