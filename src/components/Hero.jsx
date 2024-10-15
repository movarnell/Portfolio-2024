import React from 'react';
import { Button } from '@mui/material';
import { Github, Linkedin, Youtube } from 'lucide-react';
import clsx from 'clsx';

const Hero = () => {
  const Meteors = ({ number }) => {
    return [...new Array(number || 20).fill(true)].map((el, idx) => (
      <span
        key={idx}
        className={clsx(
          "animate-comet absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
          "comet"
        )}
        style={{
          top: 0,
          left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
          animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
        }}
      ></span>
    ));
  };

  return (
    <div className="relative overflow-hidden m-7 rounded-2xl">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="comet-container">
        <Meteors number={10} />
      </div>
      <div className="relative flex items-center justify-center min-h-[50vh] py-8 px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-between w-full max-w-7xl md:flex-row">
          <div className="ms-5 mb-4 text-white md:mb-0 md:w-1/2 md:text-left">
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
              startIcon={<Github />}
              sx={{
                width: '12rem',
                backgroundColor: '#24292e',
                '&:hover': {
                  backgroundColor: '#2f363d',
                },
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 0 12px rgba(255, 255, 255, 0.1)',
              }}
              href="https://github.com/movarnell"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<Linkedin />}
              sx={{
                width: '12rem',
                backgroundColor: '#0a66c2',
                '&:hover': {
                  backgroundColor: '#004182',
                },
                color: '#ffffff',
              }}
              href="https://linkedin.com/in/michaelovarnell"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<Youtube />}
              sx={{
                width: '12rem',
                backgroundColor: '#ff0000',
                '&:hover': {
                  backgroundColor: '#cc0000',
                },
                color: '#ffffff',
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
