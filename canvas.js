var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height/2);



function rectangularTunnel(c, ctx, ULx, ULy, BRx, BRy){
    
    ctx.fillStyle = "#000000";

    var scaleFactor = 1;

    var w = ctx.canvas.height;
    var h = ctx.canvas.height;

    for ( i = 1; i < 255 ; i++){

    

	ctx.fillStyle = "#" + "00" + i.toString(16) + "00";
    
	ctx.fillRect(        BRx  * ((i-1)/265)/2 * (2-scaleFactor)
			   
			   , BRy  * ((i-1)/256)/2 * (2-scaleFactor)
		     
			   , BRx   - BRx   * ( (i-1) / 256  ) * scaleFactor
		     
			   ,(BRy - BRy  * ( (i-1) / 256) * scaleFactor ));
    }
}

rectanuglarTunnel(c, ctx, 0, 0, ctx.canvas.width, ctx.canvas.height);
