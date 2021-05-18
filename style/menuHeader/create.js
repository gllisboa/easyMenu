
export default class CreateStylMenuHeader {




    style(menuConfig) {

        let style = document.createElement('style');
        let head = document.getElementsByTagName('head')[0];

        style.innerHTML = `

       #menu-header #menu-home {
            align-items: center;
            background-color: ${menuConfig.backgroundColor};
            display: flex;
            height: 14vh;
            justify-content: center;
            position: sticky;
            text-align: center;
            top: 0;
            width: 100%;
        }

        #menu-header a#img-item-nav {
            width: 32vw;
        }

        #menu-header #img-logo-item-nav {
            float: left;
            height: 6vh;
            left: 4vw;
            position: relative;
        }

        #menu-home a.nav-item{
            color: ${menuConfig.fontColor};
            cursor: pointer;
            margin-right: 1.5vw;
            text-decoration: none;
            font-size: 3vh;
            width: fit-content;

        }

        .icon-social-media-nav {
            height: 5vh;
        }



    @media all  and (max-width:900px)  {



    }

`
    head.appendChild(style)

    return true

    }
}


