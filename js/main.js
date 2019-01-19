//hamburger menu open/close
var hamburger = document.querySelector("#hamburgermenu"),
    siteheader = document.querySelector("header"),
    sitenav = document.querySelector("#navlist"),
    subnav = document.querySelector(".subnav"),
    arrow = document.querySelector(".downarrow");

    hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("hamburgeropen");
        sitenav.classList.toggle("showmenu");

        //keep header white until nav finishes closing
        if(siteheader.classList.contains("changecolour")){
            setTimeout(function(){
                siteheader.classList.remove("changecolour");
            },500);
        }else{
            siteheader.classList.add("changecolour");
        }
    });

    arrow.addEventListener("click", function(){
        subnav.classList.toggle("opensubnav");
    })