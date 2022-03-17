let ul = document.querySelector(".maintop-right ul");
let lis = ul.querySelectorAll("li");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let currentIndex = 0;


function nextFunc(){
    next.addEventListener("click",function(e){
    e.preventDefault();

    currentIndex++;

    if(currentIndex >= lis.length){
        currentIndex = 0;
    }

    if(currentIndex !== 0){
        lis[currentIndex].style.zIndex = 1;
        lis[currentIndex-1].style.zIndex = 0;
        lis[currentIndex].style.opacity = 1;
        lis[currentIndex-1].style.opacity = 0;
        
    }else{
        lis[lis.length-1].style.zIndex = 0;
        lis[0].style.zIndex = 1;

        lis[lis.length-1].style.opacity = 0;
        lis[0].style.opacity = 1;
    }
    
    
});
}



function prevFunc(){
    prev.addEventListener("click",function(e){
    e.preventDefault();
    if(currentIndex === 0){
        lis[0].style.zIndex = 0;
        lis[lis.length-1].style.zIndex = 1;
        lis[0].style.opacity = 0;
        lis[lis.length-1].style.opacity = 1;
        currentIndex = lis.length-1;
    }else{
        currentIndex--;
        lis[currentIndex].style.zIndex = 1;
        lis[currentIndex+1].style.zIndex = 0;
        lis[currentIndex].style.opacity = 1;
        lis[currentIndex+1].style.opacity = 0;
    }
})
}


prevFunc();
nextFunc();


let autoPlay = setInterval(function(){
    next.click();
    let d = new Date();
    let num = d.getSeconds();
    console.log(num);
},4000);




let dropBox = document.querySelector(".drop-down");
let dropLis = document.querySelectorAll(".site-header .header-nav ul li");

for(let i=0;i<dropLis.length;i++){
    dropLis[i].addEventListener("mouseover",function(){
        dropBox.style.height = "100px";
    })

    dropLis[i].addEventListener("mouseleave",function(){
        dropBox.style.height = "0";
    })
}





