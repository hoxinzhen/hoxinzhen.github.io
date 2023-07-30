// THEM TABS
const tabbar = document.querySelectorAll('[data-tabbar]')
const content = document.querySelectorAll('[data-content]')

tabbar.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabbar)

        content.forEach(content => {content.classList.remove('active')})
        tabbar.forEach(tab => {tab.classList.remove('active')})

        content.forEach(content=>{content.classList.add('nonactive')})

        tab.classList.add('active')
        target.classList.add('active')
    })
})

// collapse
var collapse = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("bee");
    var hide = this.nextElementSibling;
    if (hide.style.maxHeight){
      hide.style.maxHeight = null;
      hide.style.padding = "0 2.5vw 0 2.5vw"
    } else {
      hide.style.padding = "3vw 2.5vw 3vw 2.5vw"
      hide.style.maxHeight = "2000px";
    } 
  });
}

// stars
let stars = document.getElementById('star');
window.addEventListener('scroll', ()=>{
    
})
