export const projectsData = [
  {
    title: "Portfolio",
    technologies: "React, Tailwind CSS",
    description:
      "Since I currently don't have many representable projects created with React, I've decided to include my portfolio as one of them.",
    coverImage: new URL("./Portfolio/img_1.png", import.meta.url).href,
    vercel: "https://airidas-smitas.vercel.app/",
    github: "https://github.com/SmitasCodes/portfolio_v2",
    images: [
      new URL("./Portfolio/img_1.png", import.meta.url).href,
      new URL("./Portfolio/img_2.png", import.meta.url).href,
      new URL("./Portfolio/img_3.png", import.meta.url).href,
    ],
  },
  {
    title: "Events Page",
    technologies: "React, Bootstrap, CSS",
    description:
      "This is a school group project where we were tasked with creating a website where users can browse events and save them. There are two roles: admin and user. Every user can post events, but only admins can approve them. I was specifically tasked with developing most of the backend, implementing authentication on the page, setting up event filtering, and creating an admin panel. Although this page has numerous bugs, and I'm not particularly satisfied with its performance ,but since I put a lot of work into it, I decided to include it as one of my projects. ",
    coverImage: new URL("./Events/img_1.png", import.meta.url).href,
    vercel: "https://events-frontend-project.vercel.app/",
    github: "https://linkmix.co/18368871",
    images: [
      new URL("./Events/img_1.png", import.meta.url).href,
      new URL("./Events/img_2.png", import.meta.url).href,
      new URL("./Events/img_3.png", import.meta.url).href,
      new URL("./Events/img_4.png", import.meta.url).href,
      new URL("./Events/img_5.png", import.meta.url).href,
    ],
  },
  {
    title: "Quiz",
    technologies: "Javascript, Bootstrap",
    description:
      "This was a school group project in which we were assigned the task of creating a quiz using a provided array of questions. I served as the team lead for this project and was responsible for overall bug fixing, ensuring the questions appeared correctly, and making sure that the bubbles below the questions changed dynamically based on the selected answers.",
    coverImage: new URL("./Quiz/img_2.png", import.meta.url).href,
    vercel: "https://quiz-app-teal-kappa.vercel.app/",
    github: "https://github.com/SmitasCodes/quiz_app",
    images: [
      new URL("./Quiz/img_1.png", import.meta.url).href,
      new URL("./Quiz/img_2.png", import.meta.url).href,
      new URL("./Quiz/img_3.png", import.meta.url).href,
    ],
  },
  {
    title: "All Countries",
    technologies: "Javascript",
    description:
      "It began as a fun school project where we were assigned the task of looping through an array of objects representing all the countries in the world. The goal was to display these countries in cards and provide the ability to filter them by continent. As time went on, I decided to enhance the project further. I introduced SVG manipulation, allowing users to clearly visualize the continent they've clicked on.",
    coverImage: new URL("./AllCountries/img_1.png", import.meta.url).href,
    vercel: "https://all-countries-project.vercel.app/",
    github: "https://github.com/SmitasCodes/All_Countries_Project",
    images: [
      new URL("./AllCountries/img_1.png", import.meta.url).href,
      new URL("./AllCountries/img_2.png", import.meta.url).href,
    ],
  },
];
