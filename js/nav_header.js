//메뉴 버튼을 클릭했을 때 메뉴를 열고 닫는다.
function toggleMenu() {
    var menu = document.getElementById('menu');
    var toggleBtn = document.getElementById('menu_btn');

    var toggle = (function () {
        var isShow = true;
        // toggleBtn내부에 있는 두 개의 div
        var xBtn = toggleBtn.children;

        return function () {
            if (isShow) {
                //nav_header.css의 class
                xBtn[0].classList.add('makeX_top');
                xBtn[1].classList.add('makeX_bottom');

                //메뉴를 볼 수 있게 한다.
                menu.classList.add('show');

                //스크롤바를 없앤다.
                document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            } else {
                xBtn[0].classList.remove('makeX_top');
                xBtn[1].classList.remove('makeX_bottom');

                //메뉴를 볼 수 없게 한다.
                menu.classList.remove('show');

                //스크롤바를 보이게 한다.
                document.getElementsByTagName('html')[0].style.overflow = 'auto';
            }
            isShow = !isShow;
        };
    })();
    
    toggleBtn.onclick = toggle;
}