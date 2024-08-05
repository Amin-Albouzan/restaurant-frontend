let cat1=document.getElementById('cat1');
let row1=document.getElementById('row1');
let row2=document.getElementById('row2');
let row3=document.getElementById('row3');
let row4=document.getElementById('row4');
let row5=document.getElementById('row5');
let row6=document.getElementById('row6');
let ferah=document.getElementById('ferah');
let seba=document.getElementById('seba');
let popomo1=document.getElementById('popomo1');
let popomo2=document.getElementById('popomo2');
let rasengan=document.getElementById('rasengan');
let chidori=document.getElementById('chidori');

   function amin(x)
   {




if(x.style.color === "white") {
    x.style.color = "gold";
} else {
    x.style.color = "white";
}





   }
    
// function pizza()
// { 
//     row1.remove();
// row2.style.display="inline"
   
  
// }


function pizza() { 

    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'flex'; 

}


function burger() { 
  
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'none'; 
    document.getElementById('row3').style.display = 'flex'; 
}

function stick() { 
  
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'none'; 
    document.getElementById('row3').style.display = 'none'; 
    document.getElementById('row4').style.display = 'flex'; 
}


function cheese() { 
  
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'none'; 
    document.getElementById('row3').style.display = 'none'; 
    document.getElementById('row4').style.display = 'none'; 
    document.getElementById('row5').style.display = 'flex'; 
}

function bars()
{document.getElementById('row2').style.display = 'none'; 
    document.getElementById('row3').style.display = 'none'; 
    document.getElementById('row4').style.display = 'none'; 
    document.getElementById('row5').style.display = 'none'; 
    document.getElementById('row5').style.display = 'none'; 
    document.getElementById('row6').style.display = 'none'; 
    document.getElementById('row1').style.display = 'flex';
    

}




function drink() { 
  
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'none'; 
    document.getElementById('row3').style.display = 'none'; 
    document.getElementById('row4').style.display = 'none'; 
    document.getElementById('row5').style.display = 'none'; 
    document.getElementById('row5').style.display = 'none'; 
    document.getElementById('row6').style.display = 'flex'; 
}



popomo1.addEventListener("click",next);
popomo2.addEventListener("click",next);
function next()
{
  


    
if(seba.style.display=='flex')
{  
    ferah.style.display='flex';
  
       seba.style.display='none';
    
   

}


else
{
    ferah.style.display='none';
       seba.style.display='flex';
    
    
 
}



}



 function sssa()
{

    if(rasengan.style.display==='none')
    {
        
         rasengan.style.display='flex';
        chidori.style.display='none';
      
       
        
       
    
    }
    else
    {
      
        chidori.style.display='flex';
        rasengan.style.display='none';
        
        
     
    }



}









