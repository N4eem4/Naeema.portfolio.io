function navHide() {
  var w = window.innerWidth;
  var link = document.getElementById("links");
  if (link.style.display === "flex"&& w < 1000) {
    link.style.display = "none";
  } else {
    link.style.display = "flex";
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

