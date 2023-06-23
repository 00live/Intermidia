
    var lay3 = document.getElementById('lay3')

    var  txt = document.getElementById('title_lay3');
    var  img1 = document.getElementsByClassName("imgs1_lay3");
    var img2 = document.getElementsByClassName('imgs_lay3');


    lay3.addEventListener("mouseover", function(){ 
       txt.classList.add('animation_txt');

       img1.classList.add('animation_img1');
       img2.classList.add("animation_img2");
    })