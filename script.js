const formMsg = document.getElementById('themsg');
const myForm = document.getElementById('myform');
const showPass = document.getElementsByClassName('show-pass')[0];

const users = [
{
    userName: 'mohamed',
    pass: '1234',
},
{
    userName: 'salah',
    pass: '123',
},
{
    userName: 'ilyass',
    pass: 'user23'
},
{
    userName: 'khalid',
    pass: 'user23'
}
]

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const mail = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('pass').value;
    let isCorrect = false
    
    for(let user of users) {

        if(mail == '' && password == '') {
            formMsg.innerText = 'Please fill out the fields.'
            formMsg.style.color = 'crimson'
            formMsg.style.fontSize = '1.5rem'
            return
        
        } else if(mail == user.userName.toLowerCase() && password == user.pass) {
           isCorrect = true       
        }
    }
    if(isCorrect == false) {
        formMsg.innerText = 'Credentials are NOT correct'
        formMsg.style.color = 'crimson'
        formMsg.style.fontSize = '1.5rem'
    
    }else {
        formMsg.innerText = 'Credentials are correct'
        formMsg.style.color = 'var(--primary-color)'
    }
})

showPass.addEventListener('click',  ()=> {
    const password = document.getElementById('pass')
    if(password.type === 'password'){
        password.type = 'text'
    }else {
        password.type = 'password'
    }
})