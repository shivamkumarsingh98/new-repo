let title = document.getElementById('title');
let Name = document.getElementById('nameField');
let signinBtn = document.getElementById('signinBtn');
let singup = document.getElementById('signupBtn');

singup.onclick = () => {
    title.innerHTML = "sing up";
    Name.style.display = "block";
}

signinBtn.onclick = () => {
    title.innerHTML = "Login";
    Name.style.display = "none"
}