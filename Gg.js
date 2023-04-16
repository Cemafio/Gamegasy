var canvas = document.getElementById("canvas");
// var ctx = document.getContext();
canvas.style.border="1px solid black"
canvas.style.width="500px";
canvas.style.height="500px"

var  ctx= canvas.getContext("2d");
    // ctx.strokeStyle="black";
    // lineWidth="2px"
    // ctx.strokeRect(0,0,100,50);
    ctx.moveTo(60,0)
    ctx.lineTo(60,300);
    ctx.stroke()
//deuxieme ligne
    ctx.moveTo(120,0)
    ctx.lineTo(120,300);
    ctx.stroke()
    //Ajout d'un x
    ctx.moveTo(120,0)
    ctx.lineTo(180,30)
    ctx.stroke()
    ctx.moveTo(180,0)
    ctx.lineTo(120,30)
    ctx.stroke()

    ctx.moveTo(0,60)
    ctx.lineTo(60,90)
    ctx.stroke()
    ctx.moveTo(0,90)
    ctx.lineTo(60,60)
    ctx.stroke()

    ctx.moveTo(120,150)
    ctx.lineTo(180,120)
    ctx.stroke()
    ctx.moveTo(120,120)
    ctx.lineTo(180,150)
    ctx.stroke()

    ctx.moveTo(240,60)
    ctx.lineTo(300,90)
    ctx.stroke()
    ctx.moveTo(240,90)
    ctx.lineTo(300,60)
    ctx.stroke()
        
    
    ctx.moveTo(120,60)
    ctx.lineTo(180,90)
    ctx.stroke()
    ctx.moveTo(120,90)
    ctx.lineTo(180,60)
    ctx.stroke()
    // ctx.strokeStyle="blue"

//troisieme ligne
    ctx.moveTo(180,0)
    ctx.lineTo(180,300);
    ctx.stroke()
//quatrieme ligne
    ctx.moveTo(240,0)
    ctx.lineTo(240,300);
    ctx.stroke()


//Ajout des colone maintenant
    ctx.moveTo(0,30)
    ctx.lineTo(300,30);
    ctx.stroke()
//deuxieme ligne
    ctx.moveTo(0,60)
    ctx.lineTo(300,60);
    ctx.stroke()
//troisieme ligne
    ctx.moveTo(0,90)
    ctx.lineTo(300,90);
    ctx.stroke()
//quatrieme ligne
    ctx.moveTo(0,120)
    ctx.lineTo(300,120);
    ctx.stroke()
//cienquieme ligne
    // 
        // ctx.moveTo(250,0)
    // ctx.lineTo(250,300);
    // ctx.stroke()

