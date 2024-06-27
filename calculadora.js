const valor = document.querySelector('#valor')
function clickbotoes(event) {
    let conteudobotao = event.target.textContent;
    valor.textContent += conteudobotao;
}

apagaTudo = () => valor.innerText = `` // arrow function de uma função normal clássica
apaga1= () => valor.textContent = valor.textContent.slice(0,-1);

function res(){

}

// julietee teste 3
// amanda teste 2