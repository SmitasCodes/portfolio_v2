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
