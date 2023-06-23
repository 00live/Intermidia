
    var slider = document.querySelectorAll('.slider');
    var prev_bt =document.getElementById("prev_bt");
    var next_bt = document.getElementById("next_bt");



    let currentSlide = 0;
         
    function hideSlider() {
        slider.forEach(item => item.classList.remove('on_c2'))
        
      }

        
      function showSlider() {
        slider[currentSlide].classList.add('on_c2')
      }

      function nextSlider() {
        hideSlider()
        if(currentSlide === slider.length -1) {
          currentSlide = 0
        } else {
          currentSlide++
        }
        showSlider()
      }


      function prevSlider() {
        hideSlider()
        if(currentSlide === 0) {
          currentSlide = slider.length -1
        } else {
          currentSlide--
        }
        showSlider()
      }

       

        next_bt.addEventListener('click', nextSlider);
        prev_bt.addEventListener('click', prevSlider);



var slider_c2 = document.querySelectorAll('.slider_c2');
var prev_bt_c2 =document.getElementById("prev_bt_c2");
var next_bt_c2 = document.getElementById("next_bt_c2"); 


let currentSlide_c2 = 0;
         
    function hideSlider_c2() {
      slider_c2.forEach(item => item.classList.remove('on'))
      }

        
      function showSlider_c2() {
        slider_c2[currentSlide_c2].classList.add('on')
      }




      function nextSlider_c2() {
        hideSlider_c2()
        if(currentSlide_c2 === slider_c2.length -1) {
          currentSlide_c2 = 0
        } else {
          currentSlide_c2++
        }
        showSlider_c2()
      }
      function prevSlider_c2() {
        hideSlider_c2()
        if(currentSlide_c2 === 0) {
          currentSlide_c2 = slider_c2.length -1
        } else {
          currentSlide_c2--
        }
        showSlider_c2()
      }

      next_bt_c2.addEventListener('click', nextSlider_c2);
      prev_bt_c2.addEventListener('click', prevSlider_c2);


      var bt = document.getElementById('bt_conheca');

       bt.addEventListener("click",
        function href(){
          window.location.href = "/Contato/Index.html"
        setTimeout(() => { href() },2000);
        
        })
      