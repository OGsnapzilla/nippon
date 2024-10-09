"use strict;"

/*Show more - show less function*/
function toggleText(tekstId, link) {
    var tekst = document.getElementById(tekstId);

    if (tekst.classList.contains("full")) {
        tekst.classList.remove("full");
        link.innerHTML = "Vis mere";
    } else {
        tekst.classList.add("full");
        link.innerHTML = "Vis mindre";
    }
}


/*Scroll to top button*/
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}