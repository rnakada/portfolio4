$(document).ready(() => {
console.log("Connected with $")

// $("#intro-page").show();
// $("#page1, #page2, #page3, .navbar, .intro-name, .enjoy, .test").hide();

// $(".welcome").fadeOut(2000);
// $(".intro-name").fadeIn(5000);
// $(".intro-name").fadeOut(2000);
// setInterval(() => {
//     $(".enjoy").show();
//     // $(".enjoy").empty(3000);
//     // $(".test").show();
//     // $(".enjoy").hide();
// }, 8000);
// setInterval(() => {
//     $(".enjoy").empty(3000);
//     $(".test").show();

// }, 12000);


$(".test").on("click", () => {
    $(".navbar").fadeOut();
    $("#page1, #page2, #page3, .navbar").fadeIn(5000);
    $("#intro-page").hide();
})

$("a").on("click", function(e){
    var href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, 1500);

    e.preventDefault();
})



});

