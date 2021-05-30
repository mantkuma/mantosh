$(document).ready(function () {
    var headerHeight = $('.header').height() + 'px';
    // $('.sideBar').css('margin-top', headerHeight);
    $('.mainDiv').css('margin-top', headerHeight);
    var sideWidth = $('.sideBar').width() + 'px';
    $('.mainDiv').css('margin-left', sideWidth);
    var body = $('body').width() + 'px';
    $('.mainDiv').css('width', body - sideWidth);

})

$(window).resize(function () {
    var headerHeight = $('.header').height() + 'px';
    // $('.sideBar').css('margin-top', headerHeight);
    $('.mainDiv').css('margin-top', headerHeight);
    var sideWidth = $('.sideBar').width() + 'px';
    $('.mainDiv').css('margin-left', sideWidth);
    var body = $('body').width() + 'px';
    $('.mainDiv').css('width', body - sideWidth);
});
