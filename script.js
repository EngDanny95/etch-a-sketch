const container = document.querySelector("div")
for (let i = 1; i < 17; i++){
    for (let j=1; j < 17; j++){
        const divs = document.createElement("div")
        divs.addEventListener("mouseover",()=>{
            divs.style.backgroundColor = "red";
        })
        container.appendChild(divs)
    }
}
