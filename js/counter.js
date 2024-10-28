const counter = document.querySelector('.counter');
const counterHTML = document.querySelector('.counter-output');
let count = 0;
  
const increment = () => {
    if (count < 7) {
        count++;
        counter.value = count;
        counter.setAttribute("value", count);
        counterHTML.innerHTML = count;
    }
};

const decrement = () => {
    if (count > 0) { 
        count--;
        counter.value = count;
        counter.setAttribute("value", count);
        counterHTML.innerHTML = count;
    }
};

