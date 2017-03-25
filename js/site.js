$(document).ready(function () {
    $('.nav-logo').mouseover(function () {
        $('.hide-logo-text').addClass('.logo-text');
    }, function () {
        $('.hide-logo-text').removeClass('.hide-logo-text');
    });
});