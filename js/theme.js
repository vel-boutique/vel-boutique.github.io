// la teniamo, non si sa mai

function background_shading() {
    var scale = chroma.scale(['#000000', '#7b1fa2']).domain([0, $(document).height()]);
    $(window).on('scroll', function () {
        $('.body-home').css('background-color', scale(window.pageYOffset));
    });
}
