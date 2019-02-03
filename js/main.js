//hamburger menu open/close
var hamburger = document.querySelector("#hamburgermenu"),
    siteheader = document.querySelector("header"),
    mainNav = document.querySelector("#mainNavigation"),
    subnav = document.querySelector(".subnav"),
    logo = document.querySelector("#headerLogo img"),
    capabilities = document.querySelector("#capabilities");

//explore arrow on home page
var exploreArrow = document.querySelector("#exploreArrow");





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


  //change header colour after scroll
function headerScroll(){
  let heroHeight = document.querySelector("#hero").offsetHeight;
  if(window.scrollY > heroHeight){
    siteheader.classList.add("scrollcolour");
  }if(window.scrollY < heroHeight){
    siteheader.classList.remove("scrollcolour");
  }
}

window.addEventListener('scroll', headerScroll);


    //open subnav at desktop
function desktopDropDown(){
    subnav.classList.toggle("opensubnav");
    headerColour();
}


    //run animation on explore arrow
function arrowAnimation(){
    setTimeout(function(){
        exploreArrow.style.animationPlayState = "paused";
    },900);
    setTimeout(function(){
        exploreArrow.style.animationPlayState = "running";
    },3600);
}

// if(exploreArrow){
//     var arrowInt = setInterval(arrowAnimation, 3600);
// }

//arrowAnimation();

    //-------EVENT LISTENERS/CLICK FUNCTIONS----------//

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburgeropen");
    mainNav.classList.toggle("showmenu");
    headerColour();

});
