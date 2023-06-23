
    

    
    var lay5 = document.getElementById('lay5');
    var textos = document.getElementById('')
    

    lay5.addEventListener("mouseover", function(){ 
        lay5.classList.add('luz')
    })

    lay5.addEventListener("mouseout", function(){ 
        lay5.classList.remove('luz')
    })

    var lay3= document.getElementById('lay3');
    var txt3= document.getElementById('txt_lay3');
    var sbTxt3= document.getElementById('sb_txt_lay3');


   
    lay3.addEventListener("mouseover", function(){ 
        txt3.classList.add('animação')
    })
  /*  lay3.addEventListener("mouseout", function(){ 
        txt3.classList.remove('animação')
    })*/