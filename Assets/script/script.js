$(document).ready(function(){
    $(".hamburgerIcon").click(function(){
        $("nav").slideToggle("slow");
        $(".search").toggleClass("on");
    });
});