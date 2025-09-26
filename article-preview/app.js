const shareButton = document.querySelector(".socials-container");
const shareLinkCard = document.querySelector(".share-link-card");
const shareLinkMobile = document.querySelector(".share-link-mobile");
const authorComponent = document.querySelector(".author");
const responssiveMobile = window.matchMedia("(max-width: 768px)");

const toggleComponent = () => {
    if(responssiveMobile.matches) {
        if(shareLinkMobile.classList.contains('hidden')) {
            shareLinkMobile.classList.remove('hidden');
            authorComponent.style.display  = "none";
        }
    } else {
        if(shareLinkCard.classList.contains('hidden')) {
            shareLinkCard.classList.remove('hidden');
        } else {
            shareLinkCard.classList.add('hidden');
        }
    }
}

shareButton.addEventListener("click", toggleComponent)