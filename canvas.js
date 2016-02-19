var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
//ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height/2);


ctx.fillStyle = "#000000";


for ( i = 1; i < 100 ; i++){

    ctx.fillStyle = "#" + i%10 + i%10 + "0000";
    
    ctx.fillRect(    ctx.canvas.width* ((i-1)/100)/2
		   , ctx.canvas.height* ((i-1)/100)/2
		   , ctx.canvas.width - ctx.canvas.width * ((i-1)/100)
		   , (ctx.canvas.height - ctx.canvas.height  * ((i-1)/100)));
}
