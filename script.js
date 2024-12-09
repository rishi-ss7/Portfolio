// var tablink = document.getElementsByClassName("tab-links");
// var tabcontaint = document.getElementsByClassName("tab-containts");
// function opentab(tabname){
//     for(tablink of tab-links){
//         tablink.classList.remove("active-link");
//     }
//     for(tabcontaint of tab-contains){
//         tabcontaint.classList.remove("active-tab");
//     }
// }
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}