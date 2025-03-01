window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }, 500);
    }, 1500); // Waktu animasi preloader (1.5 detik)
};