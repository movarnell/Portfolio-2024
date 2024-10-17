import React from "react";
import { Button } from "@mui/material";
import { Github, Linkedin, Youtube } from "lucide-react";
import clsx from "clsx";

const Hero = () => {
  const meteorColors = [
    "bg-red-500", // bright red
    "bg-blue-500", // blue
    "bg-green-500", // green
    "bg-yellow-400", // yellow
    "bg-orange-500", // orange
    "bg-purple-500", // purple
    "bg-white", // white
  ];

  const Meteors = ({ number }) => {
    return [...new Array(number || 20).fill(true)].map((el, idx) => {
      const randomColor =
        meteorColors[Math.floor(Math.random() * meteorColors.length)];
      return (
        <span
          key={idx}
          className={clsx(
            "animate-comet absolute h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[220deg]",
            "comet",
            randomColor
          )}
          style={{
            top: 0,
            left: `${Math.random() * 140 - 20}%`, // Generate between -20% and 120%
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      );
    });
  };

  return (
    <div className="relative overflow-hidden m-7 rounded-2xl">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="comet-container">
        <Meteors number={50} />
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
          <div className="flex flex-col items-center gap-4 md:w-1/2">
            <Button
              variant="contained"
              startIcon={<Github />}
              sx={{
                width: "12rem",
                backgroundColor: "#24292e",
                "&:hover": {
                  backgroundColor: "#2f363d",
                  boxShadow:
                    "0 0 12px rgba(255, 255, 255, 0.1), 0 0 20px #24292e, 0 0 30px #24292e, 0 0 40px #24292e",
                },
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "box-shadow 0.3s ease-in-out",
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
                width: "12rem",
                backgroundColor: "#0a66c2",
                "&:hover": {
                  backgroundColor: "#004182",
                  boxShadow:
                    "0 0 12px rgba(255, 255, 255, 0.1), 0 0 20px #0a66c2, 0 0 30px #0a66c2, 0 0 40px #0a66c2",
                },
                color: "#ffffff",
                transition: "box-shadow 0.3s ease-in-out",
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
                width: "12rem",
                backgroundColor: "#ff0000",
                "&:hover": {
                  backgroundColor: "#cc0000",
                  boxShadow:
                    "0 0 12px rgba(255, 255, 255, 0.1), 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000",
                },
                color: "#ffffff",
                transition: "box-shadow 0.3s ease-in-out",
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
