var mouseEvent = "Empty";
canavs = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "Red";
Width_of__line =2;
canvas.addEventlistner("mousedown", my_mousedown);
function my_mousedown(e) {
color = document.getElementById("color").value;
Width_of__line = document.getElementById("Width_of__line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}
canvas.addEventlistner("mousemove" , my_mousemove);
function my_mousemove(e) {
var currrent_position_of_mouse_x = e.clientX - canvas.offsetLeft;
var currrent_position_of_mouse_y = e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown"){
 console.log("current position ofX and Y coordinates =")
console.log("x = "+currrent_position_of_mouse_x +", Y = "+currrent_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = Width_of__line;
ctx.arc(currrent_position_of_mouse_x,currrent_position_of_mouse_y,radius ,0 ,2* Math.PI);
ctx.stroke();
 
 }

}
canvas.addEventlistner("mouseup" , my_mouseup);
function my_mouseup(e) { 
mouseEvent = "mouseup";
}
canvas.addEventlistner("mouseleave" , my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}
function Clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);






}
