import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aarya Sharma",
  initials: "AS",
  location: "Dublin, Ireland",
  locationLink: "https://maps.app.goo.gl/EH6yqLLgwvHx9Gqk8",
  about:
    "Recent Computer Engineering Graduate from Trinity College Dublin",
  summary:
    "I'm a versatile Computer Engineer poised to contribute effectively to any team",
  avatarUrl: "",
  personalWebsiteUrl: "https://aarya00s.github.io/website/index.html",
  contact: {
    email: "aaryasharma.official@gmail.com",
    tel: "+3530894908522",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aarya00s",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sharmaaarya/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Trinity College Dublin",
      degree: "Bachelor's Degree in Computer Engineering, BAI",
      start: "2020",
      end: "2023",
    },
    {
      school: "International Center of Applied Science",
      degree: "Bachelor's Degree in Computer Science, Transferred",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Charzer",
      link: "https://www.charzer.com/",
      badges: ["12months"],
      title: "Full Stack Developer Intern",
      start: "2020",
      end: "2021",
      description:
        "Enhanced user experience, increasing engagement by 20% among 10,000+ users",
    },
    {
      company: "FaeBike",
      link: "https://www.faebikes.com/",
      badges: ["Remote"],
      title: "Front end Developer Intern",
      start: "2019",
      end: "2019",
      description:
        "Refined website visibility by 25% through the incorporation of SEO best practices,Attained advanced site navigability and user engagement amongst 30,000+ users.",
    },
  ],
  skills: [
    "JavaScript",
    "Java",
    "React/Next.js/Remix",
    "Python",
    "C++",
    "C#",
    "HTML",
    "OpenCV",
    "Node.js"
  ],
  projects: [
    {
      title: "Final Year Project",
      techStack: [
        "Python",
        "MATLAB",
        "Plotly",
        "Git",
        "Cognitive Radio",
        "Computational Mathematics",
        "Radio Propagation",
        "Computational Electromagnetics"

      ],
      description: "Implemented the Electric Field Integration Equation for Terrain Profiles Using the Forward Scattering Method, accelerating efficiency by 96% compared to existing methods. Addressed hidden node problems and security/reliability issues in Cognitive Radio, with the proposed methodology and REM server potentially paving the way for more reliable CR deployments, achieving a 40% increase in efficiency. Earned First Class Honours in recognition of the project's success.",
      link: {
        label: "Final Year Project",
        href: "https://drive.google.com/file/d/1v18Awpmg4FIseugSKQaJRfdIJhiUm-TW/view?usp=sharing",
      },
    },
    {
      title: "StarGazer",
      techStack: ["C#", "Unity", "Blender", "ARCore","Cinema4d","Vueforia"],
      description:
        "Using augmented reality, the Stargazing AR app engages users in learning about the solar system offering a cutting-edge and immersive experience. The app, which was created with Unity and the C# programming language, effortlessly combines augmented reality (AR) features with data extraction from APIs to deliver accurate recent information about celestial bodies.",
      link: {
        label: "StarGazer",
        href: "https://drive.google.com/file/d/1vLINIJNsN9GqtMrT29l6s0sIe4yDJbuH/view",
      },
    },
    {
      title: "DoomStopper",
      techStack: ["Java", "Bored API", "Android Studio","Firebase"],
      description:
        "DoomStopper, an innovative Android application, addresses the growing concern of doom-scrolling—the behavior of continuously consuming negative or distressing news through digital platforms. By leveraging the BORED API, it monitors user activity and intervenes with engaging, positive content to break the cycle of doom-scrolling, aiming to improve mental well-being by promoting healthier online habits",
      link: {
        label: "code link",
        href: "https://drive.google.com/drive/folders/1s50WscdS9PLW-Kj_PLvBffLPay2IaL-Y",
      },
    },
    {
      title: "WeatherCast",
      techStack: ["HTML", "Node.js", "JavaScript","Vue.js"],
      description:
        "WeatherCast is an intuitive weather forecasting application that uses the OpenWeatherMap API to deliver accurate, up-to-date weather predictions and a comprehensive 5-day forecast tailored to users' locations, helping them plan with confidence",
    
      link: {
        label: "video link",
        href: "https://drive.google.com/file/d/1lpEWSoe5FEPtQCwkjJaHdPdjE5A74YvJ/view",
      },
    },
    {
      title: "FarmersMarket",
      techStack: ["Flutter", "Android Studio", "Firebase"],
      description:
        "Built using Flutter and supported by Firebase for real-time data storage and retrieval, it offers an updated inventory of produce, facilitating informed decisions and transactions for both buyers and sellers.",
  
      link: {
        label: "code link",
        href: "https://drive.google.com/drive/folders/1OcRZQ78cWp-_trzliSRtQTk4b7-lKd6M",
      },
    },
    {
      title: "DevInsights",
      techStack: [
        "Php",
        "Python Web Framework",
        "Django",
        "REST-API",
      ],
      description:
        "DevInsights, developed with the Django web framework, extracts and visualizes critical data from the GitHub REST-API for developers. It measures software engineers' performance using key metrics, facilitating informed decision-making for project managers and stakeholders.",
 
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Acme Therapuetics",
      techStack: [
        "Freelance",
      ],
      description:
        "Made and maintained the website for Acme Therapeutics.(deprecated)",

      link: {
        label: "evercast.us",
        href: "http://www.atipl.in/?i=1",
      },
    },
    
  ],
} as const;
