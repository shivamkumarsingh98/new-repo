let form = document.querySelector('form')
form.addEventListener('submit', function(e){
e.preventDefault()


let height = parseInt(document.querySelector('#height').value);
let weight = parseInt(document.querySelector('#weight').value);
let results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please inter valed number ${height}`;
}else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `plese inter valed number${weight}`;
}else{
    let bmi = (weight /((height*weight)/ 10000).toFixed(2))
    results.innerHTML = `<spain>${bmi}</spain>`
}
})
