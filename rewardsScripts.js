document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.badge');
    const badgeInfo = document.querySelector('.badge-info');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    const badgeName = document.getElementById('badge-name');
    const badgeDescription = document.getElementById('badge-description');

    badges.forEach(badge => {
        badge.addEventListener('click', () => {
            badgeName.textContent = badge.dataset.name;
            badgeDescription.textContent = badge.dataset.description;
            badgeInfo.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', closeBadgeInfo);
    overlay.addEventListener('click', closeBadgeInfo);

    function closeBadgeInfo() {
        badgeInfo.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Animate stat counters
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    animateValue("level", 0, 5, 1000);
    animateValue("courses", 0, 3, 1000);
    animateValue("points", 0, 1500, 2000);
});
document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById("burger-icon");
    const sidebar = document.getElementById("sidebar");
    
    // Toggle sidebar open/close
    burgerIcon.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    
        // If the sidebar is open, push content to the right
        if (sidebar.classList.contains("open")) {
        document.querySelector(".main-content").style.marginLeft = "250px";
        } else {
        // Otherwise, return content to the original position
        document.querySelector(".main-content").style.marginLeft = "0";
        }
    });
    });
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('sidebar-open');
    });