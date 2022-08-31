let body = document.querySelector(".main");
let dark = document.querySelector(".dark");
console.log(body);
dark.addEventListener('click',()=>{
    dark.classList.toggle('active');
    body.classList.toggle('night');
    
})
