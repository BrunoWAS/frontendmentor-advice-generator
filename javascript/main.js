const cardTitle = document.querySelector('.card__title');
const cardAdviceText = document.querySelector('.card__advice-text');
const diceButton = document.querySelector('.card__dice');

async function getAdvice() {
    try {
        diceButton.classList.add('card__dice--loading'); // Adiciona a animação
        const response = await axios.get('https://api.adviceslip.com/advice');
        const advice = response.data.slip;
        cardTitle.textContent = `Advice #${advice.id}`;
        cardAdviceText.textContent = `"${advice.advice}"`;
    } catch (error) {
        console.log(error);
        cardAdviceText.textContent = "Failed to load advice, please try again later.";
    } finally {
        diceButton.classList.remove('card__dice--loading'); // Remove a animação
    }
}

diceButton.addEventListener('click', getAdvice);
window.addEventListener('load', getAdvice);
