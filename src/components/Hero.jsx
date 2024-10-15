import React from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Hero = () => {
  return (
    <div className="relative overflow-hidden m-7 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-700 to-pink-900 animate-gradient-x blur-xl"></div>
      <div className="relative flex items-center justify-center min-h-[30vh] py-8 px-4 bg-opacity-75 bg-gradient-to-r from-blue-700 to-purple-800 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between w-full max-w-7xl md:flex-row">
          <div className="mb-4 text-white md:mb-0 md:w-1/2 md:text-left">
            <h1 className="mb-1 text-5xl font-bold sm:text-4xl md:text-5xl">
              Michael Varnell
            </h1>
            <h2 className="text-lg font-light sm:text-2xl md:text-4xl">
              Software Engineer
            </h2>
          </div>
          <div className="flex flex-col items-center gap-2 md:w-1/2">
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{
                bgcolor: '#24292e',
                '&:hover': { bgcolor: '#2f363d' },
                color: 'white',
                width: '200px',  // Set a fixed width for all buttons
              }}
              href="https://github.com/movarnell"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                bgcolor: '#0a66c2',
                '&:hover': { bgcolor: '#004182' },
                color: 'white',
                width: '200px',  // Set a fixed width for all buttons
              }}
              href="https://linkedin.com/in/michaelovarnell"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              sx={{
                bgcolor: '#ff0000',
                '&:hover': { bgcolor: '#cc0000' },
                color: 'white',
                width: '200px',  // Set a fixed width for all buttons
              }}
              href="https://youtube.com/@helpcodeit"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
