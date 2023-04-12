burger = document.querySelector('.burger')
uli = document.querySelector('.uli')
navbar=document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
    uli.classList.toggle('v-class-resp');
    navbar.classList.toggle('hnavresp');
    
})