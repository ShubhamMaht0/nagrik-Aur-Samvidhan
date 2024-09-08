document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matches = 0;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        hasFlippedCard = false;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        matches += 1;

        if (matches === cards.length / 2) {
            setTimeout(() => alert('Congratulations! You matched all the pairs!'), 500);
        }

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));
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