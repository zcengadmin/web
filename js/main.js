(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{ items:1 },
            576:{ items:1 },
            768:{ items:1 },
            992:{ items:2 },
            1200:{ items:2 }
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // EmailJS Integration
    (function ($) {
        "use strict";
    
        // Initialize EmailJS with your Public Key
        emailjs.init("6uff1r20Z7KN3vc__"); // Replace with your actual Public Key
    
        // Form Submission Handler
        $("#emailForm").submit(function (event) {
            event.preventDefault();
    
            // Get Form Data
            var templateParams = {
                to_name: "Recipient",  // Optional: Set recipient name dynamically if needed
                from_name: $("#name").val().trim(),
                from_email: $("#email").val().trim(),
                subject: $("#subject").val().trim(),
                message: $("#message").val().trim()
            };
    
            // Validation: Ensure required fields are filled
            if (!templateParams.from_name || !templateParams.from_email || !templateParams.subject || !templateParams.message) {
                alert("Please fill in all fields before submitting!");
                return;
            }
    
            // Send email using EmailJS
            emailjs.send("service_uaugzd4", "template_usq90ob", templateParams)
                .then(function(response) {
                    alert("✅ Email sent successfully!");
                    $("#emailForm")[0].reset(); // Reset form fields
                })
                .catch(function(error) {
                    alert("❌ Failed to send email. Please try again.");
                    console.error("EmailJS error:", error);
                });
        });
    
    })(jQuery);
    
    
      

})(jQuery);
