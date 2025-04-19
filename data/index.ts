export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./collab.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experienced in collaborating with global teams across diverse time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technical Proficiencies",
    description: "Never settling—always learning",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-auto object-contain",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Committed to continuous learning and excellence in software development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I'm currently exploring the Azure Devops, Angular and React",
    description: "Under the Hood",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Looking to kick off a new project? Let’s connect.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "./p1.svg",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./fm.svg"],
    link: "./ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "./p2.svg",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./stream.svg", "./c.svg"],
    link: ".ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "./p3.svg",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
    link: "./ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "./p4.svg",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg", "./gsap.svg"],
    link: "./ui.apple.com",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: ".Net Developer",
    company: "Smart Communications Inc.",
    desc: "Contributed to the development of a web-based platform utilizing ASP.NET, SQL, SSIS, and SOAP Web Services.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
    url: "https://smart.com.ph/",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "ATOS", 
    desc: "Designed and developed web applications and services using ASP.NET MVC, ASP.NET Core, and Cisco technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./programmer-thought.svg",
    url: "https://atos.net/", 
  },
  {
    id: 3,
    title: "Senior Application Developer",
    company: "WSP USA Solutions Inc.",
    desc: "Implemented both backend and frontend functionalities using ASP.NET Core 6 (C#), ReactJS, AngularJS, RESTful APIs, Azure Function, LogicApp and SQL.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
    url: "https://www.wsp.com/",
  },
  {
    id: 4,
    title: "Senior Analyst Programmer",
    company: "EssilorLuxottica",
    desc: "Designed, developed, and maintained an invoicing application using ASP.NET MVC 5, WebAPI, SQL Server, and BizTalk for seamless data integration and transactional processing.",
    className: "md:col-span-2",
    thumbnail: "./male-programmer.svg",
    url: "https://www.essilorluxottica.com/",
  },
];

export const socialMedia = [
   {
    id: "github",
    img: "./github.svg", // adjust this path as needed
    url: "https://github.com/users/rodelsuvalalaguna/projects/", // <-- your GitHub
  },
  {
    id: "linkedin",
    img: "./linkedin.svg", // adjust this path as needed
    url: "https://www.linkedin.com/in/rodel-lalaguna-62b9076b/", // <-- your LinkedIn
  },
   {
    id: "Facebook",
    img: "./facebook.svg", // adjust this path as needed
    url: "https://www.facebook.com/profile.php?id=61569021011185", // <-- your facebook
  }
];
