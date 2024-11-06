console.log("test");

//DEFINIZIONE DI DOVE LA CARD VERRÁ AGGIUNTA IN MODO DINAMICO E URL DELL' API
const cardContainer = document.getElementById("card-container");
const photosURL = "https://jsonplaceholder.typicode.com/photos?_limit=6";

//RICHIESTA AXIOS
axios
  .get(photosURL)
  .then((res) => {
    //console.log(res);
    const posts = res.data; //! ===> ESTRAGGO I DATI DALLA RISPOSTA API

    appendposts(posts, cardContainer); //! ===> CHIAMO UNA FUNZIONE E LE PASSO I DATI DI 'posts' CHE POII ANDRANNO NELLA 'cardContainer'
  })
  .catch((err) => {
    console.log(err);
  });

// CREO LA FUNZIONE

function appendposts(posts, cardContainer) {
  //console.log(posts, root)

  posts.forEach((post) => {  //! ===> CREO LE ITERAZIONI PER OGNI OGGETTO NELL'ARRAY 'posts'
    //console.log(post)

    const title = post.title;  //! ===> ESTRAZIONE DEL TITOLO E DELL'URL DELLA FOTO
    const photo = post.url;

    //console.log(title, photo)

//CREAZIONE DELL'HTML CHE VERRÁ AGGIUNTO 

    const postCardHTML = `<div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="photo-placeholder" style="background-image: url('${photo}');"></div>
          <h5 class="card-title mt-3 text-center fs-4">"${title}" </h5>
        </div>
      </div>
    </div>`;

    // AGGIUNGO LA CARD AL CONTENITORE
    cardContainer.innerHTML += postCardHTML;
  });
}
