function fadeHeaderWhenScroll() {
    window.addEventListener('scroll', function () {
        var header = document.getElementById("header");

        var scroll_delta = window.pageYOffset;
        var height = header.offsetHeight;
        var opacity = 1 - ((scroll_delta / height) * 2.5);

        header.style.opacity = opacity;
    });
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    var toggleBtn = document.getElementById('menu_btn');

    var toggle = (function () {
        var isShow = true;
        var xBtn = toggleBtn.children;

        return function () {
            if (isShow) {
                xBtn[0].classList.add('makeX_top');
                xBtn[1].classList.add('makeX_bottom');
                
                menu.classList.add('show');
                
                document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            } else {
                xBtn[0].classList.remove('makeX_top');
                xBtn[1].classList.remove('makeX_bottom');

                menu.classList.remove('show');
                
                document.getElementsByTagName('html')[0].style.overflow = 'auto';
            }
            isShow = !isShow;
        };
    })();

    toggleBtn.onclick = toggle;
}

function changeTheme() {
    var btn = document.getElementById('theme_change');
    var home = document.getElementById('home_img');
    btn.addEventListener("click", function() {
        var s = document.documentElement.style;
        if( btn.checked ) {
            s.setProperty('--sorabol-black', 'rgb(40, 40, 30)');
            s.setProperty('--sorabol-white', 'rgb(250, 250, 240)');
            s.setProperty('--black', 'rgb(0, 0, 0)');
            s.setProperty('--white', 'rgb(255, 255, 255)');
            
            home.style.filter = "";
        }
        else {
            s.setProperty('--sorabol-black', 'rgb(250, 250, 240)');
            s.setProperty('--sorabol-white', 'rgb(40, 40, 30)');
            s.setProperty('--black', 'rgb(255, 255, 255)');
            s.setProperty('--white', 'rgb(0, 0, 0)');
            
            home.style.filter = "invert(1)";
        }
    });
}
