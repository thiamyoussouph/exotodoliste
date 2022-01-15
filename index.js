//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,selection,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const input =document.querySelector(".todoimput")
const buton =document.querySelector(".totobuton")
const list=document.querySelector(".liste")
//////ecouteur ////////////////
buton.addEventListener("click",crrerelements)
list.addEventListener("click",delcheck)



function crrerelements(e){
    e.preventDefault()
    console.log("salut");
    const div = document.createElement("div")
    div.classList.add("divconte")
    const listeli = document.createElement("li")
    listeli.innerText=input.value
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
    input.value=""
}

function delcheck(e) {
   const item=e.target
   ///supression////
   if (item.classList[0]==="complet-sup") {
     const doto= item.parentElement
      doto.classList.add("fail")
    doto.addEventListener("transitionend",function(){
        item.parentNode.remove()
    })
     
   }
///////checkmarque//////
if (item.classList[0]==="complet-btn") {
    item.parentNode.classList.toggle("complet")
  }

}
///const todo=item.parentElement
//todo.classList.toggle("complet")