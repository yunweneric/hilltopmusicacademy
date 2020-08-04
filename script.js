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
        $('.preload').fadeOut(3000, function () { $('.preload').hide(); });
        $('#maincontent').show();
        $('#maincontent').fadeIn(3000);
        // $('#maincontent').show();

    }
});

$(selector).fadeIn();