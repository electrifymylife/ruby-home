let likes = document.querySelectorAll(".properties__info-like");

for (let like of likes) {
  like.addEventListener("click", function (evt){
    let likeTarget = evt.currentTarget;
    if (likeTarget.classList.contains("press")) {
      likeTarget.classList.remove("press");
    } else {
      likeTarget.classList.add("press");
    }
  })
}