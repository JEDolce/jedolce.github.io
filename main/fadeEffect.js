// Fade In Section on Scroll
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
    // var latest = $(".latest")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    };

    // if ($(latest).position().top < pageBottom) {
    //     $(latest).addClass("showTitle");
    // } else {
    //     $(latest).removeClass("showTitle");
    // }
});

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var latest = $(".latest");

    for (var i = 0; i < latest.length; i++) {
        if (pageBottom > 1550) {
            $(latest).addClass("showTitle");
        } else {
            $(latest).removeClass("showTitle");
        }
    };
});

