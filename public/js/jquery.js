$(document).ready(function () {
 $("#slideshow > div:gt(0)").hide();
  setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
}, 3000);
$("#bs-example-navbar-collapse-1 li").on("click", function() {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
});

function openProdInfo(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});
// $(".navbar-toggle collapsed").click(function(event) {
//     $(".navbar-collapse").toggle('in');
// });

// $(document).ready(function () {
//     $("nav").find("li").on("click", "a", function () {
//         $('.navbar-collapse.in').collapse('hide');
//     });
// });
