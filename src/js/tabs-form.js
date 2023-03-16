let tabs = document.querySelectorAll(".tabs__item");
let forms = document.querySelectorAll(".screen1__form_wrapper");

for (let tab of tabs) {
  tab.addEventListener("click", function (evt){
    let tabTarget = evt.currentTarget;
    let button = tabTarget.dataset.button;

    for (let tab of tabs) {
      tab.classList.remove("tabs__item_active");
    }

    for (let form of forms) {
      form.classList.remove("screen1__form_active");
    }

    tabTarget.classList.add("tabs__item_active");
    document.querySelector(`#${button}`).classList.add("screen1__form_active");
  })
}