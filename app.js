console.log("test");

const cardContainer = document.getElementById("card-container");
const photosURL = "https://jsonplaceholder.typicode.com/photos?_limit=6";

axios
  .get(photosURL)
  .then((res) => {
    console.log(res);
    const posts = res.data

    appendposts(posts,cardContainer)
  })
  .catch((err) => {
    console.log(err);
  });
function appendposts(posts, root){
    console.log(posts, root)

posts.forEach((post) => {
    console.log(post)
    
    const title = post.title
    const photo = post.url

    console.log(title, photo)
})
}