window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();
var osc = context.createOscillator();
osc.frequency.value = 440;
osc.type = "triangle";
osc.connect(context.destination);

function startosc(val){
    osc = context.createOscillator();
osc.frequency.value = val;
osc.type = "square";
osc.connect(context.destination);
osc.start(0)
}
function stoposc(){osc.stop(0);}