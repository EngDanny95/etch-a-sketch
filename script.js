const body = document.querySelector("body")
let container = document.querySelector("div")
let clickable = document.createElement("button")
body.insertBefore(clickable, container)
clickable.textContent = "Grid size"

clickable.addEventListener("click", () => {
    let grid = prompt("Enter the number of squares per each side of the grid between 1 and 100");
    while (grid > 100 || grid == 0 || grid < 0 || isNaN(grid) || grid % 1) {
        // == includes an empty string as well as zero
        // < & == are used instead of <= 0 operator because <= converts non zero
        // value to zero including null which is what the cancel button value is
        // Nan checks if non numberic value is entered in the prompt
        // % makes sure non decimals values are entered
        alert("wrong input")
        grid = prompt("Enter the number of squares per each side of the grid between 1 and 100");
    }
    let factor = (1 / grid);
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
    for (let i = 1; i <= grid; i++) {
        for (let j = 1; j <= grid; j++) {
            let divs = document.createElement("div")
            divs.style.setProperty('--x', factor) //modify the css variable since
            // js variable arthmatic is not possible in css property snippet
            let num = 100
            divs.addEventListener("mouseover", () => {
                let rjs = Math.floor(Math.random() * 256) // red
                let gjs = Math.floor(Math.random() * 256) // green
                let bjs = Math.floor(Math.random() * 256) // blue
                if (num == 0)
                    opacityjs = num + "%"

                else{
                    num = num - 10
                    opacityjs = num + "%"
                }
                divs.style.setProperty('--rcss', rjs)
                divs.style.setProperty('--gcss', gjs)
                divs.style.setProperty('--bcss', bjs)
                divs.style.setProperty('--opacitycss', opacityjs)

                divs.style.backgroundColor = "color-mix(in sRGB, rgb(var(--rcss),var(--gcss),var(--bcss)) var(--opacitycss), black)"

            })
            container.appendChild(divs)
        }
    }
})