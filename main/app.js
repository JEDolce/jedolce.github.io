// ********** Set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** Fade back-to-top ************
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var btn = $(".back-to-top");

    pageTop > 400
        ? btn.addClass("visible")
        : btn.removeClass("visible");
});









