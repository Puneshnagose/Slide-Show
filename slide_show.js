let gallery=document.getElementById("gallery");
let clr=null;
let img=document.querySelectorAll("img");
let stop=document.querySelector(".green");


function start(){
    gallery.style.scrollBehavior="smooth";
    let firstIndex=0;
    function show(){
        let clear=setInterval(show,2000);
        
         for(let i=0;i<img.length;i++){
            img[i].style.display="none";
         }
         firstIndex++;
         if(firstIndex>img.length-1){
            firstIndex=1;
         }
         img[firstIndex-1].style.display="block";
    }
   show()

stop.innerText="Stop";
if(stop.innerText="Stop"){
    stop.addEventListener("click",()=>{
        clearInterval(clr);
        
        stop.innerText="Start" ;
        window.location.reload()
    })
}
}

function next(){
    
    clearInterval(clr);
   gallery.style.scrollBehavior="smooth"
   gallery.scrollLeft+=700  
     
         
}
function back(){
    clearInterval(clr);
    gallery.style.scrollBehavior="smooth"
   gallery.scrollLeft-=700  
}
