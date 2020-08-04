// $(document).ready(function () {
//     window.onload = function () {
//         $("preload").fadeout(500);
//         $('.preload').hide();
//     };
//     $('#maincontent').show();
// alert("hello")

//     }
// );
$(document).ready(function () {
    window.onload = function () {
        $('.preload').fadeOut(500, function () { $('.preload').hide(); });
        $('#maincontent').fadeIn(500, function () { $('#maincontent').show(); });
            // $('#maincontent').show();

    }
});