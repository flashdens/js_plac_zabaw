const plansza = document.getElementById('plansza');
const rysowanko = plansza.getContext('2d');
const licznikPunktowHTML = document.getElementById('licznikPunktowHTML');
const najlepszyWynikHTML = document.getElementById('najlepszyWynikHTML');
const iloscGierHTML = document.getElementById('licznikGierHTML');
const miejsceNaGuzik = document.getElementById('miejsceNaGuzik');
const kolorTla = 'black';
const obwodPlanszy = 'white';
const kolorWeza = 'green';
const kolorObwodu = 'white';
const wartosci = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380];
let wonsz = [
    { x: 180, y: 200 }, // [0] - glowa
    { x: 200, y: 200 }, // [1]
    { x: 220, y: 200 } // etc.
];
let owoc = [];
const fps = 10;
let glowa = wonsz[0];
let kierunek = 1;
let owocNaPlanszy = false;
let graTrwa = true;
let px = 10;
let py = 0;
let najlepszyWynik = JSON.parse(localStorage.getItem("najlepszyWynik"));
najlepszyWynikHTML.innerHTML = najlepszyWynik;
let licznikGier = JSON.parse(localStorage.getItem("licznikGier"));
licznikGierHTML.innerHTML = licznikGier;
console.log(localStorage);


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
        case 'r':
            resetujGre();
    }
})

function czyPorazka() {
    let czyZderzenie = false;
    for (let i = 1; i < wonsz.length; i++)
        if ((glowa.x === wonsz[i].x && glowa.y === wonsz[i].y))
            czyZderzenie = true;
    if (glowa.x < 0 || glowa.x > 399 || glowa.y < 0 || glowa.y > 399 || czyZderzenie === true) {
        miejsceNaGuzik.innerHTML += `<button> RESTART </button>`;
        miejsceNaGuzik.addEventListener('click', function () {
        resetujGre();
    })    
        graTrwa = false;
        if (wonsz.length - 4 > najlepszyWynik){
            najlepszyWynik = wonsz.length - 4;
            najlepszyWynikHTML.innerHTML = najlepszyWynik;
        }
        alert("Przegrałeś! Twój wynik to: " + `${wonsz.length - 4}` + ".");
        localStorage.setItem("najlepszyWynik", JSON.stringify(najlepszyWynik));
        localStorage.setItem("licznikGier", JSON.stringify(licznikGier));
    }
}

function ustawDomyslneWartosci () {
    wonsz = [
        { x: 180, y: 200 }, // [0] - glowa
        { x: 200, y: 200 }, // [1]
        { x: 220, y: 200 } // etc.
    ];
    owoc = [];
    glowa = wonsz[0];
    kierunek = 1;
    owocNaPlanszy = false;
    graTrwa = true;
}

function resetujGre() {
    ustawDomyslneWartosci();
    miejsceNaGuzik.innerHTML = ``;
    licznikGier++;
    iloscGierHTML.innerHTML = licznikGier;
}

function wyczyscPlansze() {
    rysowanko.fillStyle = kolorTla;
    rysowanko.strokestyle = obwodPlanszy;
    rysowanko.fillRect(0, 0, plansza.width, plansza.height);
    rysowanko.strokeRect(0, 0, plansza.width, plansza.height);
}

function narysujCialko(wonsz) {
    rysowanko.fillStyle = kolorWeza;
    rysowanko.strokestyle = kolorObwodu;
    rysowanko.fillRect(wonsz.x, wonsz.y, 20, 20);
    rysowanko.strokeRect(wonsz.x, wonsz.y, 20, 20);
}

function narysujOwoc() {
    rysowanko.fillStyle = kolorWeza;
    rysowanko.fillRect(owoc.x, owoc.y, 20, 20);
    rysowanko.strokestyle = kolorObwodu;
    rysowanko.strokeRect(owoc.x, owoc.y, 20, 20);
}
function narysujWeza() {
    wonsz.forEach(narysujCialko);
}

function losujXYOwocu() {
    owoc.x = wartosci[Math.floor(Math.random() * wartosci.length)];
    owoc.y = wartosci[Math.floor(Math.random() * wartosci.length)];
}

function czyZrobicOwoc() {
    if (!owocNaPlanszy) {
        losujXYOwocu();
        for (let i = 0; i < wonsz.length; i++)
            if ((owoc.x === wonsz[i].x) && (owoc.y === wonsz[i].y))
                losujXYOwocu();
        owocNaPlanszy = true;
    }
}

function rosniecie() {
    if (glowa.x === owoc.x && glowa.y === owoc.y) {
        owocNaPlanszy = false;
    }
}

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



function klatka() {
    czyPorazka();
    ruchWeza();
    wyczyscPlansze();
    narysujWeza();
    czyZrobicOwoc();
    narysujOwoc();
    rosniecie();
    licznikPunktowHTML.innerHTML = wonsz.length - 4;
};


setInterval(function () {
    if (graTrwa) {
        klatka();
    }
}
    , 1000 / fps);
