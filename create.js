


const fullScreenSection = document.getElementById('open-fullscreen-menu');
const menuHeaderNavSection = document.getElementById('menu-header');



var windowWidhth = window.innerWidth;

let navMenuHome


import CreateStyleFullScreenMenu from './style/fullScreenMenu/create.js'
let  createStyleFullScreenMenu = new CreateStyleFullScreenMenu()

import CreateStylMenuHeader from './style/menuHeader/create.js';
let createStylMenuHeader = new CreateStylMenuHeader()

import LogosBase64 from './logosBase64.js';
let logosBase64 = new LogosBase64()





let menuA = {

    backgroundColor: 'rgba(4,7,7,0.9)' ,
    fontSize: '3vh',
    fontColor: 'rgba(242, 242, 242, 1)',
    hamburguerBtnColor: 'white',
    links: [
        {
            href: 'index.html',
            altImg: 'Escritório de Advocacia Barth Silveira',
            type: 'logo',
            imgBase64: `${logosBase64.base64Logo()}`
        },
        {   text: 'Filosofia',
            href: 'index.html#filosofia',
            },
        {   text: 'Áreas de Atuação',
            href: 'index.html#area-atuacao',
        },
        {   text: 'Nossa Equipe',
            href: 'index.html#nossa-equipe',
        },
        {   text: 'Fale Conosco',
            href: 'index.html#fale-conosco',
        },
        {   text: 'Blog',
            href: 'blog.html',
        },

    ],
    socialMedia: [
        {
            altImg: 'Facebook - Barth Silveira Advocacia - Esritório Advogado Florianópolis',
            href: '',
            type: 'FB', // Facebook,
            color: 'white' // Or Black
        },
        {
           altImg: 'INsta - Barth Silveira Advocacia - Esritório Advogado Florianópolis',
           href: '',
           type: 'IG', // Instagram,
           color: 'white' // Or Black
        }
    ]
}

console.log('chama criação do menu')

createMenu(menuA, '../')

window.addEventListener('hashchange', function() {
    openFullScreenMenu()
} );



function createMenu(menu, pathToRoot) {

    if (!menu.links.find(checkLogoType)) {
        alert('Não foi encontrado um link do tipo Logo \n  Por favor crie um link com o attributo type: logo')
    }

    createFullScreenMenu(pathToRoot,menu)
    createStyleFullScreenMenu.style(menu)

    createMenuHeaderNav(menu)
    createStylMenuHeader.style(menu)

}

function createFullScreenMenu (pathToRoot = '', menu = {}) {

    console.log('Path ' + pathToRoot )

    // let fullScreenSection = document.getElementById('open-fullscreen-menu')

    if (!fullScreenSection) {
        alert(`Não conseguimos criar o Menu fullscreen: \n Não foi encontrado uma <section id='open-fullscreen-menu'>`)
    }else {

        //ADD NAV (menu-fullscreen)
        let navFullScreen  = document.createElement('nav')
        navFullScreen.id = 'menu-fullscreen'
        fullScreenSection.appendChild(navFullScreen)

        //ADD SPAN (x-fullscreen) CLOSE ON NAV (menu-fullscreen)
        let xFullScreen = document.createElement('span');
        xFullScreen.id = 'x-fullscreen'
        navFullScreen.appendChild(xFullScreen)

        //ADD A (#close-menu) ON SPAN (x-fullscreen)
        let a_xFullScreen = {href: '#close-menu', text: 'X', id: 'close-menu'}
        addLink(xFullScreen, a_xFullScreen)
        document.getElementById('close-menu').onclick = openFullScreenMenu()


        //ADD LINKS PAGE ON NAV (navFullScreen)
        menu.links.forEach( a => {

            a.href = `${pathToRoot}${a.href}`
            addLink(navFullScreen, a)

        })

        //ADD SOCIAL MEDIA ON NAV (navFullScreen)

        console.log(menu.socialMedia)

        if(menu.socialMedia){
            let containerSocialMediaFullScreen = document.createElement('div')
            containerSocialMediaFullScreen.id = 'container-socialmedia-fullscreen'

            menu.socialMedia.forEach( a => {

                addLink(containerSocialMediaFullScreen, a)

            })

            navFullScreen.appendChild(containerSocialMediaFullScreen)
        }




    }


}

function addLink(elementFather, link = { text:'', href: '', id:'', imgBase64: '', altImg: '', type: '', } ) {

    let aElement = document.createElement('a')

    if (link.href) {
        aElement.href = link.href
    }

    if (link.text) {
        aElement.innerText = link.text
    }

    if (link.id) {
        aElement.id = link.id
    }

    if (link.type) {

        let imgElement = document.createElement('img')

        if (link.altImg) {
            imgElement.setAttribute('alt',link.altImg)
        }

        let type = link.type.toUpperCase()
        let color = ''

        if (link.color) {
            color = link.color.toUpperCase()
        }

        if (type != 'LOGO') {
            let iconSocialMediaNavClass = 'icon-social-media-nav'
            imgElement.classList.add(iconSocialMediaNavClass)
        }

        switch (type) {
            case 'IG':
                imgElement.id = 'img-face-icon-nav'
                if(color == 'WHITE') {
                    imgElement.src = logosBase64.instaWhite()
                }else {
                    imgElement.src = logosBase64.instaBlack()
                }
                break;
            case 'FB':
                imgElement.id = 'img-insta-icon-nav'
                if(color == 'WHITE') {
                    imgElement.src = logosBase64.faceWhite()
                }else {
                    imgElement.src = logosBase64.faceBlack()
                }
                break;
            case 'LOGO':
                aElement.id = 'img-item-nav'
                aElement.classList.add('img-item-nav')
                addBase64Img(imgElement,link.imgBase64)
                imgElement.id = 'img-logo-item-nav'
                break;

        }

        aElement.appendChild(imgElement)


    }

    elementFather.appendChild(aElement)

    console.dir(aElement)

    return aElement
}

function addBase64Img(imgElement = document.createElement('img'), base64 = ''){

    let configBase64 = base64.substring(0,22)
    let configBase64Default = 'data:image/png;base64,'


    if (configBase64 != configBase64Default) {
        base64 = `${configBase64Default}${base64}`
    }

    imgElement.src = base64

    return imgElement


}


function checkLogoType (aLink) {

    if (aLink.type) {
        return aLink.type.toUpperCase() == 'LOGO'
    }



};

function createMenuHeaderNav (menu = { links: [], socialMedia: []}) {

    if (!menuHeaderNavSection) {
        alert(`Não foi possível encontrar a <section id='menu-header'>`)
    }else{

        navMenuHome = document.createElement('nav')
        navMenuHome.id = 'menu-home'

        //Apend <nav id="menu-home">
        menuHeaderNavSection.appendChild(navMenuHome)
        let navItemClass =  'nav-item'
        menu.links.forEach( a => {

            let aElement =  addLink(navMenuHome,a)

            aElement.classList.add(navItemClass)
            }

        )


        let aLogoMenuHeader = menuHeaderNavSection.querySelectorAll('nav a#img-item-nav')
        let imgHamburguer = document.createElement('img')

        imgHamburguer.id =  'menu-mobile-hamburguer'

        menu.socialMedia.forEach( a => {

            let aElement = addLink(navMenuHome,a)

            aElement.classList.add(navItemClass)


        })





    }


};

function openFullScreenMenu() {


    console.log('openFullScreenMenu: ' + window.location.hash)

    if (window.location.hash == '#open-fullscreen-menu') {
        if(navMenuHome) {
            navMenuHome.style.display = 'none'
        }
        fullScreenSection.style.display = 'block'
    }else {
        if(navMenuHome) {
            navMenuHome.style.display = 'flex'
        }
        fullScreenSection.style.display = 'none'
    }


}