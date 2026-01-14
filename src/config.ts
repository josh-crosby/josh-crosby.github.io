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
    "Hello and welcome to my portfolio! I am currently studying Computer Engineering at the University of Illinois Chicago with a dream of using computers to solve problems and improve lives.",
  skills: ["C/C++", "Python", "Java", "Verilog", "VHDL", "PHP", "LTSpice", "Cadence", "Wireshark", "VLSI Design", "Digital Signal Processing", "Communication Protocols", ],
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
      name: "Post-Quantum Email Communication System (Senior Design Project, In Progress)",
      description:
        "Designing a secure email communication system resilient to future quantum attacks. The system leverages post-quantum cryptography algorithms (Kyber for key exchange, Dilithium for digital signatures) and integrates a TPM 2.0 for secure key storage. Developed in Python and C++, the project focuses on end-to-end encryption, authentication, and usability. Currently in the planning and architecture phase, including formal specifications, threat modeling, and system design documentation.",
      link: "",
      skills: ["C/C++", "Python", "Cybersecurity Fundamentals", "Embedded System Security", "Post-Quantum Cryptography", "TPM 2.0 Integration", "Formal Documentation & Specification"],
    },
    {
      name: "Embedded Systems / Hardware Reverse Engineering - UART Access on Linkysys WRT54G v6",
      description:
        "Systematically probed the router’s PCB to identify UART pins for firmware access. Some pins were partially filled, so I used continuity tests and voltage measurements to distinguish ground, TX, and RX. I monitored voltage fluctuations to identify active communication lines, all while ensuring safe interaction with 3.3V logic circuits. This process involved soldering, understanding PCB layout, signal flow, and serial communication protocols.",
      link: "/router-project",
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
      skills: ["Python", "Web Scraping", "Data Pipelining", "Selenium", "Scrapy", "PHP"],
    },
  ],
  experience: [
    {
      company: "University of Illinois Chicago",
      title: "Research Assistant - LLM Pipeline Development",
      dateRange: "May 2025 - December 2025",
      bullets: [
        "Developed and deployed an end-to-end LLM pipeline to automatically generate comprehensive specifications for legacy Verilog codebases",
        "Implemented custom tokenization and preprocessing workflows to handle hardware description language syntax and semantics",
        "Built automated documentation generation system that reduced specification writing time for legacy digital design projects",
        "Collaborated with faculty and graduate students to integrate machine learning models with existing EDA toolchains" , 
      ],
    },
    {
      company: "Dick Van Dyke Appliance World",
      title: "Parts Clerk",
      dateRange: "January 2024 - May 2024",
      bullets: [
        "Reviewed technical schematics and datasheets to ensure part compatibility and function accuracy.",
        "Maintained accurate records of hardware transactions and supported customers in identifying critical components.",
      ],
    },
  ],
  education: [
    {
      school: "University of Illinois Chicago",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2024 - 2026",
      achievements: [
        "",
      ],
    },
    {
      school: "University of Illinois Urbana-Champaign",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2020 - 2024",
      achievements: [
        "",
      ],
    },
  ],
};
