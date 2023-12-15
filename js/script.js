$(document).ready(function () {
    // Image slider previous button 
    $('.product .product-images i.left').click(function () {
        const currentImg = $('.product .product-images .slider .show');
        const prevImg = currentImg.prev();

        const currentPointer = $('.product .product-images ul li.active');
        const prevPointer = currentPointer.prev();

        if (prevImg.length) {
            currentImg.removeClass('show');
            prevImg.addClass('show');

            currentPointer.removeClass('active');
            prevPointer.addClass('active');
        }
    });

    // Image slider next button 
    $('.product .product-images i.right').click(function () {
        const currentImg = $('.product .product-images .slider .show');
        const nextImg = currentImg.next();

        const currentPointer = $('.product .product-images ul li.active');
        const nextPointer = currentPointer.next();

        if (nextImg.length) {
            currentImg.removeClass('show');
            nextImg.addClass('show');

            currentPointer.removeClass('active');
            nextPointer.addClass('active');
        }
    });
    
    // To make zoom when move mouse over image
    $('.product-images .slider').on("mousemove", function(event) {
        const x = event.clientX - $(this).offset().left;
        const y = event.clientY - $(this).offset().top;

        $('.product-images .slider img').css({
            transformOrigin: `${x}px ${y}px`,
            transform: "scale(1.6)",
            cursor: "crosshair"
        });
    });

    // Stoped zoom when leave image
    $('.product-images .slider').mouseleave(function(event) {
        $('.product-images .slider img').css({
            transformOrigin: "center",
            transform: "scale(1)"
        });
    });

    // Hide advert bar 
    $('.header .advert i').click(function () {
        $('.header .advert').hide();
    });

    // Hide Fixed box when clicked
    $('.fixed-box .links a').click(function () {
        $('.fixed-box').hide();
    });

    // Scroll up when the button is clicked
    $('.scroll-up').click(function () {
        window.scrollTo(0, 0);
    });

    // Hide button when scrolling up
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.scroll-up').css("display", "block");
        }
        else {
            $('.scroll-up').css("display", "none");
        }
    });

    // make border-bottom for main header on scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header:not(:first-child)').css("border-bottom", "1px solid #ccc");
            // $('.header .main-list div div').css("background-color", "rgb(255 255 255 / 95%)");
        }
        else {
            $('.header:not(:first-child)').css("border-bottom", "none");
        }
    });

    // product-size button click event
    $('.product .product-main-info .product-size .sizes p').click(function () {
        var currentButton = $(this).attr("class");

        $(`.product .product-main-info .product-size div:first-child .${currentButton}`).css("display", "block");
        $(`.product .product-main-info .product-size div:first-child div:not(.${currentButton})`).css("display", "none");

        $(`.product .product-main-info .product-size .sizes p.${currentButton}`).css("outline", "2px solid black");
        $(`.product .product-main-info .product-size .sizes p:not(.${currentButton})`).css("outline", "0");

    });


    // Heart counter and change icon for all heart icon in website
    var counter = 0;
    // when make like 
    $('i.disliked').click(function () {
        // This to get the first name of class from parent of clicked heart icon
        // liked "box[number] product-images " we get "box[number]" 
        // and "col product-images " we get "col" name
        var parentClassName = $(this).parent().attr("class").split(" ")[0];

        $(`.${parentClassName} i.disliked`).css("display", "none");
        $(`.${parentClassName} i.liked`).css("display", "block");

        $('.header .main-navbar .favorite .favorite-count').text(++counter);
    });

    // when make dislike 
    $('i.liked').click(function () {
        var parentClassName = $(this).parent().attr("class").split(" ")[0];

        $(`.${parentClassName} i.liked`).css("display", "none");
        $(`.${parentClassName} i.disliked`).css("display", "block");
        $('.header .main-navbar .favorite .favorite-count').text(--counter);
    });

})

