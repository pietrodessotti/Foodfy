const modalOverlay = document.querySelector(".modal-overlay");
const receitas = document.querySelectorAll(".receita");

for (let receita of receitas ) {
    receita.addEventListener("click", function(){
        const receitaId = receita.getAttribute("id");
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `${receitaId}.html`

    })
}

// document.querySelector(".close-modal").addEventListener("click",function(){
//     modalOverlay.classList.remove("active")
// })

document.querySelector(".modal-overlay").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})