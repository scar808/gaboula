document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for footer links
    document.querySelectorAll('footer a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active navbar link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Toggle dark mode
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = "🌙 Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px 15px";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.backgroundColor = "#333";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.borderRadius = "5px";

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
