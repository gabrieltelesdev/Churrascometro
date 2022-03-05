// Carne - 400 gr por pessoa   + de 6 horas - 650 gr
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml 
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
// Homens valem 2x mais que as mulheres
// Crianças valem por 0.5 de mulheress

let inputHomem = document.getElementById("homem");
let inputMulher = document.getElementById("mulher")
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resuLtado = document.getElementById("resultado");

function calCular() {
    let homem = inputHomem.value;
    let mulher = inputMulher.value;
    let crianca = inputCrianca.value;
    let tempoDuracao = inputDuracao.value;

    if (homem === "" && crianca === "" && mulher === "" || homem < 0 || crianca < 0 || mulher < 0) {
        alert("Valor inválido, digite um valor!")
    } else {
        let qtdCarne = mulher * carnePP(tempoDuracao) + (homem * carnePP(tempoDuracao) * 2) + (crianca * carnePP(tempoDuracao) / 2);
        let qtdCerveja = homem * cervejaPP(tempoDuracao) + mulher * cervejaPP(tempoDuracao);
        let qtdBebidas = mulher * bebidasPP(tempoDuracao) + homem * bebidasPP(tempoDuracao) + (crianca * bebidasPP(tempoDuracao) / 2);

        resuLtado.style.color = "white";
        resuLtado.style.fontWeight = "700"
        resuLtado.style.fontSize = "24px"
        resuLtado.style.backgroundColor = "#201d1c38"
        resuLtado.style.padding = "10px"
        resuLtado.style.borderRadius = "10px"
        resuLtado.innerHTML = `${qtdCarne / 1000} Kg de Carne </br>`
        resuLtado.innerHTML += `${Math.ceil(qtdCerveja / 350)} latas de Cerveja </br>`
        resuLtado.innerHTML += `${Math.ceil(qtdBebidas / 2000)} garrafas de refrigerante`
    }


    function carnePP(tempoDuracao) {
        if(tempoDuracao >= 6) {
            return 650;
        } else {
            return 400;  
        }
    }

    function cervejaPP(tempoDuracao) {
        if(tempoDuracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
    }

    function bebidasPP(tempoDuracao) {
        if(tempoDuracao >= 6) {
            return 1500;
        } else {
            return 1000;  
        }
    }
}
