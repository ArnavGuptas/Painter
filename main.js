canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mouseevent="empty"
currentposx=""
currentposy=""
lastposx=""
lastposy=""
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
mouseevent="mousedown"
console.log(mouseevent)
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseevent="mouseup"
    console.log(mouseevent)
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseevent="mouseleave"
    console.log(mouseevent)
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    currentposx=e.clientX - canvas.offsetLeft
    currentposy=e.clientY - canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.lineWidth=document.getElementById("width").value
        ctx.strokeStyle=document.getElementById("color").value
        ctx.moveTo(lastposx, lastposy)
        ctx.lineTo(currentposx,currentposy)
        ctx.stroke()
    }
     lastposx=currentposx
     lastposy=currentposy
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
currenttouchx=e.touches[0].clientX-canvas.offsetLeft
currenttouchy=e.touches[0].clientY-canvas.offsetTop
ctx.beginPath()
ctx.lineWidth=document.getElementById("width").value
ctx.strokeStyle=document.getElementById("color").value
ctx.moveTo(lasttouchx, lasttouchy) 
ctx.lineTo(currenttouchx,currenttouchy)
ctx.stroke()
lasttouchx=currenttouchx
lasttouchy=currenttouchy
}
function clearscreen(){
    ctx.clearRect(0,0,800,600)
}