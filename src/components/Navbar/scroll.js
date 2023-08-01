export function handleScroll() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  window.onscroll = () => {
    const buffer = 65;
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop -buffer;
      let height = sec.offsetHeight + buffer * 2;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("nav ul li a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
}
