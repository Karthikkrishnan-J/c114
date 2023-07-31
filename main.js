function preload(){

}
function setup(){
canva = createCanvas(640,480);
canva.position(110,250);
camera = createCapture(VIDEO);
camera.hide();
color = "";
}
function draw(){
image(camera,0,0,640,480);
fill("purple");
circle(70,30,50);
circle(70,450,50);
circle(570,30,50);
circle(570,450,50);
fill("blue");
rect(63, 53, 13,373);
rect(565, 53, 13,373);
rect(95, 445, 450,13);
rect(95, 25, 450,13);
tint(color);
}
function filter_img(){
console.log("new color in added to picture");
color = document.getElementById("color").value;
document.getElementById("color").innerHTML="";
}
function snap(){
save("your.png");
console.log("picture is saved")
}