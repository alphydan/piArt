// Open Connection to the Server
var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
window.sensordata = JSON.parse(event.data);
// window.sensordata = event.data;
 };

function setup() {
    // put setup code here
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    frameRate(10);
}


function draw() {
    // Get the sensor variables defined if they exist
    if(typeof window.sensordata === "undefined"){
	// hard code the vars to avoid error
	humidity = 42;
	temperature = 30;
	pressure = 700;
	roll = 0;
	pitch = 0;
	yaw = 0;
	acceleration = 1;
	magnet = 15;
        console.log(window.sensordata);
    } else {
	// read them from the sensors
        humidity = window.sensordata.humidity;
        temperature = window.sensordata.temperature;
        pressure = window.sensordata.pressure;
        roll = window.sensordata.roll;
	pitch = window.sensordata.pitch;
	yaw = window.sensordata.yaw;
        acceleration = window.sensordata.acceleration;
	magnet = window.sensordata.magnet;
     }

    // The drawing 
//    background(0);

    boom = random(100);
    boost = 0;
    if (boom <= 20){
	boost = boom
    }


    fill(255,255-2*humidity,255-2*humidity);
    ellipse(500,650-pressure/2,100+1.2*humidity+random(1), 100+1.2*humidity+random(1));


    // Text
    fill(0,102, 153);
    textSize(32);
    text('H', 490, 310);

   }




