let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');


window.addEventListener("mousemove", cursor_f);

let main = document.querySelector(".main")
mainAfter = document.querySelector(".main"), ':after';

if(window.innerWidth>1000)
{


main.addEventListener("mousemove", function(e)
{
    let x = e.clientX / 250 * -1;
    let y = e.clientY / 90;

    main.style.backgroundPositionX = x + "px";
    main.style.backgroundPositionY = y + "px";


})}

let offer = document.querySelector("#offer");
let of1 = document.querySelector(".of1");
let of2 = document.querySelector(".of2");
let of3 = document.querySelector(".of3");
let of4 = document.querySelector(".of4");

if(window.innerWidth>1000)
{


offer.addEventListener("mousemove", function(e) 
{
    let x = e.clientX / 20;
    let y = e.clientY / 30;

    of1.style.transform = `translate(${0}, ${- 200 + y + "px" })`;
    of2.style.transform = `translate(${-360 - x + "px"}, ${0 - y + "px" })`;
    of3.style.transform = `translate(${360 + x + "px"}, ${0 + y + "px" })`;
    of4.style.transform = `translate(${0}, ${ 200 - y + "px" })`;
})}

function cursor_f(e)
{
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => 
    {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => 
    {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
});


function myFunction() {
    let menu = document.getElementById("menu");
   menu.classList.toggle("open");
    let button = document.getElementById("menu_btn");
    button.classList.toggle("otwarte");
    
  } 

//////////////////////////////////////////////////////////////////////////////////////////////////
const slides=document.querySelector(".gallery").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let gallery = document.querySelector(".gallery");
let index=0;


if(window.innerWidth > 1000) 
{
    prev.addEventListener("click",function(){
      prevSlide();
      resetTimer();
      prev.classList.add("clickPrev");
     setTimeout(function()
     {
        prev.classList.remove("clickPrev");

     },150)
  })

  next.addEventListener("click",function(){
     nextSlide(); 
     resetTimer();
     next.classList.add("clickNext");
     setTimeout(function()
     {
        next.classList.remove("clickNext");

     },150)

     
  })
}
else 
{
    gallery.addEventListener("click",function(){
        nextSlide(); 
        resetTimer();
    })
}


  

  function prevSlide(){
       if(index==0){
           index=slides.length-1;
       }
       else{
           index--;
       }
       changeSlide();
  }

  function nextSlide(){
     if(index==slides.length-1){
         index=0;
     }
     else{
         index++;
     }
     changeSlide();
  }

  function changeSlide()
  {
             for(let i=0; i<slides.length; i++){
                  slides[i].classList.remove("active");
             }

      slides[index].classList.add("active");
  }

  function resetTimer(){
        clearInterval(timer);
        timer=setInterval(autoPlay,4000);
  }

 
 function autoPlay(){
     nextSlide();
 }

 let timer=setInterval(autoPlay,5000);

  

  ////////////////////////////////////////////////////////////////
  
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
  
