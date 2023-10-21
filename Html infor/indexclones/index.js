let jokeContainer = document.getElementById('joke')
let button = document.querySelector('.btn')
const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=YourApiKey"


let getjoke= () => {
 fetch(url)
.then(data => data.json())
.then(item => {
    jokeContainer.textContent =`${item.joke}`
})

}
button.addEventListener("click", getjoke);
getjoke();