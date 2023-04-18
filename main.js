$(function () {

    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height > 700) {
            $('.top a').addClass('on');
        } else {
            $('.top a').removeClass('on');
        }
    });
    $('.top a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 700)
    })
})