// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for dynamically adding projects
document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.getElementById("projects");

  // Example project data
  const projectsData = [
    { title: "Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "project1.jpg" },
    { title: "Project 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "project2.jpg" },
    // Add more project data as needed
  ];

  // Create project elements
  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    projectElement.appendChild(projectImage);
    projectElement.appendChild(projectTitle);
    projectElement.appendChild(projectDescription);

    projectsSection.querySelector(".container").appendChild(projectElement);
  });
});

// JavaScript for dynamically adding gallery images (example)
document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.getElementById("gallery");
});
// Example gallery images
