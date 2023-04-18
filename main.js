$(function () {

    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height > 700) {
            $('.top a').addClass('on');
        } else {
            $('.top a').removeClass('on');
        }
    });

})