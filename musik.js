
var isplaying = Boolean(false);
var nummerStueck =2;
var count=0;
var songs = ["JuiceWrld","Future","Freebeat"];
var images =["logo.PNG","Wrld_on_Drugs.jpg","freebeat1.jpg"];
var sources = ["Cursed.mp3","ok.mp3","freebeat1.mp3"];
var songname =["Cursed","WRLD On Drugs","Freebeat"];
var albumArtist = ["Album2020-Juice WRLD","Album2020-Future","Yt FreeCC"];
var pfad = 'C:\\Users\\david\\Documents\\HTML-stuff\\Projekt\\' ;
var currentsong =1;
var song =document.getElementById(songs[currentsong]);




var imageplay =Boolean(true);
var a = "hidden";


function playmusic() {
    volume();
  if(isplaying){
      song.pause();
        isplaying = Boolean(false);
        stopAndPlayIcon();
}else {
  song.play();
  isplaying = Boolean(true);
  setInterval(time,1000);
  setInterval(auto,1500);
  stopAndPlayIcon();
}
}


function forward() {
  isplaying = Boolean(false);
  nummerStueck++;

  currentsong++;

    song.pause();
    song.currentTime =0;
    song = document.getElementById("Future");
   song = document.getElementById("Future");

    var image = document.getElementById(song[currentsong]);
    image.src = "Wrld_on_Drugs.jpg";
    document.getElementById("lied").innerHTML="WRLD On Drugs";
    document.getElementById("Album").innerHTML="Album2020-Future";
    document.getElementById("range").value =0;
    playmusic();

}

function backward() {
isplaying = Boolean(false);
  if(nummerStueck > 1){
    nummerStueck--;
  }
  song.pause();
    song.currentTime =0;
  song = document.getElementById("JuiceWrld");
  var image = document.getElementById("change");
  image.src = "logo.PNG";
  document.getElementById("lied").innerHTML="Cursed";
  document.getElementById("Album").innerHTML="Album2020-Juice WRLD";
 document.getElementById("range").value =0;
  playmusic();


}



function  range(){
  var test = document.getElementById("range");
  song.currentTime= song.duration/100*test.value;
  time();
  auto();
}
function stopAndPlayIcon() {
      var bild = document.getElementById("bild");
if(imageplay){

  bilds.src = "stop.png";
  imageplay =false;
}else{
  bild.src ="Play.png";
imageplay=true;
}
}


function time(){
var t =current(song.currentTime+"")

document.getElementById("start").innerHTML =t;

  document.getElementById("la").innerHTML = current(song.duration);
  document.getElementById("range").Value = Math.round(song.currentTime * 100) / 100;
  if(song.currentTime==song.duration){
    forward();
  }
}

function current(time) {
  var count =0;
time = parseInt(time);
  while(time >59){
    count++;
    time= time - 60;
  }

  time =Math.round(time);
  var ti = time.toString();

  if(ti.length ==1){
     ti = 0+""+ti;
  }

  return  count +":"+ti;
}

function volume(){
  var reglerValue= document.getElementById("r");
 song.volume =   reglerValue.value/10;
 if(reglerValue.value <=0){
   document.getElementById("hhh").src ="nosound.png";
 }else {
   document.getElementById("hhh").src ="volume.jpg";
 }
}

function auto() {
  var result = ((100*song.currentTime)/song.duration);
  var test = document.getElementById("range").value=result;

}

function test() {
  if(a == "visible"){
    a = "hidden";
    document.getElementById("r").style.visibility="hidden";
  }else {
    a = "visible";
  document.getElementById("r").style.visibility="visible";
}
}
