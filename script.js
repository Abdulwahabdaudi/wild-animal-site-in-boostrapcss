



const btns = document.querySelectorAll(".s-buttons a");
const shows = document.querySelector(".row");

window.addEventListener("DOMContentLoaded", () => {
    fetch("./animals.json")
        .then(response => response.json()
        ).then(data => animals(data)).catch(console.error("FILE Not found"));

    function animals(animalArray) {
        if (animalArray.length > 0) {
            show(animalArray);
            btnAction(btns)
        } else {
            shows.innerHTML = `<P style= "text-align :center;"> No Animal in the list </p>`
        }

        //FUNCTION FOR SHOWING ANIMAL ARRAY
        function show(animalArray) {

            let showAnimals = animalArray.map((item) => {
                return `<div class="col" data-animal= "${item.id}">
                 <div class="card">
              <img src="${item.img}" alt="" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description} </div>
            </div>
           
          </div>`
            })
            shows.innerHTML = showAnimals.join("");

            storeAnimal(animalArray)

        }

        // FUNCTION STOREANIMALS
        function storeAnimal(animalArray) {
            const animalId = document.querySelectorAll(".col");
            animalId.forEach((animal) => {
                animal.addEventListener("click", (e) => {

                    const test = e.currentTarget.dataset.animal;
                    const selectedAnimal = animalArray.filter((animal) => {
                        if (animal.id == test) {
                            return animal;
                        }

                    });

                    localStorage.setItem("selectedAnimal", JSON.stringify(selectedAnimal));

                    window.location.href = "animal.html";
                })

            })
        }




        //FUNCTION FOR BUTTON ACTION  
        function btnAction(btns) {
            btns.forEach((btn) => {
                if (btn.dataset.id == "all") {
                    btn.classList.add("active");
                }
                btn.addEventListener("click", (e) => {
                    const targetBtn = e.currentTarget.dataset.id;

                    btns.forEach((element) => {
                        const currentbtn = element.dataset.id;
                        element.classList.remove("active");
                        if (currentbtn == targetBtn) {
                            e.currentTarget.classList.add("active");
                        } else {
                            e.currentTarget.classList.add("active");
                        }
                    });

                    const newTypeArray = animalArray.filter((e) => {
                        if (e.type == targetBtn) {
                            return e;
                        }
                    })

                    if (targetBtn == "all") {
                        show(animalArray)

                    } else {
                        show(newTypeArray)
                    }

                })
            })
        }

    }

    // date
    const date = document.getElementById("date");
    date.innerHTML = new Date().getFullYear();


    const topLink = document.querySelector(".top-link");

    // scroll
    window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;

        if (scrollHeight > 500) {
            topLink.classList.add("show-link");
        } else {
            topLink.classList.remove("show-link");
        }
    });



});
