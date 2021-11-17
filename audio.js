window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();
document.addEventListener("mousedown",enable)
document.addEventListener("mouseup",disable)
let active = false
let lastosc = 0;
var is_run = false
function enable(){
    active = true
    startosc(lastosc)
}
function disable(){
    active = false
    stoposc()
    lastosc = 0
}
var osc = context.createOscillator();
osc.frequency.value = 440;
osc.type = "triangle";
osc.connect(context.destination);
mainGainNode = context.createGain();
mainGainNode.connect(context.destination);
mainGainNode.gain.value = 50.5;
function startosc(val){
    osc = context.createOscillator();
osc.frequency.value = val;
osc.type = "sawtooth";
osc.connect(mainGainNode);
lastosc = val
if(active){osc.start(0);is_run = true}
}
function stoposc(){if(is_run){osc.stop(0); is_run = false}}