// co już jest zrobione?
// - podstawy,
// - ruch głowy węża,
// - spawn owocu
//
// do zrobienia:
// - rośnięcie
// warunek zderzenia - odpluskwić
// - CSS xD

// ustawianie "płótna"
const plansza = document.getElementById('plansza');
const rysowanko = plansza.getContext('2d');
// definicja kolorków
const kolorTla = 'cyan';
const obwodPlanszy = 'black';
const kolorWeza = 'red';
const kolorObwodu = 'black';
// współrzędne pól, na których będzie mógł zostać stworzony owoc
const wartosci = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200,
    220, 240, 260, 280, 300, 320, 340, 360, 380];
// wyjściowa pozycja węża
let wonsz = [
    { x: 180, y: 200 }, // [0] - glowa
    { x: 200, y: 200 }, // [1]
    { x: 220, y: 200 } // etc.
];
// wyjściowa pozycja owocu. jest losowana za każdym razem, kiedy trzeba zrobić nowy
let owoc = [];
// tablica, w której będzie zapisywana pozycja węża
let ostatniaKlatka = [];
// DEFINICJA ZASAD:
// prędkość - o tyle węgorz przesuwa się co klatkę
const predkosc = 20;
// klatki na sekundę - wiadomo
const fps = 5;
// głowa węża - za jej pomocą np. można się przedłużyć, albo zginąć - zbędna, ale mi się podoba
let glowa = wonsz[0];
// kierunek - w zalezności od niego koordynaty węża będą poprawnie się zmieniać - domyślnie leci w prawo
// gora - 0, lewo - 1, dol - 2, prawo - 3
let kierunek = 1;
// jak wąż zbierze owoc, to rośnie. wiadomo.
let owocNaPlanszy = false;
// no wiadomo, czy gra trwa (człeniu)
let graTrwa = true;
// no wiadomo, jakiś wynik by się przydał
let wynik = 0

// nasłuchiwanie wciśnięć klawiszy i określanie kierunku
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
//FUNKCJE
// funkcja sprawdzająca, czy wystąpił warunek przegranej - wyjście za planszę albo zderzenie głowy z ciałkiem
// jeżeli wystąpił, gra zatrzymuje się

function czyPorazka() {
    let czyZderzenie = false;
    for (let i = 1; i < wonsz.length; i++) {
        // if (glowa.x && glowa.y === wonsz[i].x && wonsz[i].y) {
        //     let czyZderzenie = true;
        // }
    }
    if (glowa.x < 0 || glowa.x > 400 || glowa.y < 0 || glowa.y > 400 || czyZderzenie === true) {
        graTrwa = false;
        alert("Przegrałeś! Twój wynik to: " + wynik + ".");
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
        console.log("gotem!");
        wynik++;
        console.log(wonsz);
        console.log(owoc);
        wonsz.length++;
        wonsz[wonsz.length - 1].x = ({ x: ostatniaKlatka[wonsz.length - 2].x, y: ostatniaKlatka[wonsz.length - 2].y });
        console.log(wonsz);
        owocNaPlanszy = false;
    }
}
// w zależności od kierunku następuje ruch (wtf???)
function ruchWeza() {
    switch (kierunek) {
        case 0:
            glowa.y -= 20;
            for (let i = 1; i < wonsz.length; i++) {
                wonsz[i].x = ostatniaKlatka[i - 1].x;
                wonsz[i].y = ostatniaKlatka[i - 1].y;
            }
            break;
        case 1:
            glowa.x -= 20;
            for (let i = 1; i < wonsz.length; i++) {
                wonsz[i].x = ostatniaKlatka[i - 1].x;
                wonsz[i].y = ostatniaKlatka[i - 1].y;
            }
            break;
        case 2:
            glowa.y += 20;
            for (let i = 1; i < wonsz.length; i++) {
                wonsz[i].x = ostatniaKlatka[i - 1].x;
                wonsz[i].y = ostatniaKlatka[i - 1].y;

            }
            break;
        case 3:
            glowa.x += 20;
            for (let i = 1; i < wonsz.length; i++) {
                wonsz[i].x = ostatniaKlatka[i - 1].x;
                wonsz[i].y = ostatniaKlatka[i - 1].y;
                break;
            }
    }
}

// funkcja zapisuje klatkę, ruch węża w kolejnej będzie odbywał się względem niej
function zapiszKlatke() {
    for (let i = 0; i < wonsz.length - 1; i++) {
        // z tym się tyle męczyłem. ja pierdolę
        ostatniaKlatka[i] = ({ x: wonsz[i].x, y: wonsz[i].y });
    }
}

// główna funkcja
function klatka() {
    czyPorazka();
    wyczyscPlansze();
    zapiszKlatke();
    narysujWeza();
    czyZrobicOwoc();
    narysujOwoc();
    ruchWeza();
    rosniecie();
};


// wywołanie głównej funkcji, z odpowiednim timeoutem
setInterval(function () {
    if (graTrwa) {
        klatka();
    }
}
    , 1000 / fps);
