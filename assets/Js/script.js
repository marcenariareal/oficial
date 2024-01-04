const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const primaryH = document.querySelector('.primary-text h1');
const primaryP = document.querySelector('.primary-text p');
const primaryImage = document.querySelector('.primary-image');
const arrow = document.querySelector('.arrow-config');
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuListA = document.querySelectorAll('.menu-list ul li a');
const logo = document.querySelector('.logo');
const divFake = document.querySelector('.div-fake');
const border = document.querySelectorAll('.border');


if(window.innerWidth <= 400) {
    primaryImage.style.backgroundImage = 'url(./assets/images/solda-6.jpg)';
}


const contents = [
    {
        title: 'Construindo estruturas sólidas e duradouras',
        description: "Dedicamos nossa expertise em metalurgia para criar soluções personalizadas e duráveis. Transformamos sua visão em realidade, moldando o metal de acordo com suas necessidades.",
        image: './assets/images/solda-2.jpg',
        imageMobile: './assets/images/solda-2.jpg'
    },
    {
        title: 'Trabalhamos em varias cidades de Alagoas',
        description: "Do litoral ao interior, nossa metalúrgica em Alagoas está pronta para realizar projetos personalizados. Moldamos o metal conforme suas necessidades, garantindo excelência em cada etapa do processo.",
        image: './assets/images/solda-5.jpg',
        imageMobile: './assets/images/solda-5.jpg'
    },
    {
        title: 'Estruturas metálicas,solda industrial,soldagem eletrodo',
        description: "Produzimos estruturas metálicas e realizamos serviços de soldagem industrial com excelência. Somos especialistas em soldagem com eletrodo e revestimento, proporcionando durabilidade e qualidade em cada peça e projeto que entregamos.",
        image: './assets/images/solda-1.jpg',
        imageMobile: './assets/images/solda-1.jpg'
    }
];

let aboutNumber = 0;

function about(sym) {
    if (sym === '+') {
        aboutNumber++;
    } else if (sym === '-') {
        aboutNumber--;
    }

    if (aboutNumber < 0) {
        aboutNumber = contents.length - 1;
    } else if (aboutNumber >= contents.length) {
        aboutNumber = 0;
    }

    const content = contents[aboutNumber];

    
    primaryH.innerHTML = content.title;
    primaryP.innerHTML = content.description;

    if(window.innerWidth <= 750) {
        primaryImage.style.backgroundImage = `url(${content.imageMobile})`;
    }else {
        primaryImage.style.backgroundImage = `url(${content.image})`;
    }
}

arrowLeft.addEventListener('click', () => { about('-'); });
arrowRight.addEventListener('click', () => { about('+'); });

function resizeArrow () {
    let size = window.innerWidth
    let sizeWidth = size - 600;
    if(window.innerWidth <= 600) {
        arrow.style.left = `calc(488px + ${sizeWidth}px)`;
    }
}

resizeArrow();

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > 50) {
        arrow.style.display = 'none';
    }else if(scrollTop > 33 && window.innerWidth <= 500) {
        arrow.style.display = 'none';
    }else {
        arrow.style.display = 'flex';
    }
});


menuMobile.addEventListener('click', () => {

    if(menu.classList.contains('ok')) {
        menu.classList.remove('ok');
        menuMobile.style.backgroundImage = "url(./assets/images/icon-close.svg)";
        menu.style.backgroundColor = 'white';
        menu.style.marginTop = '0px';
        menu.style.paddingTop = '40px';
        menu.style.height = '109px';
        menuList.style.display = 'flex';
        logo.style.display = 'none';
        divFake.style.display = 'none';
    }else {
        menu.classList.add('ok');
        menuMobile.style.backgroundImage = "url(./assets/images/icon-hamburger.svg)";
        menu.style.backgroundColor = '';
        menu.style.marginTop = '32px';
        menu.style.paddingTop = '0px';
        menu.style.height = '40px';
        menuList.style.display = 'none';
        logo.style.display = 'flex';
        divFake.style.display = 'flex';
    }
    
})

menuListA.forEach( (e, i) => {
    e.addEventListener('mouseover', () => {
        border[i].style.display = 'flex';
    });
    e.addEventListener('mouseout', () => {
        border[i].style.display = 'none';
    })
})