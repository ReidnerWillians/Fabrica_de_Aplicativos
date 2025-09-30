/*
Abaixo de 17 de imc - Muito abaixo do peso
Entre 17 e 18,49 - Abaixo do peso
Entre 18,5 e 24,99 - Peso normal
Entre 25 e 29,99 - Acima do peso
Entre 30 e 34,99 - Obesidade I
Entre 35 e 39,99 - Obesidade II (severa)
Acima de 40 - Obesidade III (mórbida)
*/


var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    console.log(peso);
    console.log(altura);
    
    imc = peso / (altura * altura);
    
    console.log(imc);

    if (imc < 17) {
        
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Obesidade II (severa)";
    } else if (imc >= 40) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br> Obesidade III (mórbida)";
    }
}