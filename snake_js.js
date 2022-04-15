// ustawianie "płótna"
const plansza = document.getElementById("plansza");
const rysowanko = plansza.getContext('2d');
// definicja kolorków
const kolorTla = 'cyan';
const obwodPlanszy = 'black';
const kolorWeza = 'red';
const kolorObwodu = 'black';
// wyjściowa pozycja węża
let wonsz = [
    { x: 180, y: 200 }, // [0] - glowa
    { x: 200, y: 200 }, // [1]
    { x: 220, y: 200 } // etc.
]
// definicja zasad:
// prędkość - o tyle węgorz przesuwa się co klatkę
const predkosc = 20;
// klatki na sekundę - wiadomo
const fps = 5;
// głowa węża - za jej pomocą np. można się przedłużyć, albo zginąć
const glowa = wonsz[0];
// kierunek - w zalezności od niego koordynaty węża będą poprawnie się zmieniać - domyślnie leci w prawo
// gora - 0, lewo - 1, dol - 2, prawo - 3
let kierunek = 1;
// no wiadomo, czy gra trwa
let graTrwa = true;
// nasłuchiwanie wciśnięć klawiszy
document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            kierunek = 0;
            console.log("gora");
            break;
        case 'ArrowLeft':
            kierunek = 1;
            console.log("lewo");
            break;
        case 'ArrowDown':
            kierunek = 2;
            break;
        case 'ArrowRight':
            kierunek = 3;
            break;
    }
})

function czyPorazka() {
    if (glowa.x < 0 || glowa.x > 400 || glowa.y < 0 || glowa.y > 400) {
        graTrwa = false;
        alert("Przegrales! Twoj wynik to: 0.");
    }
}

// nowa plansza ładuje się z każdą klatką
function wyczyscPlansze() {
    rysowanko.fillStyle = kolorTla;
    rysowanko.strokestyle = obwodPlanszy;
    rysowanko.fillRect(0, 0, plansza.width, plansza.height);
    rysowanko.strokeRect(0, 0, plansza.width, plansza.height);
}

// funkcja rysująca jedno ciałko węża
function narysujCialko(nrCialka) {
    rysowanko.fillStyle = kolorWeza;
    rysowanko.strokestyle = kolorObwodu;
    rysowanko.fillRect(nrCialka.x, nrCialka.y, 20, 20);
    rysowanko.strokeRect(nrCialka.x, nrCialka.y, 20, 20);
}

// funkcja rysująca węża
function narysujWeza() {
    wonsz.forEach(narysujCialko)
}



// w zależności od kierunku następuje ruch (wtf???)
function ruchWeza() {
    switch (kierunek) {
        case 0:
            for (let i = 0; i < wonsz.length; i++) {
                wonsz[i].x += 0;
                wonsz[i].y -= 20;
            }
            break;
        case 1:
            for (let i = 0; i < wonsz.length; i++) {
                wonsz[i].x -= 20;
                wonsz[i].y += 0;
            }
            break;
        case 2:
            for (let i = 0; i < wonsz.length; i++) {
                wonsz[i].x += 0;
                wonsz[i].y += 20;
            }
            break;
        case 3:
            for (let i = 0; i < wonsz.length; i++) {
                wonsz[i].x += 20;
                wonsz[i].y += 0;
            }
            break;
    }

}


// function klatka() {
//     wyczyscPlansze();
//     narysujWeza();
//     ruchWeza();

setInterval(function () {
    czyPorazka()
    wyczyscPlansze();
    narysujWeza();
    ruchWeza();
    console.log(glowa.x, glowa.y)
}
    , 1000 / fps);