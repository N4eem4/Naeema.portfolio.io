function closeNav() {
  var w = window.innerWidth;
  if(w < 1000){
    document.getElementById("links").style.width = "0";
  }
  
}

function resize() {
  var w = window.innerWidth;
  if (w >= 1001) {
    document.getElementById('links').style.width = '20vw';
  }
  else if (w< 1000){
    document.getElementById('links').style.width = "0";
  }
}

function openNav(){
  document.getElementById("links").style.width = "300px";
}

