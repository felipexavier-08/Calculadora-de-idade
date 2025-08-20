const input = document.querySelector("#inputr")
const result =  document.getElementById("resultado")
let idade_resultado = 0
let anoatual = new Date().getFullYear()

function idade(){

    if(input.value >1925 && input.value < anoatual && !isNaN(input.value)){

        idade_resultado = anoatual-input.value
        result.textContent = idade_resultado

    }
    else{

        result.textContent = "Por favor insira um ano válido"

    }

}
        