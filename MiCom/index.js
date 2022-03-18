let ul = document.querySelector(".maintop-right ul");
let lis = ul.querySelectorAll("li");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


let currentIndex = 0;
// 轮播图右翻
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

// 轮播图左翻
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


// 自动播放
let autoPlay = setInterval(function(){
    next.click();
    let d = new Date();
    let num = d.getSeconds();
},4000);




// 下拉菜单
let dropBox = document.querySelector(".drop-down");
let dropLis = document.querySelectorAll(".site-header .header-nav ul li");
let dropUl = dropBox.querySelector("ul");
let dropLis2 = dropUl.querySelector("li");

for(let i=0;i<dropLis.length;i++){
    
    dropLis[i].addEventListener("mouseenter",function(e){
        dropBox.style.height = "240px";
        dropUl.style.height = "200px";
        dropUl.style.display = "block";
        dropUl.style.opacity = 1;

        console.log(e.currentTarget,e.target);
   
        dropBox.addEventListener("mouseenter",function(){
            dropBox.style.height = "240px";
            dropUl.style.height = "200px";
            dropUl.style.display = "block";
            dropUl.style.opacity = 1;
        });


        dropBox.addEventListener("mouseleave",function(e){
            dropBox.style.height = "0";
            dropUl.style.height = "0";
            dropUl.style.opacity = 0;
            dropUl.style.display = "none";
        });
        
    })
    

    dropLis[i].addEventListener("mouseleave",function(){
        dropBox.style.height = "0";
        dropUl.style.height = "0";
        dropUl.style.opacity = 0;
        dropUl.style.display = "none";
    })
}









