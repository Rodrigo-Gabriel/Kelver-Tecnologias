window.addEventListener("scroll",()=>{

const header=document.getElementById("header");

if(window.scrollY>50){

header.style.background="rgba(8,27,51,.85)";

}else{

header.style.background="rgba(10,20,40,.45)";

}

});