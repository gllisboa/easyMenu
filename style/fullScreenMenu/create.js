
export default class CreateStyleFullScreenMenu {



    
    style(menuConfig) {

        let style = document.createElement('style');
        let head = document.getElementsByTagName('head')[0];
    
            
        
    
        style.innerHTML = `
    
    #open-fullscreen-menu > #menu-fullscreen {
        display: none;
        z-index: 9999999999;
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: ${menuConfig.backgroundColor};
        backface-visibility: hidden ;
        -webkit-backface-visibility: hidden ;
        overflow: hidden;
    }
    
    #open-fullscreen-menu:target {
    
        display: block;
    
    }
    
    
    #open-fullscreen-menu > nav >  #x-fullscreen {
        position: absolute;
        right: 0;
        font-size: 5vh;
        top: 0;
        color: ${menuConfig.fontColor};
    }

    #open-fullscreen-menu > #menu-fullscreen {
        background-color: ${menuConfig.backgroundColor};
        height: 100%;
        margin: auto auto auto auto;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    #open-fullscreen-menu > #menu-fullscreen a {
        color: ${menuConfig.fontColor};
        cursor:pointer;
        display: flex;
        font-size: 5vh;
        justify-content: center;
        margin-bottom: 3vh;
        text-decoration: none;
        width: inherit;
    }
    
    #open-fullscreen-menu  #container-socialmedia-fullscreen {
        display: flex;
        justify-content: center;
        left: -2vh;
        margin-left: auto;
        margin-right: auto;
        width: 9vw;
    }
    
    
    #open-fullscreen-menu .icon-social-media-nav {
        height: 5vh;
        bottom: -7vh;
        position: relative;
    }
    

    #open-fullscreen-menu #img-logo-item-nav {
        height: 15vh;
        margin-bottom: 7vh;
        margin-top: 4vh;
    }
    

    @media all  and (max-width:900px)  {

        #open-fullscreen-menu #menu-fullscreen {
            justify-content: center;
        }

        #open-fullscreen-menu #menu-fullscreen a {
            font-size: 10vh;
            padding: 1vh;
            margin-bottom: 7vh;
        }

        #open-fullscreen-menu #img-logo-item-nav {
            height: 29vh;
            margin-top: unset;
            top: -27vh;
            position: relative;
        }

        #open-fullscreen-menu #container-socialmedia-fullscreen {
            width: 50vw;
            top: -9vh;
            left: unset;
        }


        #open-fullscreen-menu .icon-social-media-nav-fullscreen {
            height: 15vh;
            bottom: 1vh;
            margin-left: 5vw;
            margin-top: unset;
            left: -2vw;
        }


        #open-fullscreen-menu #img-item-nav {
            margin-top: 0vh;
            height: 6vh;
            top: -5vh;
            position: relative
        }

        #open-fullscreen-menu > nav > #x-fullscreen {
            right: 8vw;

        }
        
    }



    
    `
    
    head.appendChild(style)

    return true
    
    
    }
}


