let listaDeNumeroVazio = [];
let limiteMaximo = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1});
}

function exibirMensagemInicial() {
  exibirNaTela('h1','Jogo do Número Secreto');
  exibirNaTela('p','Adivinhe o número de 1 a 10');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirNaTela('h1', 'Você Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute < numeroSecreto) {
      exibirNaTela('h1','O número é maior !');
      exibirNaTela('p','Tente um valor maior');
    } else {
      exibirNaTela('h1','O número é menor');
      exibirNaTela('p','Não desista, eu sei que você consegue');
    }
    tentativas++;
    limparCampo();
  }
}

function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1);
  let quantidadeNaLista = listaDeNumeroVazio.length;
  if (quantidadeNaLista == limiteMaximo) {
    listaDeNumeroVazio = {};
  }
  if (listaDeNumeroVazio.includes(numeroEscolhido)) {
    return numeroAleatorio();
  } else {
    listaDeNumeroVazio.push(numeroEscolhido);
    console.log(listaDeNumeroVazio);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = numeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute('disabled', true);
}
