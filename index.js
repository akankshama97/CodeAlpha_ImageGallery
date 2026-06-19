const cards = document.querySelectorAll('.gallery-warpper .gallery-item img');
const overlay = document.getElementById('image-viewer');
const popupImg = document.getElementById('popup-img');

// Ek variable jo yaad rakhega ki abhi kaunsi photo khuli hai
let currentIndex = 0;

// Har ek image par click event lagana Taaki bada photo khule
cards.forEach((img, index) => {
    img.addEventListener('click', function() {
        overlay.style.display = 'flex'; // Aapke CSS me .popup display: flex hai
        popupImg.src = img.src;        // Clicked image ka src popup me daala
        currentIndex = index;          // Photo ka number save kiya
    });
});

//  Popup ko band karne ka function 
function closePopup() {
    overlay.style.display = 'none';    // Popup ko chhupa diya
}

// Agli photo par jaane ka function (Next Button)
function goNext() {
    currentIndex = currentIndex + 1;   // Ek number aage badhe
    
    // Agar aakhri photo ke baad click karein, toh wapas pehli photo (0) par aa jao
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
    
    popupImg.src = cards[currentIndex].src; // Badi image change kari
}

// Pichli photo par jaane ka function (Prev Button)
function goPrev() {
    currentIndex = currentIndex - 1;   // Ek number peeche gaye
    
    // Agar pehli photo se peeche jayein, toh sabse aakhri photo par chale jao
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }
    
    popupImg.src = cards[currentIndex].src; // Badi image change kari
}