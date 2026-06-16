const input = document.getElementById("input")
const mostrar = document.getElementById("mostrar")
const salvar = document.getElementById("salvar")
const deletar = document.getElementById("deletar")
const display = document.getElementById("display")

function mostrarDados(){
    display.innerHTML = localStorage.getItem("nome")
}

function salvarDados(){
    let dado = input.value
    localStorage.setItem("nome", dado)
    input.value = ''
}

function deletarDados(){
    localStorage.removeItem("nome")
}

mostrar.addEventListener("click", mostrarDados)
salvar.addEventListener("click", salvarDados)
deletar.addEventListener("click", deletarDados)