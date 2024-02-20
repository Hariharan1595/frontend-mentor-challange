const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const mobMenu = document.querySelector('.mob-menu');
const body = document.querySelector('body');
function open(){
    if(menu.classList.contains('open'))
    {
       menu.classList.remove('open');
       overlay.classList.remove('fade-in');
       mobMenu.style.display = 'none';
       body.classList.remove('noscroll');


     

    }
    else{
        menu.classList.add('open');
        overlay.classList.add('fade-in');
        mobMenu.style.display = 'block';
        body.classList.add('noscroll');
       
    }
    

}

menu.addEventListener('click',open);