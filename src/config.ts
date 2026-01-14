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
  skills: ["C/C++", "Python", "Java", "Verilog", "VHDL", "LTSpice", "Cadence", "Wireshark", "VLSI Design", "Digital Signal Processing", "Communication Protocols"],
    // skillCategories: [
  //   {
  //     category: "Programming Languages",
  //     skills: ["C/C++", "Python", "Java", "Assembly (ARM/x86)", "Verilog", "VHDL", "SystemVerilog"]
  //   }, 
  //   {
  //     category: "EDA Tools",
  //     skills: ["Vivado", "Quartus Prime", "ModelSim", "KiCad", "LTSpice", "Cadence", "Wireshark"]
  //   }, 
  //   {
  //     category: "Core Concepts",
  //     skills: ["Digital Signal Processing", "Computer Architecture", "VLSI Design", "Control Systems", "Communication Protocols", "AI/ML Integration"]
  //   } 
  // ],
  projects: [
    {
      name: "Embedded Systems / Hardware Hacking - UART Access on Linkysys WRT54G v6",
      description:
        "Systematically probed the router’s PCB to identify UART pins for firmware access. Some pins were partially filled, so I used continuity tests and voltage measurements to distinguish ground, TX, and RX. I monitored voltage fluctuations to identify active communication lines, all while ensuring safe interaction with 3.3V logic circuits. This process involved soldering, understanding PCB layout, signal flow, and serial communication protocols.",
      link: "",
      skills: ["C/C++", "Communication Protocols", "Soldering", "PCB"],
    },
    {
      name: "ASL Recognition Glove Prototype",
      description:
        "Developed a wearable glove equipped with flex sensors and an Arduino Nano RP2040 to capture hand movements and gestures. Integrated a machine learning model to recognize individual American Sign Language (ASL) letters in real time, translating hand shapes into corresponding digital outputs.",
      link: "",
      skills: ["Sensor Interfacing", "Embedded Programming", "Microcontrollers", "AI Implementation"],
    },
    {
      name: "E-Commerce Product Classification System",
      description:
        "Architeched and deployed a scalable web scraping system using Selenium, Scrapy for automated product data extraction while adhering to websites 'robot.txt'. Additionally, I designed custom SQL database schema and implemented ETL pipelines with secure API endpoints to serve classified product data to client applications.",
      link: "",
      skills: ["Python", "Web Scraping", "Data Pipelining"],
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
