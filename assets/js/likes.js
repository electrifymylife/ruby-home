let likes=document.querySelectorAll(".properties__info-like");for(let e of likes)e.addEventListener("click",(function(e){let s=e.currentTarget;s.classList.contains("press")?s.classList.remove("press"):s.classList.add("press")}));