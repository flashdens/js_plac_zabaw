// 0 - kamien
// 1 - papier
// 2 - nozyce
// indykator to prawie jak windykator

const kamien = document.getElementById("kamien")
const papier = document.getElementById("papier")
const nozyce = document.getElementById("nozyce")
const wynik = document.getElementById("wynikIndykator")
const opis = document.getElementById("opis")
const win = new Audio("./win.mp3")
const draw = new Audio("./draw.mp3")
const lose = new Audio("./lose.mp3")

function zagrajMuzyke(mp3) {
    mp3.play()
}

kamien.addEventListener("click", function () {
    win.pause()
    draw.pause()
    lose.pause()
    win.currentTime = 0
    draw.currentTime = 0
    lose.currentTime = 0
    let coWylosowano = Math.floor(Math.random() * 3)
    console.log(coWylosowano)
    if (coWylosowano === 0) {
        wynik.innerHTML = `<img src="./kamien.png" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił kamień! Partia kończy się remisem."
        zagrajMuzyke(draw)

    }
    else if (coWylosowano === 1) {
        wynik.innerHTML = `<img src="./papier.png" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił papier! Przegrywasz partię."
        zagrajMuzyke(lose)

    }
    else {
        wynik.innerHTML = `<img src="./nozyce.jpg" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił nożyce! Wygrywasz partię!"
        zagrajMuzyke(win)
    }
})

papier.addEventListener("click", function () {
    win.pause()
    draw.pause()
    lose.pause()
    win.currentTime = 0
    draw.currentTime = 0
    lose.currentTime = 0
    let coWylosowano = Math.floor(Math.random() * 3)
    console.log(coWylosowano)
    if (coWylosowano === 0) {
        wynik.innerHTML = `<img src="./kamien.png" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił kamień! Wygrywasz partię!"
        zagrajMuzyke(win)
    }
    else if (coWylosowano === 1) {
        wynik.innerHTML = `<img src="./papier.png" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił papier! Partia kończy się remisem."
        zagrajMuzyke(draw)
    }
    else {
        wynik.innerHTML = `<img src="./nozyce.jpg" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił nożyce! Niestety przegrywasz partię."
        zagrajMuzyke(lose)
    }
})

nozyce.addEventListener("click", function () {
    win.pause()
    draw.pause()
    lose.pause()
    win.currentTime = 0
    draw.currentTime = 0
    lose.currentTime = 0
    let coWylosowano = Math.floor(Math.random() * 3)
    console.log(coWylosowano)
    if (coWylosowano === 0) {
        wynik.innerHTML = `<img src="./kamien.png" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił kamień! Niestety przegrywasz partię."
        zagrajMuzyke(lose)
    }
    else if (coWylosowano === 1) {
        wynik.innerHTML = `<img src="./papier.png" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił papier! Wygrywasz partię!"
        zagrajMuzyke(win)
    }
    else {
        wynik.innerHTML = `<img src="./nozyce.jpg" width="200" height="200">`
        opis.innerText = "Twój przeciwnik wystawił nożyce! Partia kończy się remisem."
        zagrajMuzyke(draw)
    }
})