var canvas = document.querySelector(".canvas");
var ctx= canvas.getContext("2d");

    ctx.lineWidth='1'
    ctx.strokeStyle="black"
    ctx.strokeRect(50,20,200,100);
    
    ctx.moveTo(50,20);
    ctx.lineTo(250,120);
    ctx.stroke();

    ctx.moveTo(250,20);
    ctx.lineTo(50,120);
    ctx.stroke()

    ctx.moveTo(150,20);
    ctx.lineTo(150,120);
    ctx.stroke()

    ctx.moveTo(50,70);
    ctx.lineTo(250,70);
    ctx.stroke()

   
    // ctx.fillStyle="black"
    // ctx.arc(10,140,5,0,2*Math.PI);
    // ctx.fill();

   //  var depl_1 =document.querySelector(".vato1");
   //  var x1=50,y1=70;

   //  depl_1.addEventListener('click',deplacement1);
   //  function deplacement1(){
   //  //    x,y-=8;
   //     ctx.beginPath(); 
   //     ctx.arc(x1,y1,5,0,2*Math.PI)
   //     ctx.fill();
   //  }

   //  var depl_2 =document.querySelector(".vato2");
   //  var x2=250,y2=120;

   //  depl_2.addEventListener('click',deplacement2);
   //  function deplacement2(){
   //  //    x,y-=8;
   //     ctx.beginPath(); 
   //     ctx.arc(x2,y2,5,0,2*Math.PI)
   //     ctx.fill();
   //  }
   //  var depl_3 =document.querySelector(".vato3");
   //  var x3=150,y3=70;

   //  depl_3.addEventListener('click',deplacement3);
   //  function deplacement3(){
   //  //    x,y-=8;
   //     ctx.beginPath(); 
   //     ctx.arc(x3,y3,5,0,2*Math.PI)
   //     ctx.fill();
   //  }
   //  var depl_4 =document.querySelector(".vato4");
   //  var x4=250,y4=70;

   //  depl_4.addEventListener('click',deplacement4);
   //  function deplacement4(){
   //  //    x,y-=8;
   //     ctx.beginPath(); 
   //     ctx.arc(x4,y4,5,0,2*Math.PI)
   //     ctx.fill();
   //  }
      
   var cmp= document.querySelector(".cmp");
   var c=0;

   var apvony = document.querySelector('.vato3');
      apvony.addEventListener('click',aparition1);
      function aparition1(){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d7').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
      }
   var apvony_droite = document.querySelector('.vato4');
      apvony_droite.addEventListener('click',aparition2);
      function aparition2(){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d4').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation}
         
      }
   var B_G = document.querySelector('.vato1');
      B_G.addEventListener('click',aparition3);
      function aparition3(){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d8').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
         
      }
   var B_b_l = document.querySelector('.vato6');
      B_b_l.addEventListener('click',aparition4);
      function aparition4(){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d9').style.display="block";
            document.querySelector('.d10').style.display="block";
            document.querySelector('.d10').style.backgroundColor="red"
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
         
      }
   var B_B = document.querySelector('.vato5');
      B_B.addEventListener('click',aparition5);
      function aparition5(){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d10').style.display="block";
            document.querySelector('.d6').style.display="block";
            document.querySelector('.d6').style.backgroundColor="red"
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
         
      }

      var B_1 = document.querySelector('.vato7');
      B_1.addEventListener('click',aparition6);
      function aparition6(){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d2').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
         
      }
      var B_2 = document.querySelector('.vato8');
      B_2.addEventListener('click',aparition7); 
      function aparition7(){
         ++c
         if(cmp.innerHTML<3){
            document.querySelector('.d3').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
         
      }
      var B_3 = document.querySelector('.vato9');
      B_3.addEventListener('click',aparition8);
      function aparition8(){
         ++c;
         
         if(cmp.innerHTML<3){
            document.querySelector('.d5').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
         
      }
      var B_B = document.querySelector('.vato2');
      B_B.addEventListener('click',aparition9);
      function aparition9(e){
         ++c;
         if(cmp.innerHTML<3){
            document.querySelector('.d6').style.display="block";
            cmp.innerHTML=c;
         }else{e.stopPropagation;}
      }

    var d1 = document.querySelector('.d1');
      d1.addEventListener('click',dp1);
      function dp1(){
         document.querySelector('.d2').style.transform ="translateY(9.5em)";
      }

      var d2 = document.querySelector('.f2');
        d2.addEventListener('click',dp2);
        function dp2(){
           document.querySelector('.d3').style.transform ="translateY(-10.3em)";
        }

   var limitation = document.querySelector('.commande');

