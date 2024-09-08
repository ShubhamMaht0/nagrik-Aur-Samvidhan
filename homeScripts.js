// scripts.js

// Add functionality to toggle the dropdown for Games submenu
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (event) => {
        event.preventDefault();
        const submenu = dropdown.nextElementSibling;
        submenu.classList.toggle('open');
      });
    });
  
    // Show Games submenu on click
    document.querySelector('.menu-item.games').addEventListener('click', () => {
      const submenu = document.querySelector('.games-submenu');
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });
  // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const gamesMenu = document.getElementById('games-menu');
    const gamesPopup = document.getElementById('games-popup');
    const closePopup = document.getElementById('close-popup');
  
    // Show the popup menu when the Games menu item is clicked
    gamesMenu.addEventListener('click', () => {
      gamesPopup.style.display = 'block';
    });
  
    // Hide the popup menu when the Close button is clicked
    closePopup.addEventListener('click', () => {
      gamesPopup.style.display = 'none';
    });
  
    // Optional: Hide the popup if the user clicks outside of it
    window.addEventListener('click', (event) => {
      if (event.target === gamesPopup) {
        gamesPopup.style.display = 'none';
      }
    });
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
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

  
const menuToggle = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('main-content');

      menuToggle.addEventListener('click', () => {
          sidebar.classList.toggle('open');
          mainContent.classList.toggle('sidebar-open');
      });

