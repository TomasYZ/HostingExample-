function setup() {
    createCanvas(140, 140);
}

function draw(){
 background(51);
 var c = color(175, 100, 220);
 var a = color(255, 204, 0);
 var b = color('rgb(0,0,255)');    
 strokeWeight(4);
 stroke(51);
 fill(c);  
 rect(20, 20, 60, 60); 
 strokeWeight(4);
 stroke(51);
 fill(a);  
 ellipse(75, 75, 80, 80);    
 stroke(255);
 line(85, 20, 85, 75);
 fill(b);    
}