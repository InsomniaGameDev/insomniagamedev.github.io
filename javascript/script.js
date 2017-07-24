/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openWindow() {
    "use strict";
    document.getElementById("card-efemero").style.display = "flex";
}

function closeWindow() {
    "use strict";
    document.getElementById("card-efemero").style.display = "none";
}
