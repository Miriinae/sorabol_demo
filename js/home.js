//상단의 <header>의 투명도를 스크롤에 따라 조절한다.
function fadeHeaderWhenScroll() {
    window.addEventListener('scroll', function () {
        var header = document.getElementById("header");

        var scroll_delta = window.pageYOffset;
        if (window.innerHeight > scroll_delta) {
            var height = header.offsetHeight;
            var opacity = 1 - ((scroll_delta / height) * 2.5);

            header.style.opacity = opacity;
        } else {
            header.style.opacity = 0;
        }
    });
}
