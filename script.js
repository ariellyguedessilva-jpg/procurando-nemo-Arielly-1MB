const avanca = document. querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventlistener('click',function(){
      const atual = document.querySelector('.ativa');
      const proximoPasso = 'passo-' + this.getAtribute('data-proximo');

       atual.classList.remove('ativo');
       document.getElementById(proximoPasso.classList.add('ativo');
    })
})