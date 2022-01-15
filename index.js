//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,selection,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const input =document.querySelector(".todoimput")
const buton =document.querySelector(".totobuton")
const list=document.querySelector(".liste")
buton.addEventListener("click",crrerelements)



function crrerelements(e){
    e.preventDefault()
    console.log("salut");
    const div = document.createElement("div")
    div.classList.add("divconte")
    const listeli = document.createElement("li")
    listeli.innerText='jojo'
    listeli.classList.add("todo-items")
    div.appendChild(listeli)
    ///////ajout du bouton //////////////
    const butoncheik=document.createElement("button")
    butoncheik.innerHTML='<i class="fas fa-check"><i>'
    butoncheik.classList.add("complet-btn")
    div.appendChild(butoncheik)
    ///////ajout du bouton //////////////
    const butondelete=document.createElement("button")
    butondelete.innerHTML='<i class="fas fa-trash"><i>'
    butondelete.classList.add("complet-sup")
    div.appendChild(butondelete)
    ///////ajout e la lisre////
    list.appendChild(div)
}