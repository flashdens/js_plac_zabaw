let i = 1
let kolkoZwyciestwa = 0
let remisy = 0
let krzyzykZwyciestwa = 0
const pole1 = document.getElementById("pole1")
const pole2 = document.getElementById("pole2")
const pole3 = document.getElementById("pole3")
const pole4 = document.getElementById("pole4")
const pole5 = document.getElementById("pole5")
const pole6 = document.getElementById("pole6")
const pole7 = document.getElementById("pole7")
const pole8 = document.getElementById("pole8")
const pole9 = document.getElementById("pole9")
const czyjRuch = document.getElementById("czyjRuchWskaznik")
const przyciskGra = document.getElementById("przyciskGra")
const kolkoWskaznik = document.getElementById("kolkoZwyciestwaWskaznik")
const krzyzykWskaznik = document.getElementById("krzyzykZwyciestwaWskaznik")
const remisWskaznik = document.getElementById("remisyWskaznik")




function startGry() {
    isAlive = true
    przyciskGra.innerText = "RESTARTUJ GRĘ"
    i = 1
    czyjRuch.innerText = "O"
    pole1.innerText = "-"
    pole2.innerText = "-"
    pole3.innerText = "-"
    pole4.innerText = "-"
    pole5.innerText = "-"
    pole6.innerText = "-"
    pole7.innerText = "-"
    pole8.innerText = "-"
    pole9.innerText = "-"
    pole1isAlive = true
    pole2isAlive = true
    pole3isAlive = true
    pole4isAlive = true
    pole5isAlive = true
    pole6isAlive = true
    pole7isAlive = true
    pole8isAlive = true
    pole9isAlive = true
}

przyciskGra.addEventListener("click", function () {
    startGry()
    czyjRuch.innerText = "O"
})

function czyNiepusta(arg1, arg2, arg3) {
    if (arg1.innerText != "-" && arg2.innerText != "-" && arg3.innerText != "-") {
        czyJednakowa()
    }


    function czyJednakowa() {
        if (arg1.innerText === arg2.innerText &&
            arg1.innerText === arg3.innerText &&
            arg2.innerText === arg3.innerText) {
            if (arg1.innerText === "X") {
                if (isAlive) {
                    alert("Krzyżyk wygrał!")
                    isAlive = false
                    krzyzykZwyciestwa++
                    krzyzykWskaznik.innerText = krzyzykZwyciestwa
                    przyciskGra.innerText = "NOWA GRA"
                }
            }
            else {
                if (isAlive) {
                    alert("Kółko wygrało!")
                    isAlive = false
                    kolkoZwyciestwa++
                    kolkoWskaznik.innerText = kolkoZwyciestwa
                    przyciskGra.innerText = "NOWA GRA"
                }
            }
        }
    }
}


function czyRemis() {
    if (isAlive) {
        if (pole1.innerText != "-" &&
            pole2.innerText != "-" &&
            pole3.innerText != "-" &&
            pole4.innerText != "-" &&
            pole5.innerText != "-" &&
            pole6.innerText != "-" &&
            pole7.innerText != "-" &&
            pole8.innerText != "-" &&
            pole9.innerText != "-") {
            alert("Remis!")
            isAlive = false
            remisy++
            remisWskaznik.innerText = remisy
            przyciskGra.innerText = "NOWA GRA"
        }
    }
}



pole1.addEventListener("click", function () {

    if (isAlive) {
        if (pole1isAlive) {
            if (i % 2 === 0) {
                pole1.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole1.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole1.innerText)
            console.log(i)
            czyNiepusta(pole1, pole2, pole3)
            czyNiepusta(pole1, pole4, pole7)
            czyNiepusta(pole1, pole5, pole9)
            czyRemis()
            pole1isAlive = false
        }
    }
})

pole2.addEventListener("click", function () {
    if (isAlive) {
        if (pole2isAlive) {
            if (i % 2 === 0) {
                pole2.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole2.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole2.innerText)
            console.log(i)
            czyNiepusta(pole1, pole2, pole3)
            czyNiepusta(pole2, pole5, pole8)
            czyRemis()
            pole2isAlive = false
        }
    }

})

pole3.addEventListener("click", function () {
    if (isAlive) {
        if (pole3isAlive) {
            if (i % 2 === 0) {
                pole3.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole3.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole3.innerText)
            console.log(i)
            czyNiepusta(pole3, pole6, pole9)
            czyNiepusta(pole1, pole2, pole3)
            czyNiepusta(pole3, pole5, pole7)
            czyRemis()
            pole3isAlive = false
        }
    }
})

pole4.addEventListener("click", function () {
    if (isAlive) {
        if (pole4isAlive) {
            if (i % 2 === 0) {
                pole4.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole4.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole4.innerText)
            console.log(i)
            czyNiepusta(pole4, pole5, pole6)
            czyNiepusta(pole1, pole4, pole7)
            czyRemis()
            pole4isAlive = false
        }
    }
})

pole5.addEventListener("click", function () {
    if (isAlive) {
        if (pole5isAlive) {
            if (i % 2 === 0) {
                pole5.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole5.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole5.innerText)
            console.log(i)
            czyNiepusta(pole2, pole5, pole9)
            czyNiepusta(pole4, pole5, pole6)
            czyNiepusta(pole1, pole5, pole9)
            czyNiepusta(pole3, pole5, pole7)
            czyRemis()
            pole5isAlive = false
        }
    }
})

pole6.addEventListener("click", function () {
    if (isAlive) {
        if (pole6isAlive) {
            if (i % 2 === 0) {
                pole6.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole6.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole6.innerText)
            console.log(i)
            czyNiepusta(pole4, pole5, pole6)
            czyNiepusta(pole3, pole6, pole9)
            czyRemis()
            pole6isAlive = false
        }
    }
})

pole7.addEventListener("click", function () {
    if (isAlive) {
        if (pole7isAlive) {
            if (i % 2 === 0) {
                pole7.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole7.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole7.innerText)
            console.log(i)
            czyNiepusta(pole1, pole4, pole7)
            czyNiepusta(pole7, pole8, pole9)
            czyNiepusta(pole3, pole5, pole7)
            czyRemis()
            pole7isAlive = false
        }
    }
})

pole8.addEventListener("click", function () {
    if (isAlive) {
        if (pole8isAlive) {
            if (i % 2 === 0) {
                pole8.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole8.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole8.innerText)
            console.log(i)
            czyNiepusta(pole7, pole8, pole9)
            czyNiepusta(pole2, pole5, pole8)
            czyRemis()
            pole8isAlive = false
        }
    }
})

pole9.addEventListener("click", function () {
    if (isAlive) {
        if (pole9isAlive) {
            if (i % 2 === 0) {
                pole9.innerText = "X"
                czyjRuch.innerText = "O"
            }
            else {
                pole9.innerText = "O"
                czyjRuch.innerText = "X"
            }
            i++
            console.log(pole9.innerText)
            console.log(i)
            czyNiepusta(pole3, pole6, pole9)
            czyNiepusta(pole1, pole5, pole9)
            czyNiepusta(pole7, pole8, pole9)
            czyRemis()
            pole9isAlive = false
        }
    }
})