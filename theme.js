function background_shading() {
    const [red, green, blue] = [24, 24, 24]
    const background = document.querySelector('.scroll-container')

    const [fred, fgreen, fblue] = [138, 89, 187]

    let r = 0
    let g = 0
    let b = 0

    console.log(r)

    window.addEventListener('scroll', () => {
        let y = 1 + window.scrollY
        y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
        if ([red, green, blue] != [fred, fgreen, fgreen]) {


            console.log(red+Math.round(y))
            if (red+Math.round(y) != fred) {
                r = red + Math.round(y)
            } 

            if (g != fgreen) {
                g = green + Math.round(y)
            }

            if (b != fblue) {
                b = blue + Math.round(y)
            }
            console.log(r + " # " + b + " # " + g)
            background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        }
    })
}