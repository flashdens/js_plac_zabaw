const plansza = document.getElementById('plansza');
const rysowanko = plansza.getContext('2d');
const kolorTla = 'cyan';
const obwodPlanszy = 'black';
const kolorWeza = 'red';
const kolorObwodu = 'black';
const wartosci = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200,
    220, 240, 260, 280, 300, 320, 340, 360, 380];
const wynikDisplay = document.getElementById("wynik");
let wonsz = [
    { x: 180, y: 200 }, // [0] - glowa
    { x: 200, y: 200 }, // [1]
    { x: 220, y: 200 } // etc.
];
let owoc = [];
const predkosc = 20;
const fps = 5;
let glowa = wonsz[0];
let kierunek = 1;
let owocNaPlanszy = false;
let graTrwa = true;
let wynik = 0
let px = 10;
let py = 0;

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (kierunek != 2) {
                kierunek = 0;
            }
            break;
        case 'ArrowLeft':
            if (kierunek != 3) {
                kierunek = 1;
            }
            break;
        case 'ArrowDown':
            if (kierunek != 0) {
                kierunek = 2;
            }
            break;
        case 'ArrowRight':
            if (kierunek != 1) {
                kierunek = 3;
            }
            break;
    }
})

function czyPorazka() {
    let czyZderzenie = false;
    for (let i = 1; i < wonsz.length; i++)
        if ((glowa.x === wonsz[i].x && glowa.y === wonsz[i].y))
            czyZderzenie = true;
    if (glowa.x < 0 || glowa.x > 400 || glowa.y < 0 || glowa.y > 400 || czyZderzenie === true) {
        graTrwa = false;
        alert("Przegrałeś! Twój wynik to: " + `${wonsz.length - 4}` + ".");
    }
}

// nowa plansza ładuje się z każdą klatką, więc starą trzeba wyczyścić
function wyczyscPlansze() {
    rysowanko.fillStyle = kolorTla;
    rysowanko.strokestyle = obwodPlanszy;
    rysowanko.fillRect(0, 0, plansza.width, plansza.height);
    rysowanko.strokeRect(0, 0, plansza.width, plansza.height);
}

// funkcja rysująca jedno ciałko węża
function narysujCialko(wonsz) {
    rysowanko.fillStyle = kolorWeza;
    rysowanko.strokestyle = kolorObwodu;
    rysowanko.fillRect(wonsz.x, wonsz.y, 20, 20);
    rysowanko.strokeRect(wonsz.x, wonsz.y, 20, 20);
}

// funkcja rysująca owoc
function narysujOwoc() {
    rysowanko.fillStyle = kolorWeza;
    rysowanko.fillRect(owoc.x, owoc.y, 20, 20);
    rysowanko.strokestyle = kolorObwodu;
    rysowanko.strokeRect(owoc.x, owoc.y, 20, 20);
}
// funkcja rysująca węża
function narysujWeza() {
    wonsz.forEach(narysujCialko)
}

// funkcja robiąca owoc
function czyZrobicOwoc() {
    if (owocNaPlanszy === false) {
        owoc.x = wartosci[Math.floor(Math.random() * wartosci.length)];
        owoc.y = wartosci[Math.floor(Math.random() * wartosci.length)];
        owocNaPlanszy = true;
    }
}

// funkcja sprawia, że wąż rośnie
function rosniecie() {
    if (glowa.x === owoc.x && glowa.y === owoc.y) {
        owocNaPlanszy = false;
    }
}
// w zależności od kierunku następuje ruch (wtf???)
function ruchWeza() {
    switch (kierunek) {
        case 0:
            px = 0;
            py = -20;
            break;
        case 1:
            px = -20;
            py = 0;
            break;
        case 2:
            px = 0;
            py = 20;
            break;
        case 3:
            px = 20;
            py = 0;
            break;
    }
    glowa = { x: wonsz[0].x + px, y: wonsz[0].y + py }
    wonsz.unshift(glowa);
    if (owocNaPlanszy)
        wonsz.length--;
}

function aktualizujDane() {

}

// główna funkcja
function klatka() {
    czyPorazka();
    ruchWeza();
    wyczyscPlansze();
    narysujWeza();
    czyZrobicOwoc();
    narysujOwoc();
    rosniecie();
    console.log(wonsz.length)
};


// wywołanie głównej funkcji, z odpowiednim timeoutem
setInterval(function () {
    if (graTrwa) {
        klatka();
    }
}
    , 1000 / fps);
