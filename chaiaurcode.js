const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];
let wordIdx=0;
let charIdx=0;
let isDeleting=false;


const typeEffect=()=>{
    const currentWord = words[wordIdx];
    const currentChar = currentWord.substring(0, charIdx);
    typedTextSpan.textContent = currentChar;
    typedTextSpan.classList.add("stop-blinking");

    if(!isDeleting && charIdx<currentWord.length){
        charIdx++;
        setTimeout(typeEffect,250)
    }
    else if (isDeleting && charIdx > 0) {
        // If condition is true, remove the previous character
        charIdx--;
        setTimeout(typeEffect, 200);
    } 
    else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        typedTextSpan.classList.remove("stop-blinking");
        wordIdx = !isDeleting ? (wordIdx + 1) % words.length : wordIdx;
        setTimeout(typeEffect, 600);
    }
}

typeEffect()