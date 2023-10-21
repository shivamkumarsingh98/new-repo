const Qrtext = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatBtn = document.getElementById('generateBtn');
const downlordBtn = document.getElementById('downloadBtn');
const qrBody = document.querySelector('.qr-body')

let size = sizes.value 
generatBtn.addEventListener("click",(e)=> {
   e.preventDefault()
   if(Qrtext.value.length < 0){
   generateQRcode()


   }else {
    alert("Plse enter valid input")
   }
}
);
downlordBtn.addEventListener('click', () => {
    downlordBtn.innerHTML = qrBody.value
   generateQRcode()
})



sizes.addEventListener('change',(e)=>{
   size = e.target.value;
   generateQRcode();
})

function generateQRcode(){
   
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text: Qrtext.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    }); 
    Qrtext.value = "";

}