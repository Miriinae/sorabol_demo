// id가 theme_change인 버튼이 활성화되면 테마 색을 바꾼다.
function changeTheme() {
    var btn = document.getElementById('theme_change');
    var home = document.getElementById('home_img');
    btn.addEventListener("click", function () {
        var s = document.documentElement.style;
        if (btn.checked) {
            s.setProperty('--sorabol-black', 'rgb(40, 40, 30)');
            s.setProperty('--sorabol-white', 'rgb(250, 250, 240)');
            s.setProperty('--black', 'rgb(0, 0, 0)');
            s.setProperty('--white', 'rgb(255, 255, 255)');

            home.style.filter = "";
        } else {
            s.setProperty('--sorabol-black', 'rgb(250, 250, 240)');
            s.setProperty('--sorabol-white', 'rgb(40, 40, 30)');
            s.setProperty('--black', 'rgb(255, 255, 255)');
            s.setProperty('--white', 'rgb(0, 0, 0)');

            //색 반전
            home.style.filter = "invert(1)";
        }
    });
}