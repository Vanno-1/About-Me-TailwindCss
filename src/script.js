// SCRITTA "CIAO" DINAMICA (Solo movimento magnetico)
const testo = document.getElementById("testo-animato");

// Quando il mouse si muove SOPRA il testo
testo.addEventListener("mousemove", (e) => {
  // 1. Calcoliamo la posizione del mouse rispetto alla grandezza della parola
  const rect = testo.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // 2. Calcoliamo la percentuale (da 0 a 100)
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  // 3. Spostiamo leggermente la scritta verso il mouse e la ingrandiamo
  const moveX = (xPercent - 50) / 5; // Più alzi il 5, meno si muove
  const moveY = (yPercent - 50) / 5;
  testo.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;

  // Niente più manipolazione del colore qui!
});

// Quando il mouse ESCE dal testo, resettiamo tutto alla normalità
testo.addEventListener("mouseleave", () => {
  // Resettiamo solo la trasformazione
  testo.style.transform = "scale(1) translate(0, 0)";
});

// ANIMAZIONE IMMAGINE INIZIALE

// Prendiamo il nostro div con il gradiente
const auraViva = document.getElementById("aura-viva");

// Funzione che sputa un numero casuale tra un minimo e un massimo
function numeroRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// Creiamo un loop che parte ogni 2 secondi (2000 millisecondi)
setInterval(() => {
  // Scegliamo di quanto stringere/allargare l'asse orizzontale (da 85% a 125%)
  const deformazioneX = numeroRandom(0.75, 1.05);

  // Scegliamo di quanto stringere/allargare l'asse verticale (da 85% a 125%)
  const deformazioneY = numeroRandom(0.75, 1.05);

  // Applichiamo la trasformazione. Il CSS farà l'animazione fluida per noi!
  auraViva.style.transform = `scale(${deformazioneX}, ${deformazioneY})`;
}, 2000); // Cambia questo numero se vuoi che "respiri" più o meno velocemente

// APERTURA E CHUSURA HAMBUERGER MENU

// 1. Selezioniamo l'header e tutti i link al suo interno
const header = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".header-nav a");

// 2. Il tuo codice esistente per l'hamburger (Toggle)
menuToggle.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

// 3. Nuova logica: Per ogni link trovato, aggiungiamo un 'ascoltatore' di click
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Rimuoviamo la classe per far richiudere l'header
    header.classList.remove("is-open");
  });
});

// ANIMAZIONE AURA CONTATTI

const auraContatti = document.getElementById("aura-contatti");

// Assicurati che 'numeroRandom' sia definita sopra questo script!

setInterval(() => {
  // Scegliamo deformazioni casuali (mantenendole bilanciate per la card larga)
  const deformazioneX_Contatti = numeroRandom(0.85, 1.0);
  const deformazioneY_Contatti = numeroRandom(0.85, 1.0);

  // Applichiamo la trasformazione
  auraContatti.style.transform = `scale(${deformazioneX_Contatti}, ${deformazioneY_Contatti})`;
}, 2000);
