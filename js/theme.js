function background_shading2() {
    var scale = chroma.scale(['#000000', '#7b1fa2']).domain([0, $(document).height()]);
    $(window).on('scroll', function () {
        $('.body-home').css('background-color', scale(window.pageYOffset));
        console.log("Bella li bro")
    });
}

function scroll_to_shop() {
    var title = document.getElementById("slide-shop");
    title.scrollIntoView({ behavior: 'smooth' });
}
