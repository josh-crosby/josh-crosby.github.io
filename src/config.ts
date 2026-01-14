export const siteConfig = {
  name: "Josh Crosby",
  title: "Computer Engineering Student at University of Illinois Chicago",
  description: "Portfolio website of Josh Crosby",
  accentColor: "#1d4ed8",
  social: {
    email: "jcrosby3@uic.edu",
    linkedin: "https://www.linkedin.com/in/josh-crosby/",
    // github: "https://github.com/jcrosby3uic",
  },
  aboutMe:
    "Hello and welcome to my portfolio! I am currently studying Computer Engineering at the University of Illinois Chicago with a dream of using to solve problems and improve lives.",
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["C/C++", "Python", "Java", "Assembly (ARM/x86)", "Verilog", "VHDL", "SystemVerilog"]
    }, 
    {
      category: "EDA Tools",
      skills: ["Vivado", "Quartus Prime", "ModelSim", "KiCad", "LTSpice", "Cadence", "Wireshark"]
    }, 
    {
      category: "Core Concepts",
      skills: ["Digital Signal Processing", "Computer Architecture", "VLSI Design", "Control Systems", "Communication Protocols", "AI/ML Integration"]
    }, 
  ],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
