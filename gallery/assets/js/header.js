// Please change the gallery folder name to your deployed project root folder name
fetch('./../gallery/header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#header-section");
    let newelem = document.createElement("head");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
