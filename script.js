const formMsg = document.getElementById('themsg');
const myForm = document.getElementById('myform');
const password = document.getElementById('pass');
const mail = document.getElementById('email');
const showPass = document.getElementById('show');
const btn = document.getElementById('btn');

const users = [{
    user: 'mohamed',
    pass: '1234',
},
{
    user: 'salah',
    pass: '123',
}
]

myForm.addEventListener('submit', formCheck);

/* let user = mail.value;
let thePass = password.value; */
function formCheck(e) {
    e.preventDefault()
    console.log("mail.value:", mail.value);
    console.log("password.value:", password.value);

    if(mail.value == "" ) {

        e.preventDefault()

        formMsg.textContent = "Email is required"
        formMsg.style.color = "crimson"
        formMsg.style.fontSize = "1.5rem"

    } else if(password.value == "" ) {

        e.preventDefault()

        formMsg.textContent = "Password is required"
        formMsg.style.color = "crimson"
        formMsg.style.fontSize = "1.5rem"
    }
     else {
        formMsg.textContent = "Thank you!"
        formMsg.style.color = "var(--primary-color)"
    }
}
