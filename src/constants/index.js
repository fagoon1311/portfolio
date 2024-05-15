import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `"As a dedicated software engineer specializing in front-end development and skilled in data analysis, I bring a blend of creativity and analytical prowess to the table. With a strong foundation in crafting immersive user experiences and a knack for deciphering complex datasets, I am committed to driving growth both personally and within the organization. My goal is to utilize my expertise to develop innovative solutions that not only elevate user satisfaction but also contribute significantly to the overall success and advancement of the organization, fostering a culture of continuous improvement and excellence."`;

export const ABOUT_TEXT = `As a software engineer with a Bachelor's degree in BTech, I've dedicated myself to the dynamic world of technology. Currently employed full-time in a fintech firm, I thrive on the challenges and innovations within this rapidly evolving industry. My skill set encompasses a wide spectrum, ranging from proficient web development to insightful data analytics and adept problem-solving.

Beyond my professional endeavors, I've embarked on numerous freelance projects, honing my abilities while delivering tailored solutions to diverse clientele. Additionally, I find joy in imparting knowledge as a teacher to high school students, sharing my passion for science and mathematics and nurturing the next generation of thinkers and innovators.

With a relentless drive for excellence and a fervent commitment to continuous learning, I'm poised to make meaningful contributions to both the tech realm and educational landscape, embracing every opportunity to innovate, inspire, and empower others.`;

export const EXPERIENCES = [
  {
    year: "November 2023 - Present",
    role: "Associate Software Engineer",
    company: "FinThrive",
    description: `Played a pivotal role in translating business requirements into technical specifications, including the development of front-end applications for the Data Management team. Collaborated closely with development teams to implement solutions that aligned with organizational goals, leveraging front-end technologies to automate SQL processes in the background. Engaged in continuous improvement initiatives to address evolving business requirements and sustain 90%+ SLA performance. Actively participated in performance tuning exercises, identifying bottlenecks, and refining stored procedures to enhance database response times and overall system performance.`,
    technologies: ["Javascript", "React.js", "SQL"],
  },
  {
    year: "May 2022 - August 2022",
    role: "Tech Trainee",
    company: "Publicis Sapient",
    description: `
    As a tech trainee, I honed my SQL prowess, crafting procedures to extract and analyze data with precision. Transitioning to development, I specialized in creating dynamic Power BI reports and dashboards, amplifying data insights. Leveraging Power BI Services, I seamlessly published these visualizations for widespread access. Additionally, I spearheaded the development of user-friendly PowerApps models and self-scheduled reports, streamlining data access and enhancing efficiency across the board.`,
    technologies: ["Python", "PowerBI", "mySQL"],
  },
  {
    year: "Oct 2021 - Nov - 2021",
    role: "Data Science Intern",
    company: "LetsGrowMore",
    description: `Utilizing Python, I conducted statistical experiments to unearth trends and patterns within datasets, extracting valuable insights. In PowerBI, I developed DAX formulas to transform data for insightful reports. Furthermore, I integrated PowerApps with SharePoint, fostering seamless collaboration and sharing among team members.`,
    technologies: ["Python", "Tableau", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Video Streaming Platform",
    image: project1,
    description:
      " Developed a feature-rich video streaming platform with advanced functionalities like debouncing, shimmer effect, live chat, and nested comments. Implemented an efficient caching mechanism that significantly reduced search time, resulting in a notable decrease of 40% and optimizing overall platform performance.",
    technologies: ["HTML", "TailwindCSS", "React", "JavaScript", "Redux", "FramerMotion"],
  },
  {
    title: "Food Ordering App",
    image: project2,
    description:
      `Engineered a dynamic food ordering app with advanced features like filtered searching, Redux for
      seamless state management, and optimized performance through lazy loading and chunking. Achieved a substantial 30%
      reduction in search and load times by implementing efficient lazy loading and chunking strategies, enhancing overall app
      responsiveness. Implemented a config-driven UI for flexibility and customization.`,
    technologies: ["HTML", "TailwindCSS", "React", "Redux", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "FramerMotion"],
  },
  {
    title: "Movie Recommender System",
    image: project4,
    description:
      "a collaborative filtering-based movie recommender system in Python. This system suggests movies based on summaries of films you've already watched. By leveraging collaborative filtering techniques, it analyzes similarities between your viewing preferences and those of other users to provide personalized recommendations. This approach enhances user satisfaction by delivering tailored suggestions aligned with individual interests and viewing history.",
    technologies: ["HTML", "CSS", "React", "Python"],
  },
];

export const CONTACT = {
  address: "New Delhi, India",
  phoneNo: "+91-8076907905",
  email: "fs14smailbox65@gmail.com",
};
