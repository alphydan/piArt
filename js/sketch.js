// Open Connection to the Server
var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
window.sensordata = JSON.parse(event.data);
// window.sensordata = event.data;


function setup() {
    // put setup code here
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    frameRate(10);
}


function draw() {
    // put drawing code here
    background(0);


    boom = random(100);
    boost = 0;
    if (boom <= 20){
	boost = boom
    }
    change = window.sensordata.humi;
    fill(255,255-change,255-change);
    ellipse(500,300,100+1.2*change+random(1)/3, 100+1.2*change+random(1)/3);


    // Text
    fill(0,102, 153);
    textSize(32);
    text('H', 490, 310);

    console.log(window.sensordata);
   }
 };



