const imgMenu = document.querySelector('.icone_nav_bar')
const navItens = document.querySelector('nav')
const ImagemFechar = document.querySelector('.image_closed')
const menuItens = document.querySelectorAll('.nav_bar ul li a')
const header = document.querySelector('.header__menu')

const showNavBar = () => navItens.classList.add('new_nav_bar')

const removeNavBar = () => navItens.classList.remove('new_nav_bar')

imgMenu.addEventListener('click', () => showNavBar())
ImagemFechar.addEventListener('click', () => removeNavBar())

menuItens.forEach(element => {
    element.addEventListener('click', function(){
        menuItens.forEach(item => item.classList.remove('new_classe'))

        this.classList.add('new_classe')
    })
});

window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        header.classList.add('new_background_color')
    }else{
        header.classList.remove('new_background_color')
    }
});