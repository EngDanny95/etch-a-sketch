const container = document.querySelector("div")
let grid = prompt("Input the number of squares per side for the grid between 1 and 100");
let factor = (1 / grid);
if (grid<=100 && grid>=1){
for (let i = 1; i <= grid; i++) {
    for (let j = 1; j <= grid; j++) {
        const divs = document.createElement("div")
        divs.style.setProperty('--x', factor) //modify the css variable since
        // js variable arthmatic is not possible in css property snippet
        divs.addEventListener("mouseover", () => {
            divs.style.backgroundColor = "red";
        })
        container.appendChild(divs)
    }
}
}
else{
    alert("wrong input")
}