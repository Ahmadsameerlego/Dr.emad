// sidebar Toggle icon
let toggleIcon = document.querySelector('.button');

toggleIcon.addEventListener('click', ()=>{
    document.querySelector('.navbar').classList.toggle('active')
})

// fixed header on scroll
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("header");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}


// back to top button

function backToTop() {
    $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
    });
}
backToTop();
$(window).on('scroll',function(){
    function scrollTopBtn() {
    var scrollToTop = $('#back-to-top'),
        scroll = $(window).scrollTop();
    if (scroll >= 50) {
        scrollToTop.fadeIn();
    } else {
        scrollToTop.fadeOut();
    }
    }
    scrollTopBtn();
})