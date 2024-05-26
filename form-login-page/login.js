var currentTime = new Date().getHours();
        if (currentTime >= 6 && currentTime < 18) {
            // Pagi/Siang
            document.body.classList.add('day-mode');
        } else {
            // Malam
            document.body.classList.add('day-mode');
        }

        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();

            window.location.href = "content-page.html"; // Ganti dengan URL halaman konten Anda
});