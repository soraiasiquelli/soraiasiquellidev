//Definição variaveis

var btnVerMais = document.getElementsByClassName("btnVerMais")
var card_projeto = document.getElementById("card_projeto")

var imagemProjetoTimeBooker = document.getElementById("imagemProjetoTimeBooker")


Array.from(btnVerMais).forEach((btn) => {
    
    btn.addEventListener("click", () => {

        //pega o elemento mais proximo
        const card = btn.closest(".card_projeto")
        const imagem = card.querySelector("img")
        const dataDescricao = btn.dataset.descricao

        let descProjeto = card.querySelector(".desc_projeto");
        

        //Se não existir ainda vai criar o paragrafo
        if(!descProjeto){
                descProjeto = document.createElement("p"); // Agora sim, criamos corretamente
                descProjeto.classList.add("desc_projeto");
                descProjeto.innerText = dataDescricao
                descProjeto.style.marginTop = "10px";
                descProjeto.style.color = "white"
                card.appendChild(descProjeto);
        }else {
            descProjeto.style.display = "none"
        }

          if (imagem) {
            if (imagem.style.display === "none") {
                imagem.style.display = "block"; // Mostra se estava escondida

            } else {
                imagem.style.display = "none"; // Esconde se estava visível
            }
        }

       


})

})



