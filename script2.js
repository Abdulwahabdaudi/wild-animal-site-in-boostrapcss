
const item = JSON.parse(localStorage.getItem("selectedAnimal"))
const newItem = item[0]   

window.addEventListener("DOMContentLoaded", ()=>{
const singleAnimal = document.querySelector(".animalpage")
let showAnimal =  `<div ">
         <div class="card">
      <img src="${newItem.img}" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${newItem.name}</h5>
        <p class="card-text">${newItem.description} </div>
    </div>
   
  </div>`

singleAnimal.innerHTML = showAnimal;

})
