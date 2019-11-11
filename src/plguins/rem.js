window.onload = function(){
  getRem(10)
};
window.onresize = function(){
  getRem(10)
};
function getRem(prem){
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = oWidth/prem + "px";
}