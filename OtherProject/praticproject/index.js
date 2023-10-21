let btn = document.getElementById("btn")
let number = document.getElementById("number")
let length = document.getElementById("length")
let lowercase = document.getElementById("lowercase")
let upporcase = document.getElementById("upporcase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");






btn.addEventListener('click', function(er){
   
    number.value = generatPassword()
})

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

let uppercharts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercharts = "abcdefghijklmnopqrstuvwxyz"
let allsymbol = "!@$%&*"
let allnumberse = "0123456789"


function generatPassword(){
    let genratpass = "";
    let allcharts = "";

    allcharts += lowercase.checked ? lowercharts : "";
    allcharts += upporcase.checked ? uppercharts : "";
    allcharts += symbols.checked ?  allsymbol : "";
    allcharts += numbers.checked ? allnumberse : "";
    console.log(allcharts)

    if(allcharts == "" || allcharts.length == 0){
        return genratpass;
    }

    for(let i=1; i<=inputSlider.value; i++){
        genratpass  += allcharts.charAt(Math.floor(Math.random() * allcharts.length ))
    }


    return genratpass;
}





