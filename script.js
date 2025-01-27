function closeNav() {
  var w = window.innerWidth;
  var nav = document.querySelectorAll("[id='navlinks']");
  if(w < 1000){
    document.getElementById("links").style.width = "0";
    for(var i = 0; i < nav.length; i++){
      nav[i].style.display = 'none';
     }
  }
  
}

function resize() {
  var w = window.innerWidth;
  var nav = document.querySelectorAll("[id='navlinks']");
  if (w >= 1001) {
    document.getElementById('links').style.width = '100%';
   for(var i = 0; i < nav.length; i++){
    nav[i].style.display = 'flex';
   }
  }
  else if (w< 1000){
    document.getElementById('links').style.width = "0";
    for(var i = 0; i < nav.length; i++){
      nav[i].style.display = 'none';
     }
  }
}

function openNav(){
  var nav = document.querySelectorAll("[id='navlinks']");
  if(window.innerWidth < 1000)
    {
      document.getElementById("links").style.width = "300px";
      for(var i = 0; i < nav.length; i++){
        nav[i].style.display = 'flex';
       }
    }
  
}

