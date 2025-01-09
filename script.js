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

function moveCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const projects = document.querySelectorAll(".project-box");
    const projectWidth = projects[0].offsetWidth + 15; // Includes gap
    const totalProjects = projects.length;

    // Update current index with wrap-around
    currentIndex = (currentIndex + direction + totalProjects) % totalProjects;

    // Calculate the new transform value
    const transformValue = -(currentIndex * projectWidth);
    carousel.style.transform = `translateX(${transformValue}px)`;
}

