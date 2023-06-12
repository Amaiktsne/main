window.addEventListener("DOMContentLoaded", function() {

//     var form = document.querySelector("form");
//     var nameInput = document.getElementById("name");
//     var emailInput = document.getElementById("email");
//     var messageInput = document.getElementById("message");


//     form.addEventListener("submit", function(event) {
// event.preventDefault(); 


//     var name = nameInput.value;
//     var email = emailInput.value;
//     var message = messageInput.value;


//     console.log("Nome:", name);
//     console.log("Email:", email);
//     console.log("Mensagem:", message);


//     nameInput.value = "";
//     emailInput.value = "";
//     messageInput.value = "";
//     });
// });

// $(document).ready(function(){
//     $('#carrossel_imagens').slick({
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 1000,
//     });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })
})
