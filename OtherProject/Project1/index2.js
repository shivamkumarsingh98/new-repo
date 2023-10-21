// let valueDisplay = document.getElementsByClassName('num');
// let interval = 5000;

// valueDisplay.forEach((valueDisplays) => {
    
//     let endValu = parseInt(valueDisplays.getAttribute("data-val"));
//     console.log(endValu)
//     let duresion = Math.floor(interval / endValu)
//     let conter = setTimeout(function() {
//         spand += 1
//         valueDisplays.textContent = spand;
//     })
// });

let valueDisplay = document.getElementsByClassName('num');
let interval = 5000;

// Convert HTMLCollection to array
let valueDisplaysArray = Array.from(valueDisplay);

valueDisplaysArray.forEach((valueDisplays) => {
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = 1;
    
    let intervalId = setInterval(function() {
        if (counter <= endValue) {
            valueDisplays.textContent = counter;
            counter++;
        } else {
            clearInterval(intervalId);
        }
    }, duration);
});
