$(document).ready(function () {
    $('.tabs-content li').hide().first().show();
    $('.tabs-title').first().addClass('active');

    $('.tabs-title').click(function () {
        $('.tabs-title').removeClass('active');
        $('.tabs-content li').hide();

        $(this).addClass('active');
        $('.tabs-content li').eq($(this).index()).show();
    });
});
