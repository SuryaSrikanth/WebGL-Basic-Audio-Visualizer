var  myName = document.querySelectorAll("#myName path");
var t = 6;
myName.forEach(function(i){
  i.style.strokeDasharray = i.getTotalLength()+"px";
  i.style.strokeDashoffset = i.getTotalLength()+"px";
  i.style.animation = "anim 2s ease forwards"+" " + t +"s";
  t = t+0.4;
});

var des = document.querySelector("#myName");
des.style.animation = "fillsvg 0.4s ease forwards"+" "+ (t+1.1) + "s";