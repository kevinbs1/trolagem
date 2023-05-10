function iniciarMovimento() {
    var botao = document.getElementById("meuBotao");
    var larguraTela = window.innerWidth;
    var alturaTela = window.innerHeight;
    var posicaoX = 0;
    var posicaoY = 0;
    var velocidade = 20;
  
    setInterval(function() {
      posicaoX += velocidade;
      posicaoY += velocidade;
  
      if (posicaoX > larguraTela) {
        posicaoX = 0;
      }
      if (posicaoY > alturaTela) {
        posicaoY = 0;
      }
  
      botao.style.left = posicaoX + "px";
      botao.style.top = posicaoY + "px";
    }, 50);
  }
  