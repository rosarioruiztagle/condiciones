// Parte 1//
const doodle = document.querySelector('#imagen');

doodle.addEventListener("click", () => {
    const bordeRojo = doodle.style.border === "2px solid red";

    if (bordeRojo) {
        doodle.style.border = "";
    } else {
        doodle.style.border = "2px solid red";
    }
});

// Parte 2//
const verificar = document.querySelector('#btn');

verificar.addEventListener("click", () => {
    const nro1 = document.querySelector('#numero1').value;
    const nro2 = document.querySelector('#numero2').value;
    const nro3 = document.querySelector('#numero3').value;

    const resultado = +nro1 + +nro2 + +nro3;

    if (resultado <= 10){
        const mensaje = document.querySelector('#mensaje');
        mensaje.innerHTML = ('Llevas') + (' ') + resultado + (' ') + ('Stickers')  ;
    } else { mensaje.innerHTML = 'Llevas demasiados Stickers';

    }

} )

// Parte 3//
const ingresar = document.querySelector('#ingresar')
const resultado = document.querySelector('#resultado');

ingresar.addEventListener('click', () => {
    const psw1 = document.querySelector('#password1').value;
    const psw2 = document.querySelector('#password2').value;
    const psw3 = document.querySelector('#password3').value;

    const total = psw1 + psw2 + psw3;

    
    if (total === '911') {
        resultado.innerHTML = 'Password 1 correcto';
    } else if (total === '714') {
        resultado.innerHTML = 'Password 2 es correcto';
    } else {
        resultado.innerHTML = 'Password incorrecto';
    }
});










