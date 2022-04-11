const losujKolorPrzycisk = document.getElementById('losujKolorPrzycisk');
const zamienKoloryPrzycisk = document.getElementById('zamienKoloryPrzycisk');
const obecnyKolorTekst = document.getElementById('obecnyKolorTekst');
const komplementarnyKolorTekst = document.getElementById('komplementarnyKolorTekst');
const pudlo = document.getElementById('pudlo');
// const rgbGuzik = document.getElementById('rgbGuzik');
// const rParametr = document.getElementById('rParametr');
// const gParametr = document.getElementById('gParametr');
// const bParametr = document.getElementById('bParametr');
let r = 0;
let g = 0;
let b = 0;
let col;
let r16;
let g16;
let b16;
let rKomplementarny = 0;
let gKomplementarny = 0;
let bKomplementarny = 0;
let colKomplementarny;
let r16Komplementarny;
let g16Komplementarny;
let b16Komplementarny;
let trzymacz;
let wylosowano = false;

function konwersja(arg) {
  if (arg <= 15) {
    arg = `0${arg.toString(16)}`;
  } else {
    arg = arg.toString(16);
  }
  return arg;
}

zamienKoloryPrzycisk.addEventListener('click', () => {
  if (wylosowano) {
    trzymacz = r;
    r = rKomplementarny;
    rKomplementarny = trzymacz;
    trzymacz = g;
    g = gKomplementarny;
    gKomplementarny = trzymacz;
    trzymacz = b;
    b = bKomplementarny;
    bKomplementarny = trzymacz;
    trzymacz = r16;
    r16 = r16Komplementarny;
    r16Komplementarny = trzymacz;
    trzymacz = g16;
    g16 = g16Komplementarny;
    g16Komplementarny = trzymacz;
    trzymacz = b16;
    b16 = b16Komplementarny;
    b16Komplementarny = trzymacz;
    col = `rgb(${r},${g},${b})`;
    colKomplementarny = `rgb(${rKomplementarny},${gKomplementarny},${bKomplementarny})`;
    document.body.style.background = col;
    pudlo.style.background = colKomplementarny;
    obecnyKolorTekst.innerHTML = 'Obecny kolor tła to: #' + `${r16}` + `${g16}` + `${b16}`;
    komplementarnyKolorTekst.innerHTML = 'Komplemenatrny kolor tła to: #' + `${r16Komplementarny}` + `${g16Komplementarny}` + `${b16Komplementarny}`;
  } else {
    alert('Najpierw wylosuj kolory!');
  }
});

losujKolorPrzycisk.addEventListener('click', () => {
  r = Math.floor(Math.random() * 276);
  g = Math.floor(Math.random() * 276);
  b = Math.floor(Math.random() * 276);
  r16 = konwersja(r);
  g16 = konwersja(g);
  b16 = konwersja(b);
  col = `rgb(${r},${g},${b})`;
  rKomplementarny = 276 - r;
  gKomplementarny = 276 - g;
  bKomplementarny = 276 - b;
  r16Komplementarny = konwersja(rKomplementarny);
  g16Komplementarny = konwersja(gKomplementarny);
  b16Komplementarny = konwersja(bKomplementarny);
  colKomplementarny = `rgb(${rKomplementarny},${gKomplementarny},${bKomplementarny})`;
  document.body.style.background = col;
  pudlo.style.background = colKomplementarny;
  obecnyKolorTekst.innerHTML = 'Obecny kolor tła to: #' + `${r16}` + `${g16}` + `${b16}`;
  komplementarnyKolorTekst.innerHTML = 'Komplemenatrny kolor tła to: #' + `${r16Komplementarny}` + `${g16Komplementarny}` + `${b16Komplementarny}`;
  wylosowano = true;
});

pudlo.addEventListener('click', () => {
  alert('No i po co mnie klikasz? Dajże spokój...');
});

// rgbGuzik.addEventListener('click', () => {
//   r = rParametr;
//   g = gParametr;
//   b = gParametr;
//   r16 = konwersja(r);
//   g16 = konwersja(g);
//   b16 = konwersja(b);
//   rKomplementarny = 255 - r;
//   gKomplementarny = 255 - r;
//   bKomplementarny = 255 - r;
//   r16Komplementarny = konwersja(rKomplementarny);
//   g16Komplementarny = konwersja(gKomplementarny);
//   b16Komplementarny = konwersja(bKomplementarny);
//   col = `rgb(${r},${g},${b})`;
//   console.log(r16, g16, b16);
//   console.log(r16Komplementarny, g16Komplementarny, b16Komplementarny);
//   console.log(r, g, b, col);
//   obecnyKolorTekst.innerHTML = 'Obecny kolor tła to: #' + `${r16}` + `${g16}` + `${b16}`;
//   komplementarnyKolorTekst.innerHTML = 'Komplemenatrny kolor tła to: #' + `${r16Komplementarny}` + `${g16Komplementarny}` + `${b16Komplementarny}`;
// });
