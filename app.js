 function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'

    cartão.innerHTML = `
    <div class="cartão__conteudo">
            <h3>${categoria}</h3>
          <div class="cartão__conteudo__pergunta">
            <p>${resposta}</p>
          </div>
          <div class="cartão__conteudo__resposta">
            <p>${pergunta}</p>          
          </div>
        </div>
    `
    let respostaEstaVisisvel = false
    function viraCartao(){
        respostaEstaVisisvel = !respostaEstaVisisvel
        cartão.classList.toggle('active',respostaEstaVisisvel)
    }
    cartão.addEventListener('click',viraCartao)
    container.appendChild(cartão)
}