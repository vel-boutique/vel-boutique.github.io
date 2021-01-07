function background_shading2() {
    var scale = chroma.scale(['#181818', '#8a59bb']).domain([0, $(document).height()]);
    $(window).on('scroll', function () {
        $('.body-home').css('background-color', scale(window.pageYOffset));
        console.log("Bella li bro")
    });
}
