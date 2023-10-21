let button = document.querySelectorAll('.button');
let body = document.querySelector("body");

button.forEach(function(button){
    console.log(button)
    button.addEventListener("click", function(e){
        console.log(e)
        console.log(e.target)

        if(e.target.id === 'green') {
            body.style.backgroundColor = 'green'
        }
        if(e.target.id === 'white') {
            body.style.backgroundColor = 'white'
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }
        
    })
});