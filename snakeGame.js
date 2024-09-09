const board = document.querySelector('.board');
        const player1 = document.getElementById('player1');
        const player2 = document.getElementById('player2');
        const rollDiceButton = document.getElementById('rollDice');
        const currentPlayerDisplay = document.getElementById('currentPlayer');
        const diceResultDisplay = document.getElementById('diceResult');
        const playerPositionsDisplay = document.getElementById('playerPositions');
        const questionModal = document.getElementById('question-modal');
        const questionDisplay = document.getElementById('question');
        const answerInput = document.getElementById('answer');
        const submitAnswerButton = document.getElementById('submitAnswer');

        const boardSize = 10;
        const cellSize = 500 / boardSize;

        let currentPlayer = 1;
        let players = [
            { position: 1, element: player1 },
            { position: 1, element: player2 }
        ];

        const snakes = {
            97: 78, 95: 56, 88: 24, 62: 18, 48: 26, 32: 10, 36: 6
        };

        const ladders = {
            1: 38, 4: 14, 8: 30, 21: 42, 28: 74, 50: 67, 71: 92, 88: 99
        };

        const constitutionQuestions = [
            { question: "Which Article of the Indian Constitution guarantees the Right to Equality?", answer: "14" },
            { question: "Under which Article is the Right to Freedom of Religion guaranteed?", answer: "25" },
            { question: "Which Fundamental Right prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?", answer: "Right to Equality" },
            { question: "How many Fundamental Duties are listed in the Indian Constitution?", answer: "11" },
            { question: "Which Article of the Indian Constitution enumerates the Fundamental Duties of citizens?", answer: "51A" }
        ];

        function updatePlayerPosition(player) {
            const row = Math.floor((player.position - 1) / boardSize);
            let col = (player.position - 1) % boardSize;
            if (row % 2 !== 0) {
                col = boardSize - 1 - col;
            }
            player.element.style.bottom = `${row * cellSize + 5}px`;
            player.element.style.left = `${col * cellSize + 5}px`;
        }

        function checkSnakesAndLadders(player) {
            if (snakes[player.position]) {
                showQuestion(player, snakes[player.position]);
            } else if (ladders[player.position]) {
                player.position = ladders[player.position];
                updatePlayerPosition(player);
            }
        }

        function showQuestion(player, newPosition) {
            const randomQuestion = constitutionQuestions[Math.floor(Math.random() * constitutionQuestions.length)];
            questionDisplay.textContent = randomQuestion.question;
            questionModal.style.display = 'block';

            submitAnswerButton.onclick = () => {
                if (answerInput.value.toLowerCase() === randomQuestion.answer.toLowerCase()) {
                    alert("Correct! You're safe.");
                } else {
                    alert(`Wrong answer. The correct answer was: ${randomQuestion.answer}`);
                    player.position = newPosition;
                    updatePlayerPosition(player);
                }
                questionModal.style.display = 'none';
                answerInput.value = '';
            };
        }

        function updateDisplay() {
            currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
            playerPositionsDisplay.innerHTML = `
                <div>Player 1 Position: ${players[0].position}</div>
                <div>Player 2 Position: ${players[1].position}</div>
            `;
        }

        rollDiceButton.addEventListener('click', () => {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            diceResultDisplay.textContent = `Dice Roll: ${diceRoll}`;

            const currentPlayerIndex = currentPlayer - 1;
            players[currentPlayerIndex].position = Math.min(players[currentPlayerIndex].position + diceRoll, 100);
            updatePlayerPosition(players[currentPlayerIndex]);
            checkSnakesAndLadders(players[currentPlayerIndex]);

            if (players[currentPlayerIndex].position === 100) {
                alert(`Player ${currentPlayer} wins!`);
                return;
            }

            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateDisplay();
        });

        updatePlayerPosition(players[0]);
        updatePlayerPosition(players[1]);
        updateDisplay();

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
        