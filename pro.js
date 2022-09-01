let body = document.querySelector(".main");
let dark = document.querySelector(".dark");

dark.addEventListener('click',()=>{
    dark.classList.toggle('active');
    body.classList.toggle('night');
    
})
