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
