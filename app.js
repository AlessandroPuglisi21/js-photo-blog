console.log("test");

//DEFINIZIONE DI DOVE LA CARD VERRÁ AGGIUNTA IN MODO DINAMICO E URL DELL'API
const cardContainer = document.getElementById("card-container");
const photosURL = "https://jsonplaceholder.typicode.com/photos?_limit=12";

//RICHIESTA AXIOS
axios
  .get(photosURL)
  .then((res) => {
    const posts = res.data; // ESTRAGGO I DATI DALLA RISPOSTA API
    appendposts(posts, cardContainer); // CHIAMO UNA FUNZIONE E LE PASSO I DATI DI 'posts'
  })
  .catch((err) => {
    console.log(err);
  });

// CREO LA FUNZIONE PER AGGIUNGERE LE CARD
function appendposts(posts, cardContainer) {
  posts.forEach((post) => {
    const title = post.title; // ESTRAZIONE DEL TITOLO E DELL'URL DELLA FOTO
    const photo = post.url;

    // CREAZIONE DELL'HTML DELLA CARD
    const postCardHTML = `<div class="col-12 col-sm-12 col-lg-6 col-xl-4 card-hover" style="position: relative;">
      <div class="pin">
        <img src="./img/pin.svg" alt="">
      </div>
      <div class="card h-100">
        <div class="card-body">
          <div class="photo-placeholder" style="background-image: url('${photo}');"></div>
          <h5 class="card-title mt-3 text-center fs-4">"${title}"</h5>
        </div>
      </div>
    </div>`;

    // AGGIUNGO LA CARD AL CONTENITORE
    cardContainer.innerHTML += postCardHTML;
  });

  // Aggiungo l'evento click alle card dopo che sono state aggiunte al DOM
  const cards = document.querySelectorAll(".card-body");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // OTTENGO L'IMMAGINE DELLA CARD SELEZIONATAA
      const photo = card.querySelector(".photo-placeholder").style.backgroundImage.slice(5, -2); 

      // IMPOSTO L'IMMAGINE CHE VERRÁ VISUALIZZATA NELL'OVERLAY
      const overlayImg = document.getElementById("overlay-img");
      overlayImg.src = photo;

      // MOSTRA L'OVERLAY
      const overlay = document.getElementById("overlay");
      overlay.classList.remove("d-none");
      overlay.classList.add("d-block");
    });
  });
}

// CHIUSURA OVERLAY
const overlay = document.getElementById("overlay");

document.getElementById("closing-button").addEventListener("click", function () {
  overlay.classList.add("d-none");
});

