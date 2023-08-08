
// array for color
const color =["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

const btn=document.getElementById("btn");
const colorName=document.getElementById("color");
btn.addEventListener("click",function(){
    var hexColor="#";
  
    // length is 6 e.g #fffffff    '#' is already assign in hexcolor
    for(var i=0;i<6;i++){
        hexColor+=color[random()];

    }
    document.body.style.backgroundColor=hexColor;
    colorName.textContent=hexColor;
   
    

    
   
})

random =()=>{
return Math.floor(Math.random()*color.length);
}