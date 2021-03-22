
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
    
    
    @media all  and (max-width:900px)  {

        
        
    }



    
    `
    
    head.appendChild(style)

    return true
    
    
    }
}


