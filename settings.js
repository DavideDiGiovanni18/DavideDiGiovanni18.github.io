var images =["IMG\\setting1.jpg","IMG\\setting2.jpg","IMG\\setting3.jpg","IMG\\setting4.jpg"]
var setBackground =document.body.style.backgroundImage;
var img1 = document.getElementById("first");

img1.onclick = function(){
  playmusic();
  document.body.style.backgroundImage = "url('IMG/setting2.jpg')";
}
