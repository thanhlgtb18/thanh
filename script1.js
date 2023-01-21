let slides = document.querySelectorAll('.screen-box');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function back(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}







  const loginPopup = document.querySelector(".login-popup");
  const loginPopup2 = document.querySelector(".login-popup2");
  const close = document.querySelector(".close");
  const btn = document.querySelector(".btn");
  const close2 = document.querySelector(".close2");
  const btn2 = document.querySelector(".btn2");


  window.addEventListener("load",function(){
 
   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)


  })

  function showPopup(){
        const timeLimit = 1 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })
  
  
   btn.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })


     function showPopup2(){
        const timeLimit = 17 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup2.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close2.addEventListener("click",function(){
    loginPopup2.classList.remove("show");
  })
  
  
   btn2.addEventListener("click",function(){
    loginPopup2.classList.remove("show");
  })

