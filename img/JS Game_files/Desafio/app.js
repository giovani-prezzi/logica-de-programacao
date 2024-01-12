let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificaConsole() {
    console.log('O botão foi clicado');
}

function verificaAlerta() {
    alert('Eu amo JS');
}

function perguntaCidade() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificaSoma() {
    let num1 = parseInt(prompt('Diga o primeiro número'));
    let num2 = parseInt(prompt('Diga o segundo número'));
    alert(num1 + num2);
}