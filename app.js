console.log("test");

const cardContainer = document.getElementById("card-container");
const photosURL = "https://jsonplaceholder.typicode.com/photos?_limit=6";

axios
  .get(photosURL)
  .then((res) => {
    //console.log(res);
    const posts = res.data

    appendposts(posts,cardContainer)
  })
  .catch((err) => {
    console.log(err);
  });
function appendposts(posts, root){
    //console.log(posts, root)

posts.forEach((post) => {
    //console.log(post)
    
    const title = post.title
    const photo = post.url

    //console.log(title, photo)

    const postCardHTML = `<div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="photo-placeholder" style="background-image: url('${photo}'); height: 300px;"></div>
          <h5 class="card-title mt-3">${title}</h5>
        </div>
      </div>
    </div>`;

    cardContainer.innerHTML += postCardHTML;
})
}