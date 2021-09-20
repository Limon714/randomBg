window.addEventListener("mouseover",function(){
    var bg = document.getElementById("section");
    var let ='0123456789ABCDEF';
    var hex='#';
    for(i= 0; i < 6; i++) {
    var gen = hex+=let[Math.floor(Math.random()*16)];
    bg.style.background = gen;
    }
    });
    