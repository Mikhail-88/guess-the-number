'use strict'

startGame();

function startGame() {
    const secret = getRandomNumber();
    let message = 'Enter your number';

    while (true) {
        const guess = prompt(message);

        if (guess === null) {
            alert(`Game over, number was ${secret}`);
            break;
        }

        if (!isValid(guess)) {
            alert('Please, enter 4 unique digit number');
            continue;
        }

        if (guess === secret) {
            alert('You win!');
            break;
        }

        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < guess.length; i++) {
            const index = secret.indexOf(guess[i]);
            if (index === i) {
                bulls++;
            } else if (index > -1) {
                cows++;
            }
        }

        message = `${guess} - ${bulls} bulls, ${cows} cows \n${message}`;
    }

    function isValid(number) {
        const pattern = /^\d{4}$/;

        if (!pattern.test(number)) {
            return false;
        }

        return new Set(number).size === 4;
    }

    function getRandomNumber() {
        return '0123456789'
            .split('')
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .join('');
    }
}