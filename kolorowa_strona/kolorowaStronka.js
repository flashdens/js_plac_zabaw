import {picker} from "./jscolor";
const losujKolorPrzycisk = document.getElementById('losujKolorPrzycisk');
const zamienKoloryPrzycisk = document.getElementById('zamienKoloryPrzycisk');
const obecnyKolorTekst = document.getElementById('obecnyKolorTekst');
const komplementarnyKolorTekst = document.getElementById('komplementarnyKolorTekst');
const pudlo = document.getElementById('pudlo');
const rgbGuzik = document.getElementById('rgbGuzik');
const pickerGuzik = document.getElementById('pickerGuzik');
const kolorRgb = document.getElementById('kolorRgb');
const komplementarnyKolorRgb = document.getElementById('komplementarnyKolorRgb'); 
const rParametr = parseInt(document.getElementById('rParametr').value);
const gParametr = parseInt(document.getElementById('gParametr').value);
const bParametr = parseInt(document.getElementById('bParametr').value);
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
let wylosowano = false;

function konwersja(arg) {
  if (arg <= 15) 
    arg = `0${arg.toString(16)}`; 
    else 
    arg = arg.toString(16);
  return arg;
}

function stworzKomplementarne() {
  r16 = konwersja(r);
  g16 = konwersja(g);
  b16 = konwersja(b);
  rKomplementarny = 255 - r;
  gKomplementarny = 255 - g;
  bKomplementarny = 255 - b;
  r16Komplementarny = konwersja(rKomplementarny);
  g16Komplementarny = konwersja(gKomplementarny);
  b16Komplementarny = konwersja(bKomplementarny);
  colKomplementarny = `rgb(${rKomplementarny},${gKomplementarny},${bKomplementarny})`;
}

function wstawWartosci () {
  col = `rgb(${r},${g},${b})`;
  colKomplementarny = `rgb(${rKomplementarny},${gKomplementarny},${bKomplementarny})`;
  document.body.style.background = col;
  pudlo.style.background = colKomplementarny;
  obecnyKolorTekst.innerHTML = 'Obecny kolor tła to: #' + `${r16}` + `${g16}` + `${b16}`;
  komplementarnyKolorTekst.innerHTML = 'Komplemenatrny kolor tła to: #' + `${r16Komplementarny}` + `${g16Komplementarny}` + `${b16Komplementarny}`;
  kolorRgb.innerHTML = 'Kolor tła w formacie rgb to: #' + `rgb(${r},${g},${b})`;
  komplementarnyKolorRgb.innerHTML = 'Kolor komplemenatrny tła w formacie rgb to: #' + `rgb(${rKomplementarny},${gKomplementarny},${bKomplementarny})`;
}

function zamienKolory () {
  let trzymacz = r;
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
}

zamienKoloryPrzycisk.addEventListener('click', () => {
  if (wylosowano) {
    zamienKolory();
    wstawWartosci();
  } else  
    alert('Najpierw wylosuj kolory!');
});

losujKolorPrzycisk.addEventListener('click', () => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  stworzKomplementarne();
  wstawWartosci();
  wylosowano = true;
});

pudlo.addEventListener('click', () => {
  alert('e');
});

pickerGuzik.addEventListener('click', () => {
  alert('coming soon')
})

rgbGuzik.addEventListener('click', () => {  
  rParametr = parseInt(document.getElementById('rParametr').value);
  gParametr = parseInt(document.getElementById('gParametr').value);
  bParametr = parseInt(document.getElementById('bParametr').value);
  r = rParametr;
  g = gParametr;
  b = bParametr;
  if (rParametr < 0 || rParametr > 255 || gParametr < 0 || gParametr > 255 || bParametr < 0 || bParametr > 255){
    alert("Kolor musi mieć wartość 0-255!");
    return;
  }
  stworzKomplementarne();
  wstawWartosci();
  wylosowano = true;
});
