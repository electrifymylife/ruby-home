let tabs=document.querySelectorAll(".tabs__item"),forms=document.querySelectorAll(".screen1__form_wrapper");for(let e of tabs)e.addEventListener("click",(function(e){let t=e.currentTarget,s=t.dataset.button;for(let e of tabs)e.classList.remove("tabs__item_active");for(let e of forms)e.classList.remove("screen1__form_active");t.classList.add("tabs__item_active"),document.querySelector(`#${s}`).classList.add("screen1__form_active")}));let likes=document.querySelectorAll(".properties__info-like");for(let e of likes)e.addEventListener("click",(function(e){let t=e.currentTarget;t.classList.contains("press")?t.classList.remove("press"):t.classList.add("press")}));