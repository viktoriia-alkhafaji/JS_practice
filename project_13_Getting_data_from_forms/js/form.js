let select = document.querySelector('#select-1');

select.onchange = function () {
    console.log(select.value);
}

let radioButtons = document.querySelectorAll('input[name=radio-1]');
console.log(radioButtons.length);

let sendForm = document.querySelector('#send-form');

sendForm.onclick = (event)=> {
    event.preventDefault();
    console.log('work');
}