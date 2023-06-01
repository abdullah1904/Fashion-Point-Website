$(document).ready(function(){
    $(".hamburgerIcon").click(function(){
        $("nav").toggleClass("on");
        $(".search").toggleClass("on");
    });
});