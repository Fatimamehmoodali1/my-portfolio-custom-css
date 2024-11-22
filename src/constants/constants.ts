type SocialLinks = {
    github: string;
    linkedin: string;
    twitter: string;
  };
  
  export interface UserObject {
    name: string;
    heading: string;
    about: string;
    skills: string[];
    socialLinks: SocialLinks;
  }
  
  export const UserInfo: UserObject = {
    name: "Aqsa Shakeel",
    heading:
      "Welcome to my portfolio! I'm Aqsa Shakeel, a passionate beginner in web development. I'm excited to share my journey with you as I explore the world of technology and design. Here, you'll find my projects and ideas as I learn and grow in this amazing field. Thank you for visiting!",
  
    about: `
      <p>My name is Fatima Mehmood Ali, and I am learning web development and programming languages for the first time. I am a beginner in web development.</p>
      <br />
      <p>My IT journey began in 2022 when I completed a short course in Computer Information Technology (CIT). I earned an A+1 certificate for the course, which marked the start of my passion for tech and web development.</p>
      <br />
      <p>This experience sparked my interest in technology and web development, and I am now focused on expanding my skills in programming languages and building dynamic, user-friendly websites.</p>
    `,
  
    skills: [
      "HTML",
      "CSS",
      "TYPESCRIPT",
      "JAVA",
      "NEXT",
      "MS.OFFICE",
      "ADOBE PHOTOSHOP",
    ],
  
    socialLinks: {
      github: "https://github.com/Fatimamehmoodali1",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/your-twitter-username",
    },
  };
  
  export const HeaderItems = {
    home: { label: "Home", page: "home" },
    about: { label: "About", page: "about" },
    projects: { label: "Projects", page: "projects" },
  };