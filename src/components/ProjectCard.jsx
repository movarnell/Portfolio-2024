import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, githubLink, liveLink, icon }) => {
  return (
    <Card className="flex flex-col w-full h-full mx-auto my-5 transition-all duration-300 ease-in-out border border-gray-700 shadow-md overflow-hidden dark:border-gray-600 hover:shadow-2xl hover:scale-[1.02] transform">
      {/* Image container with fixed height and transition */}
      <div className="relative w-full h-60 bg-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      {/* Project details */}
      <CardContent className="flex flex-col flex-grow p-4 text-white bg-gray-800">
        <div className="flex items-center mb-2">
          {/* Icon */}
          {icon && <img src={icon} alt={`${title} icon`} className="w-6 h-6 mr-2" />}
          {/* Title */}
          <Typography variant="h6" className="text-lg font-bold truncate">
            {title}
          </Typography>
        </div>

        <Typography variant="body2" className="flex-grow mt-2 mb-4 text-sm text-gray-400 line-clamp-3">
          {description}
        </Typography>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto">
          {/* GitHub Link */}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-gray-400 transition-colors duration-300 ease-in-out">
              <Github className="mr-1 w-5 h-5" />
              GitHub
            </a>
          )}

          {/* Live Project Link */}
          {liveLink && (
            <Button
              variant="contained"
              color="primary"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              className="text-xs transition-all duration-300 ease-in-out hover:bg-blue-600"
            >
              View Live
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
