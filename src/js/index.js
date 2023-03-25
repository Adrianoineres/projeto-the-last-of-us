







// passo 1 - dar um jeito de pegar o elemnto HTML dos botões //
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuario no botão //

botoesCarrosel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    // passo 3 - desmarcar o botão selecionado anterior //

    desativarBotaoSelecionado();

    // passo 4 - marcar o botão clicado como se estivesse selecionado //

    selecionarBotaoCarrosel(botao);

    // passo 5 esconder a imagem ativa  de fundo  //

    escoderImagemAtiva();

    // passo 6 fazer aparecer a imagem de fundo correspondente ao botão clicado //

     mostrarImagemDeFundo(indice);



  })
})



function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add('selecionado');
}

function escoderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

