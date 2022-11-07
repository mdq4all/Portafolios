const btn = document.querySelector("button");
btn.addEventListener('click', validar);

function validar(event) {
    event.preventDefault();
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const text = document.querySelector('#textarea');
    const emptyInputs = [];

   if (name.value === "") 
        emptyInputs.push('Nombre');
    if (email.value === "") 
        emptyInputs.push('email');
    if (subject.value === "") 
        emptyInputs.push('Asunto');
    if (text.value === "") 
        emptyInputs.push('Texto');
    if(emptyInputs.length > 0)
       return alert (`Debes completar los siguientes campos: ${emptyInputs.join(" / ")}`);
    else window.location.href = "../../registro_exitoso.html"
}