


const fullScreenSection = document.getElementById('open-fullscreen-menu');
var windowWidhth = window.innerWidth;


import CreateStyleFullScreenMenu from './style/fullScreenMenu/create.js'
let  createStyleFullScreenMenu = new CreateStyleFullScreenMenu


let menuA = {

    backgroundColor: 'rgba(4,7,7,0.9)' ,
    logoMenu: 'BASE-64',
    fontSize: '3vh',
    fontColor: 'rgba(242, 242, 242, 1)',
    links: [
        {
            text: 'Principal',
            href: 'index.html',
            altImg: 'Escritório de Advocacia Barth Silveira',
            type: 'logo'
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
           type: 'IG', // Instagram,
           color: 'white' // Or Black 
        },
        {
            altImg: 'Insta - Barth Silveira Advocacia - Esritório Advogado Florianópolis',
            href: '',
            type: 'FB', // Instagram,
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

    
    createFullScreenMenu(pathToRoot,menu)
    createStyleFullScreenMenu.style(menu)

    // createMenuHeaderNav()

}

function createFullScreenMenu (pathToRoot = '', menu = {}) {

    console.log('Path ' + pathToRoot )

    // let fullScreenSection = document.getElementById('open-fullscreen-menu')

    if (!fullScreenSection) {
        alert(`Não conseguimos criar o Menu fullscreen: \n\n Não foi encontrado uma <section id='open-fullscreen-menu'>`)
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
                
            
            })

            navFullScreen.appendChild(containerSocialMediaFullScreen)
        }




    }


}

function addLink(elementFather, link = { text:'', href: '', id:'', imgBase64: '', altImg: '', type: ''} ) {

    let aElement = document.createElement('a')

    aElement.href = link.href
    aElement.innerText = link.text

    if (link.id) {
        aElement.id = link.id
    }

    if (link.type) {


        let imgElement = document.createElement('img')

        if (link.altImg) {
            imgElement.setAttribute('alt',link.altImg)
        }

        switch (link.type) {
            case ('IG')
        }


    }

    elementFather.appendChild(aElement)
}

function createMenuHeaderNav () {

};

function openFullScreenMenu() {


    console.log('openFullScreenMenu: ' + window.location.hash)

    if (window.location.hash == '#open-fullscreen-menu') {
        fullScreenSection.style.display = 'block'
    }else {
        fullScreenSection.style.display = 'none'
    }


}