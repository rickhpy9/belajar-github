// script.js

// 1. Menampilkan tahun saat ini secara dinamis di footer
document.addEventListener("DOMContentLoaded", () => {
    const elemenTahun = document.getElementById("tahun");
    const tahunSekarang = new Date().getFullYear();
    elemenTahun.textContent = tahunSekarang;

    // Menambahkan sedikit interaksi pada kartu skill
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach(card => {
        card.addEventListener("click", () => {
            const skillName = card.querySelector("h3").innerText;
            alert(`Anda mengklik informasi tentang: ${skillName}`);
        });
    });
});

// 2. Efek Gulir Halus (Smooth Scrolling) untuk navigasi internal
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Mencegah lompatan standar browser
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // -70px agar tidak tertutup sticky navbar
                behavior: "smooth"
            });
        }
    });
});