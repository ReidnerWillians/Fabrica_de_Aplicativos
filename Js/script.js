
var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    console.log(peso);
    console.log(altura);

    imc = peso / (altura * altura);
    resultado = document.getElementById("resultado");

    
    if(imc < 17){        
        resultado.innerHTML = "Seu resultado foi: " + imc + "<br> Muito abaixo do peso";
    }    
}