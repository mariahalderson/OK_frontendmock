//hamburger menu open/close
var hamburger = document.querySelector("#hamburgermenu"),
    siteheader = document.querySelector("header"),
    sitenav = document.querySelector("#navlist"),
    subnav = document.querySelector(".subnav"),
    arrow = document.querySelector(".downarrow");

    hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("hamburgeropen");
        sitenav.classList.toggle("showmenu");
        siteheader.classList.toggle("changecolour");
    });

    arrow.addEventListener("click", function(){
        subnav.classList.toggle("opensubnav");
    })