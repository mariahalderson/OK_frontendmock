//hamburger menu open/close
var hamburger = document.querySelector("#hamburgermenu"),
    siteheader = document.querySelector("header"),
    sitenav = document.querySelector("#navlist"),
    subnav = document.querySelector(".subnav"),
    logo = document.querySelector("#logobox img"),
    capabilities = document.querySelector("#capabilities");

    //change logo from icon to full
if (matchMedia) {

const mq = window.matchMedia("(min-width: 850px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

    // media query change
function WidthChange(mq) {

    if (mq.matches) {
        logo.src="images/OK_fullHorizontal.svg";
        capabilities.addEventListener("click", desktopDropDown);
 
    } else {
        logo.src="images/OK_whiteSymbol.svg";
        capabilities.removeEventListener("click", desktopDropDown);
    }
}

    //keep header white until nav finishes closing
function headerColour(){
    
    if(siteheader.classList.contains("changecolour")){
        setTimeout(function(){
            siteheader.classList.remove("changecolour");
        },500);
    }else{
        siteheader.classList.add("changecolour");
    }
}

    //open subnav at desktop
function desktopDropDown(){
    subnav.classList.toggle("opensubnav");
    headerColour();
}


    //-------EVENT LISTENERS/CLICK FUNCTIONS----------//

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburgeropen");
    sitenav.classList.toggle("showmenu");
    headerColour();
        
});

if(desktop){
    capabilities.addEventListener("click", function(){
        subnav.classList.toggle("opensubnav");
        headerColour();
    });
}