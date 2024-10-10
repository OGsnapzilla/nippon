"use strict";

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

