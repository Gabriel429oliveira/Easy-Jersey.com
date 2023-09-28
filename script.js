// Pegar os valores do formulario

let modelo = document.querySelector("#modelo")

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campoMarca = document.querySelector("#marca")
const campoEstadoNovo = document.querySelector("#Estado_Novo")
const campoEstadoUsado = document.querySelector("#Estado_Usado")


campoQtde.addEventListener("change", calcular)
campoMarca.addEventListener("change", calcular)
campoEstadoNovo.addEventListener("chenge", calcular)
campoEstadoUsado.addEventListener("chenge", calcular)


//Calcular o preço
function calcular(){
   // 500 reais por par
   let qtde = campoQtde.value
   let valor = qtde * 600

   if(campoMarca.value == 1) valor += 800

   if(campoEstadoNovo.checked) valor += qtde * 50
   

   output.innerText = `R$ ${valor}` 

}

// mostrar Preço