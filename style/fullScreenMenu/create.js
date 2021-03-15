
export default class CreateStyleFullScreenMenu {



    
    style(menuConfig) {

        let style = document.createElement('style');
        let head = document.getElementsByTagName('head')[0];
    
            
        
    
        style.innerHTML = `
    
    #open-fullscreen-menu {
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
    
    
    #x-fullscreen {
        position: absolute;
        right: 0;
        font-size: 5vh;
        top: 0;
        color: ${menuConfig.fontColor};
    }

    #menu-fullscreen {
        background-color: ${menuConfig.backgroundColor};
        height: 100%;
        margin: auto auto auto auto;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    #menu-fullscreen a {
        color: ${menuConfig.fontColor};
        cursor:pointer;
        display: flex;
        font-size: 5vh;
        justify-content: center;
        margin-bottom: 3vh;
        text-decoration: none;
        width: inherit;
    }
    
    #container-socialmedia-fullscreen {
        display: flex;
        justify-content: center;
        left: -2vh;
        margin-left: auto;
        margin-right: auto;
        width: 9vw;
    }
    
    
    .icon-social-media-nav-fullscreen {
        height: 5vh;
        bottom: -7vh;
    }
    
    
    
    `
    
    head.appendChild(style)

    return true
    
    
    }
}


