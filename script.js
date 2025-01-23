function navHide() {
  var w = window.innerWidth;
  var link = document.getElementById("links");
  var hamburger = document.getElementById("hamburger");
  var close = document.getElementById("close");
  if (link.style.display === "flex"&& w < 1000) {
    link.style.display = "none";
    hamburger.style.display = "none";
    close.style.display = "block";
  } 
  else {
    link.style.display = "flex";
    hamburger.style.display = "block";
    close.style.display = "none";
  }
}

function resize() {
  var w = window.innerWidth;
  if (w >= 1001) {
    document.getElementById('links').style.display = 'flex';
  }
  else{
    document.getElementById('links').style.display = "none";
  }
}

