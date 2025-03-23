let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add("active")
            })
        }
    })
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")

}

document.addEventListener("keydown", function (event) {
    // Blokir Ctrl+U, F12, Ctrl+Shift+I, Ctrl+Shift+J, dan Ctrl+Shift+C
    if (event.ctrlKey && (event.key === "u" || event.key === "U" || 
        event.key === "i" || event.key === "I" || 
        event.key === "j" || event.key === "J" || 
        event.key === "c" || event.key === "C") || event.key === "F12") {
        event.preventDefault();
    }
});

// Mencegah klik kanan
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
