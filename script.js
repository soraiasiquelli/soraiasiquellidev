//Definição variaveis


var btnVerMais = document.getElementsByClassName("btnVerMais")
var card_projeto = document.getElementById("card_projeto")
var divSkill = document.getElementById("skillPython")
var divDescSkills = document.querySelector(".descricao-tecnologias")

var boxSkills = document.querySelectorAll(".skill")

boxSkills.forEach(box => {
    box.addEventListener("mouseover", ()=> {

    divDescSkills.innerHTML = ""
    
    var descSkill = document.createElement("p")
    descSkill.innerText = box.dataset.msg
    descSkill.classList.add("descSkill")


    divDescSkills.appendChild(descSkill)
})
})



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


// Funcionalidade dos filtros de projetos
document.addEventListener('DOMContentLoaded', () => {
    const filtros = document.querySelectorAll('.filtro_btn');
    const cards = document.querySelectorAll('.card');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            filtros.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe active ao botão clicado
            filtro.classList.add('active');

            // Pega o filtro selecionado
            const filterValue = filtro.getAttribute('data-filter');

            // Filtra os cards
            cards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filterValue) {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});





