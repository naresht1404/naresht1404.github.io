// with is file code we are reusing in all pages like home, about, artists, news, etc.,

fetch('./../gallery/navigation.html')
.then(res => res.text())
.then(text => {
    // to get script tag with navbar id
    let oldelem = document.querySelector("script#navbar");
    //creating new div tag
    let newelem = document.createElement("div");
    // adding navigation.html file content to new div tag
    newelem.innerHTML = text;
    //replacing script tag with new div and it's content
    oldelem.parentNode.replaceChild(newelem,oldelem);


    var urlTotal= window.location.href;
    //out of all menu items only one menu is active so we are trying to fetch active navigation menu
    for(var elements=document.getElementsByClassName('active'),i=0,l=elements.length; l>i; i++) {
      elements[0].classList.remove("active");
    }

    /**
     * Here we are trying to update selected menu using window location url
     */
    if(urlTotal.search("home.html")>0){
        document.getElementById("indexitem").classList.add('active');
        document.getElementById("indexmenu").classList.add('active');
    }else if(urlTotal.search("about.html")>0){
        document.getElementById("aboutitem").classList.add('active');
        document.getElementById("aboutmenu").classList.add('active');
    }else if(urlTotal.search("news.html")>0){
        document.getElementById("newsitem").classList.add('active');
        document.getElementById("newsmenu").classList.add('active');
    }else if(urlTotal.search("exhibitions.html")>0){
        document.getElementById("exhibitionsitem").classList.add('active');
        document.getElementById("exhibitionsmenu").classList.add('active');
    }else if(urlTotal.search("artists.html")>0){
        document.getElementById("artistsitem").classList.add('active');
        document.getElementById("artistsmenu").classList.add('active');
    }else if(urlTotal.search("hadley.html")>0){
        document.getElementById("artistsitem").classList.add('active');
        document.getElementById("artistsmenu").classList.add('active');
    }else if(urlTotal.search("aggra.html")>0){
        document.getElementById("artistsitem").classList.add('active');
        document.getElementById("artistsmenu").classList.add('active');
    }else if(urlTotal.search("mastrovick.html")>0){
        document.getElementById("artistsitem").classList.add('active');
        document.getElementById("artistsmenu").classList.add('active');
    }
});

/**
 * This event listner used to close the hamburger popup when user click on page 
 */
document.body.addEventListener("click", function(event) {
    if(event.target.nodeName!="INPUT"){
        document.getElementById("hamburger-checkbox").checked=false;
    }
});

