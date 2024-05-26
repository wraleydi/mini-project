var currentTime = new Date().getHours();
        if (currentTime >= 6 && currentTime < 18) {
            // Pagi/Siang
            document.body.classList.add('day-mode');
        } else {
            // Malam
            document.body.classList.add('night-mode');
        }

        document.getElementById("sign-in-form").addEventListener("submit", function(event) {
            event.preventDefault();
    
            window.location.href = "login_page.html"; // Ganti dengan URL halaman login Anda
});