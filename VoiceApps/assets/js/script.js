$(".to-home").click(function() {
    $('html,body').animate({
        scrollTop: 0},
        'slow');
})

$(".to-stuff").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-1").offset().top + 100},
        'slow');
})

$(".to-stuff").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-1").offset().top - 100},
        'slow');
})

$(".to-stuff").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-1").offset().top - 58},
        'fast');
})

$(".to-apps").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-2").offset().top + 100},
        'slow');
})

$(".to-apps").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-2").offset().top - 58},
        'fast');
})

$(".to-build").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-3").offset().top - 58},
        'slow');
})