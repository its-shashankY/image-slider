

     setInterval(()=>{
     var blur=document.getElementById("blur").value;
     var brt=document.getElementById("brt").value;
     var gry=document.getElementById("gry").value;
     var hue=document.getElementById("hue").value;
     var inv=document.getElementById("inv").value;
     var opa=document.getElementById("opa").value;
     var sep=document.getElementById("sep").value;
     document.getElementById("image").style.filter="blur("+blur+"px) brightness("+brt+"%) grayScale("+gry+"%) hue-rotate("+(hue*360)/100+"deg) invert("+inv+"%) opacity("+opa+"%) sepia("+sep+"%)";
     document.querySelector("#val1").innerHTML=blur+"%";
     document.querySelector("#val2").innerHTML=brt+"%";
     document.querySelector("#val3").innerHTML=gry+"%";
     document.querySelector("#val4").innerHTML=hue+"%";
     document.querySelector("#val5").innerHTML=inv+"%";
     document.querySelector("#val6").innerHTML=opa+"%";
     document.querySelector("#val7").innerHTML=sep+"%";
     },100)
     
     
     var butClick=true;
     function butChange(){
     if(butClick==true){
         document.querySelector("button").style.marginLeft="50%";
         document.querySelector("button").style.borderRadius="20px 0px 0px 20px";
     document.querySelector("#allValue").style.height="340px";
         }
     else{
         document.querySelector("button").style.marginLeft="38%";
         document.querySelector("button").style.borderRadius="25px";
       document.querySelector("#allValue").style.height="0px";
      
     }
     butClick=!butClick;
     }
     
        