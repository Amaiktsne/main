window.addEventListener("DOMContentLoaded", function() {

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })
})

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();  

    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    alert('E-mail enviado: ' + email);

    window.location.href = 'mailto:amaiktsne@gmail.com';
});

