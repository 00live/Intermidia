
 const imgs = document.getElementById('img');
 const img = document.querySelectorAll("#img img"); 
 
 let idx = 0;

 
    function carrosel(){
           idx++;
           
           if(idx > img.length - 1){
            idx = 0;
        }

        imgs.style.transform = `translateX(${-idx * 767}px)`;
    }

    setInterval(carrosel, 4000);





    window.sr = ScrollReveal({reset:true});
    ScrollReveal().reveal('.sub_txt1', {
        duration:2000,
        rotate: {x:30, y:00, z:0}
    
    });

    ScrollReveal().reveal('.sub_txt2', {duration:2000,
        rotate: {x:30, y:0, z:0}});
    ScrollReveal().reveal('.sub_txt3', {duration:2000,
        rotate: {x:30, y:0, z:0}});

        ScrollReveal().reveal('#p_1', {duration:3000,})
        ScrollReveal().reveal('#p_2', {duration:4000,})    