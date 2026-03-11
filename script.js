const adicionar = document.querySelector("#adicionar")

const form = document.querySelector("form")

const elementoLista = document.querySelector("ul")

const remover = document.querySelector(".remove")

// criando a parte pra enviar o 
form.onsubmit= (event)=>{

    event.preventDefault()

    const novaCompra ={
        adicionar:adicionar.value,
    }

    adicionarADD(novaCompra)
}


function adicionarADD(novaCompra) {
    try {
        const adicionandoItem =document.createElement("li")//criando a li
        adicionandoItem.classList.add("box")//adicionando a class de estilizacao

       

        const informacao =document.createElement("div")
        informacao.classList.add("item-novo")

        
        const chekbox =document.createElement("input")
        chekbox.type="checkbox"
        chekbox.classList.add("check")


        const nomeItem =document.createElement("span")
        nomeItem.textContent=novaCompra.adicionar


       const iconRemove =document.createElement("img")
       iconRemove.classList.add("remover-item")
       iconRemove.setAttribute("src","IMG/lixeira.svg")
       iconRemove.setAttribute("alt","lixeira")





        adicionandoItem.append(informacao,chekbox,nomeItem,iconRemove)

        elementoLista.append(adicionandoItem)
        
        
    } catch (error) {
        console.log(error)
        alert("nao foi possivel adicionar o item")
    }
}

// removendo item 
elementoLista.addEventListener("click",function(event){
    // Verifica se o clique foi no botão de remover
    if(event.target.classList.contains("remover-item")){
        // Pega o elemento pai mais próximo com a classe "box"
        const item = event.target.closest(".box" )


        item.remove() 
        
       
       alert ("tem certeza q quer remove o item?")// vai aparecer removido na tela 
    }
   
})
remover.addEventListener("click",function(evente){
    if(evente.target.classList.contains("remover-item")){

        const excluido = evente.target.closest(".remove")

       
    }
       
})








