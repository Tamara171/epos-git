
$(function () {
    $('#slika').hover(
        function() {
            $(this).stop().animate({"opacity": "1"}, 350);
        },
        function() {
            $(this).stop().animate({"opacity": "0.5"}, 350);
    });
});


