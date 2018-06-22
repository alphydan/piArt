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
    change = (window.temp-1200)/2
    fill(255,255-change,255-change);
    ellipse(500,300,100+1.2*change+random(1)/3, 100+1.2*change+random(1)/3)
    console.log( window.temp)

    // Text
    fill(0,102, 153);
    textSize(32);
    text('H', 490, 310);


}



            var ws = new WebSocket("ws://127.0.0.1:5678/"),
            messages = document.createElement('ul');
            ws.onmessage = function (event) {
			window.temp = parseInt(event.data);
                // var messages = document.getElementsByTagName('ul')[0],
                //    message = document.createElement('li'),
                //    content = document.createTextNode(event.data);
	        // window.temp = document.createTextNode(event.data);
	    	    	   //  console.log(content)
                // message.appendChild(content);
                // messages.appendChild(message);
 
           };
            // document.body.appendChild(messages);
