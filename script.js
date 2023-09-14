$(function () {
    $('.info1dv').click(function (e) {
        var slidingID = $(this).attr('href');
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(slidingID).offset().top - 1 }, 1000);
    });
    $('[href="#"]').attr('href', 'javascript:;');
    $('.logosSlider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.portfolioDv').slick({
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        arrows: false,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        dots: false
    });
    $('.portfolioDvinfo .arrowsDv a').on('click', function () {
        if ($(this).hasClass('pagerDvnext')) {
            $('.portfolioDv').slick('slickNext');
        }
        if ($(this).hasClass('pagerDvprev')) {
            $('.portfolioDv').slick('slickPrev');
        }
    });
    $('.banSlider, .serviceSlider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear'
    });
    if ($(window).width() < 768) {
        $('.noslide').remove();
        $('.mobiSlider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            mobileFirst: true
        });

        $('.reviewSlider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            mobileFirst: true
        });

        var topwidtH = $('slide .col-md-7').width();

        $('.textslider').css({ 'width': topwidtH });

    }
    $(".formdiv .toggle span").click(function () {
        $('.formdiv').addClass("popformkhulwana");
    });
    $(".formdiv .toggle .croxDv").click(function () {
        $('.formdiv').removeClass("popformkhulwana");
    });

    $('#appCalculator').on('show.bs.collapse', function () {
        document.querySelector('#accordion-icon').classList.add('rotate');
    })
    $('#appCalculator').on('hidden.bs.collapse', function () {
        document.querySelector('#accordion-icon').classList.remove('rotate');
    })


    $(".popupFormOpen").click(function () {
        $('.formdiv').addClass("popformkhulwana");
    });

    var header = document.getElementById("myHeader");
    header.classList.add('sticky-header');


    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows: false
    });

    $('.testi-slide-arrow').on('click', function () {
        if ($(this).hasClass('testi-next-arrow')) {
            $('.testi-slider').slick('slickNext');
        }
        if ($(this).hasClass('testi-prev-arrow')) {
            $('.testi-slider').slick('slickPrev');
        }
    });

    $('#mobilePortfolio').slick({
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        arrows: false,
        speed: 500,
        autoplaySpeed: 500,
        slidesToShow: 1,
        dots: false,
        fade: true,
    });

    const forms = document.querySelectorAll("form");

    // Show Error
    const showError = (input, message) => {
        const formGroup = $(input).closest('.form-group')[0];
        formGroup.className = "form-group error";

        if ($(formGroup).find("small").length !== 0) {
            $(formGroup).find("small").remove();
        }

        const small = document.createElement("small");
        small.innerText = message;

        formGroup.appendChild(small);
    }

    //Show Success
    const showSuccess = (input) => {
        const formGroup = $(input).closest('.form-group')[0];
        formGroup.className = "form-group success";

        if ($(formGroup).find("small").length !== 0) {
            $(formGroup).find("small").remove();
        }
    }

    // Check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, 'Email is not valid');
        }
    }

    // Get fieldname
    function getFieldName(input) {
        return input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }

    // Check required fields
    function checkRequired(inputArr) {
        let isRequired = false;
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`);
                isRequired = true;
            } else {
                showSuccess(input);
            }
        });

        return isRequired;
    }

    // Check input length
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(
                input,
                `${getFieldName(input)} must be at least ${min} characters`
            );
        } else if (input.value.length > max) {
            showError(
                input,
                `${getFieldName(input)} must be less than ${max} characters`
            );
        } else {
            showSuccess(input);
        }
    }

    // Loop over them
    Array.from(forms).forEach((form) => {

        //init country dropdwn
        const phoneInput = $(form).find(".phone-number")[0];
        const iti = window.intlTelInput(phoneInput, {
            // any initialisation options go here
            utilsScript: "https://intl-tel-input.com/intl-tel-input/js/utils.js?1690975972744",
        });

        $(phoneInput).val("+" + iti.getSelectedCountryData().dialCode);

        phoneInput.addEventListener("countrychange", function () {
            // do something with iti.getSelectedCountryData()
            $(this).val("+" + iti.getSelectedCountryData().dialCode);
        });

        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                const name = $(form).find('[name="Name"]')[0];
                const email = $(form).find('[name="Email"]')[0];
                const phone = $(form).find('[name="Phone"]')[0];
                const message = $(form).find('[name="Message"]')[0];

                if (checkRequired([name, email, phone, message])) {
                    checkLength(name, 3, 35);
                    checkLength(phone, 10, 16);
                    checkEmail(email);
                } else {
                    var formData = $(form).serialize();
                    $.ajax({
                        type: "POST",
                        url: "https://pebtechsolutions.com/top-mobile-app-development-company-usa/send-email.php",
                        dataType: "json",
                        data: formData,
                        success: function (response) {
                            if (response.success) {
                                form.reset();
                                location.replace("https://pebtechsolutions.com/thank-you.html");
                            } else { }
                        },
                        error: function (xhr, status, error) {
                            console.log(xhr);
                        },
                    });
                }
            },
            false
        );
    });

});

function toggleChild() {
    const parent = $(this).closest("div").find('.child-option');

    if (this.checked) {
        if ($(parent).length !== 0) {
            $(parent).addClass('show');
        }
    } else {
        if ($(parent).length !== 0) {
            $(parent).removeClass('show');
        }
    }
}

function calculateTotal() {
    const checkboxes = document.querySelectorAll('#calculatorModal input[type="checkbox"]');
    let total = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            total += (Number(checkbox.value));

        }
    });

    // Update the total displayed on the page
    document.getElementById('total').innerText = total;
}

// Add event listeners to checkboxes to trigger the calculation
var checkboxes = document.querySelectorAll('#calculatorModal input[type="checkbox"]');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', calculateTotal);
    checkbox.addEventListener('change', toggleChild)
});
