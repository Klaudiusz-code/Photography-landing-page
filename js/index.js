//Menu
const btnDisplay = document.querySelector('.btn__display');
const btnClose = document.querySelector('.btn__close');
const menu = document.querySelector('.nav__list')
const menuLinks = document.querySelectorAll('.nav__link')



btnDisplay.addEventListener('click', () =>{
    menu.classList.add('show')
});
btnClose.addEventListener('click', () =>{
    menu.classList.remove('show')
})
menuLinks.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.remove('show')
    })
})

document.addEventListener('click', (event) => {
    if (!event.target.closest('.btn__display') && !event.target.closest('.nav__menu')) {
        menu.classList.remove('show');
    }
});

// window.addEventListener("scroll", ()=> {
//     const nav = document.querySelector('.nav');
//     nav.classList.toggle("sticky-menu", window.scrollY > 0);
// });


//Filter gallery


(function (){
    const list = document.querySelectorAll('.btn__gallery');
    const itemBox = document.querySelectorAll('.portfolio__itemBox')

    list.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            list.forEach(btn2 => {
                btn2.classList.remove('btn__gallery--active');
            });
            btn.classList.add('btn__gallery--active');
            itemBox.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
})();


// popup

document.querySelectorAll('.portfolio__image').forEach(img =>{
    img.onclick = () =>{
        document.querySelector('.portfolio__popup-image').style.display = 'block';
        document.querySelector('.portfolio__popup-img').src = img.getAttribute('src');
    }
});

document.querySelector('.btn__gallery-close').addEventListener('click',() =>{
    document.querySelector('.portfolio__popup-image').style.display = 'none';

})














