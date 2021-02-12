// get the value form select
let select = document.querySelector('#select-1');
select.onchange = function () {
    console.log(select.value);
}

// get value from radio buttons
let radioButtons = document.querySelectorAll('input[name="choice"]');
let btn = document.querySelector('#btn');
btn.onclick = () => {
    console.log('work');
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            console.log(radioButtons[i].value);
        }
    }
} 

let form1 = document.querySelector('#form-1');
let sendForm1 = document.querySelector('#send-form-1');
sendForm1.onclick = function (event) {
    event.preventDefault();
    console.log('button form 1 ');
    console.log(serialize(form1));
}

let form = document.querySelector('#form');
form.onsubmit = function (event) {
    event.preventDefault();
    console.log(222222);
    console.log(serialize(form));
}