/* comentário com várias linhas 
let nome_variavel_let // só dá pra chamar a variável dentro do 
var nome_variavel_var // usa onde quiser
const nome_variavel // const: variável fixa. Ex.: Pi (não altera execução do programa)

// Var
i (true){
    var x = 10
}
console.log(x) // imprimir uma informação (escreval)

//let

if(true){
    let y = 20;
    console.log(y)
}
console.log(y); */

let canvas = document.getElementById("snake");
let contexto = canvas.getContext("2d"); // contexto do jogo
let caxa = 32;
let cobra = []; // vetor: atribui vários valores dentro, diferente das variáveis

cobra[0] = {
    x: 8 * caixa,
    y: 8 * caixa
}