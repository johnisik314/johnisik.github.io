function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");  
}

function openLinkedInProfile(){
    window.open('https://www.linkedin.com/in/john-isik/', '_blank');
}
function openGithubProfile(){
    window.open('https://github.com/johnisik314', '_blank');
}
function openInstaProfile(){
    window.open('https://www.instagram.com/johnisik314/', '_blank');
}
function sendEmail(){
    window.open('mailto:johnisik314@gmail.com', '_blank');
}
let currentIndex = 0;

function moveSlide(direction) {
    const projects = document.querySelector(".projects_container");
    const projectWidth = projects.querySelector(".project-container").offsetWidth + 20; // Includes gap
    const totalProjects = projects.children.length;
    const visibleProjects = 3;

    // Calculate the max index
    const maxIndex = totalProjects - visibleProjects;

    // Update current index
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    // Apply transformation
    projects.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
}
