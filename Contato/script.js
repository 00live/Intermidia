var bt_lay2 = document.getElementById("bt2");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var num = document.getElementById("numero")


bt_lay2.addEventListener("click", function(){
   
   
    if(nome.value == ""){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Prencha o Campo do "Nome"',
        
      })
}  else if( email.value =="" ) {
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Preencha o campo do "E-Mail"',
  })
}   else if(num.value == "") {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha o campo "Numero"',
        footer: '<a href="">Why do I have this issue?</a>'
      })} else {
        function href(){window.location.href = "/Pagina Inicial/Index.html"}
        setTimeout(() => { href() },2000);
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });

            

       
       
    }



 
}
  
        )