console.log("ok js");


const bt = document.getElementById("toggleButtonMenu");
const el=document.getElementById("wrapMenu");


bt.addEventListener("click", function(){

  if (el.style.display === "flex") {
    el.style.display = "none";
  } else {
    el.style.display = "flex";}

});