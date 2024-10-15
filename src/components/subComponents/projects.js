import codeProblemsImage from '../../assets/CodeProblemsSquare.png';
import mockItImage from '../../assets/Mock It.png';
import helpCodeItLogo from '../../assets/helpcodeitlogo.svg';
import dogParkImage from '../../assets/Dog Park.png';
import ntheSportsLogo from '../../assets/nthesportslogo.png';
import movieReviewsLogo from '../../assets/Movie Reviews by You.svg';
import hangmanImage from '../../assets/hang.png';

const projects = [
  {
    title: "AI Integrated React Application",
    description: "A full-stack application providing basic practice coding problems with integrated backend API handling.",
    image: codeProblemsImage,
    githubLink: "https://github.com/movarnell/codingproblemapp",
    liveLink: "https://codeproblems.michaelvarnell.com",
    icons: ["OpenAI", "React", "Vite", "Express", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "React & Express API Mocking Application",
    description: "A full-stack application that simplifies mocking API calls with a user-friendly interface.",
    image: mockItImage,
    githubLink: "https://github.com/movarnell/HelpCodeItMockAPI-Client",
    liveLink: "https://mockapi.helpcodeit.com",
    icons: ["React", "Vite", "React Router", "Tailwind CSS", "JavaScript", "Express", "MySQL", "Apache", "HTML5", "CSS3"],
  },
  {
    title: "Help Code It",
    description: "A React-based website offering resources for learning to code, with a practice component in development.",
    image: helpCodeItLogo,
    githubLink: null, // No public repository
    liveLink: "https://www.helpcodeit.com",
    icons: ["React", "Vite", "Tailwind CSS", "Express", "JavaScript", "React Router", "HTML5", "CSS3"],
  },
  {
    title: "15th Place Townhome - Dog Park Scheduler",
    description: "A full-stack React app for scheduling dog park appointments, with a PHP backend and MySQL database.",
    image: dogParkImage,
    githubLink: "https://github.com/movarnell/Dog-Park-Scheduler",
    liveLink: "https://15thplacedogpark.com",
    icons: ["React", "React Router", "TypeScript", "JavaScript", "PHP", "MySQL", "Apache", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Fake Store",
    description: "A mock storefront showcasing a complex React app with dynamic product pages and shopping cart functionality.",
    image: ntheSportsLogo,
    githubLink: "https://github.com/movarnell/fakestore",
    liveLink: "https://fakestore.michaelvarnell.com",
    icons: ["React", "JavaScript", "React Router", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Movie Reviews Project",
    description: "A React app that allows users to review movies and provides a structured learning experience for reusable components.",
    image: movieReviewsLogo,
    githubLink: "https://github.com/movarnell/movie-project",
    liveLink: "https://movieproject.michaelvarnell.com",
    icons: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Hangman Game",
    description: "A web-based JavaScript Hangman game originally created for my son, later developed into a full game with DOM manipulation.",
    image: hangmanImage,
    githubLink: "https://github.com/movarnell/Hangman_website",
    liveLink: "https://hangman.michaelvarnell.com",
    icons: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
  }
];

export default projects;
