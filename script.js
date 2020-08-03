$(document).ready(function () {
    window.onload = function () {
        $('.preload').fadeOut(500, function () { $('.preload').remove(); });
        $('.maincontent').fadeOut(500, function () { $('.preload').show(); });

    }
});
