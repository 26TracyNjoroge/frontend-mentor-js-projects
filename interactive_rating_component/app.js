const inputWrapper = document.querySelector('.rating-wrapper');
const submitButton = document.querySelector('button');
const ratingElement = document.querySelector('.rating-state');
const thankyouElement = document.querySelector('.thank-you-state');
const chosenRate = document.querySelector('.chosen-rate');

let selectedRating = "";

inputWrapper.addEventListener("change", (e) => {
    const clickedRadioId = e.target.id;
    const clickedLabel = document.querySelector(`label[for=${clickedRadioId}]`);
    const labelEl = document.querySelectorAll('.rates');

    selectedRating = e.target.value;

    labelEl.forEach((label) => {
        label.classList.remove('checked-radio');
    })
    
    clickedLabel.classList.add('checked-radio')
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    ratingElement.style.display = 'none';
    thankyouElement.style.display = 'block';

    chosenRate.textContent = `${selectedRating}`
})