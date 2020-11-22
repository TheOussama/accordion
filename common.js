let pHeahders = document.querySelectorAll(".panel-header");

for(let i=0; i <pHeahders.length ; i++){
  pHeahders[i].addEventListener("click", function(){
  
    let panelBody = this.nextElementSibling;
    let pHeaderChildren = this.children;

    if(panelBody.style.maxHeight){
      panelBody.style.maxHeight = null;
       pHeaderChildren[1].style.display="block";
       pHeaderChildren[2].style.display="none";
       this.style.backgroundColor ="#379683";
       this.parentElement.style.backgroundColor ="#379683";
       
    }else {
      panelBody.style.maxHeight ="15rem";
      pHeaderChildren[2].style.display="block";
       pHeaderChildren[1].style.display="none";
       this.style.backgroundColor ="#05386b";
       this.parentElement.style.backgroundColor ="#05386b";
    }
  });
}