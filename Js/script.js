
var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);

    if(imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + "<br> Muito abaixo do peso"
    }
}