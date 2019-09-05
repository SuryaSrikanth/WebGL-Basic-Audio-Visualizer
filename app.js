var loc;
function sourceChange(){
loc = document.getElementById('file').files[0];
var fReader = new FileReader();
fReader.readAsDataURL(loc);
fReader.onloadend = function(event){

audio.src = event.target.result;
audio.play();
}
}
var audio = new Audio();

audio.src = "song.mp3";
audio.setAttribute("style", "width:100%;");
audio.controls = true;
audio.loop = true;
audio.autoplay = true;
window.addEventListener("load", initMp3Player, false);
var canvas,
ctx,
source,
context,
analyser,
fbc_array,
bars,
bar_x,
bar_width,
bar_height;


function initMp3Player() {
document.getElementById("audio_box").appendChild(audio);
context =  new AudioContext();
context.resume();  
analyser = context.createAnalyser();
canvas = document.getElementById("analyser_render");
ctx = canvas.getContext("2d");
source = context.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(context.destination);
frameLooper();
}

function frameLooper() {
window.requestAnimationFrame(frameLooper);
fbc_array = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(fbc_array);
// console.log(fbc_array);
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgb(140,0,250)";
bars = 100;
bar_width = 2;

for (var i = 0; i < bars; i++) {
bar_x = i * 3;
bar_height = fbc_array[i] / 5;
bar_height2 = fbc_array[i] / 4;
// ctx.fillRect(bar_x, canvas.height, bar_width,bar_height);
ctx.save();
ctx.translate(canvas.width / 2 + 10, canvas.height / 2 + 1);
ctx.rotate(((((i) * 360) / 100) * Math.PI) / 180);
ctx.fillRect(canvas.width / 40, canvas.height / 40, bar_width, 2);
ctx.fillStyle = "rgb(140,0,250,0.91)";
ctx.fillRect(
canvas.width / 6 + 2,
canvas.height / 6,
bar_width + 2,
bar_height / 3
);
ctx.fillStyle = "rgb(24,0,250,1)";
ctx.fillRect(
canvas.width / 50 + 2,
canvas.height / 50,
bar_width,
bar_height
);

//   ctx.fillStyle = "rgb(255,255,255,1)";
//   ctx.fillRect(
//     canvas.width / 50 + 2,
//     canvas.height / 50,
//     bar_width,
//     bar_height/2
//   );
ctx.translate(-10 - canvas.width / 2, -1 - canvas.height / 2);
//ctx.rotate(-i * 1.8 * Math.PI / 180);
ctx.restore();


}
// ctx2.clearRect(0, 0, canvas.width, canvas.height);
// ctx2.fillStyle = "rgb(140,0,250)";
// bars = 100;
// bar_width = 2;
// for (var i = 0; i < bars; i++) {
// bar_x = i * 3;
// bar_height = -fbc_array[i] / 5;

// ctx2.fillStyle = "rgb(24,0,250,1)";
// ctx2.fillRect(
// 2*i,
// canvas2.height,
// bar_width,
// bar_height
// );
// }
}
