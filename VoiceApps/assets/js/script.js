/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block"
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

$(".to-home").click(function() {
    $('html,body').animate({
        scrollTop: 0},
        'slow');
    document.getElementById("mySidebar").style.width = "0";
})

$(".to-stuff").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-1").offset().top - 58},
        'slow');
    document.getElementById("mySidebar").style.width = "0";
})

$(".to-apps").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-2").offset().top - 58},
        'slow');
    document.getElementById("mySidebar").style.width = "0";
})

$(".to-build").click(function() {
    $('html,body').animate({
        scrollTop: $(".promo-3").offset().top - 58},
        'slow');
    document.getElementById("mySidebar").style.width = "0";
})