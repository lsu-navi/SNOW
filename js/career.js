$(document).ready(function() {

    const arrowButton = document.querySelector('header .sub-menu .arrow');
    const functionMenu = document.querySelector('header .sub-menu .function');
    
    if (arrowButton && functionMenu) {
        arrowButton.addEventListener('click', function(e) {
            e.preventDefault(); // 링크 기본 동작 방지
            
            // 협업 문의가 숨겨져 있으면 보이게, 보이면 숨기게 토글
            if (functionMenu.style.display === 'none' || functionMenu.style.display === '') {
                functionMenu.style.display = 'block';
            } else {
                functionMenu.style.display = 'none';
            }
        });
    }
    
    var $ul = $('.team-wrap ul');
    var $items = $('.team-wrap ul li');
    var gap = 35;
    var currentIndex = 0;
    var stepWidth;
    var maxIndex;

    function updateStepWidth() {
        if ($items.length === 0) return;
        stepWidth = $items.eq(0).outerWidth() + gap;
        maxIndex = Math.max(0, $items.length - 1);
    }

    function slideTo() {
        updateStepWidth();
        $ul.css('transform', 'translateX(' + (-currentIndex * stepWidth) + 'px)');
    }

    // 초기 위치
    updateStepWidth();
    slideTo();

    // arrow-right (오른쪽 화살표): li가 오른쪽→왼쪽으로 움직임 (다음)
    $('.arrow button:last').on('click', function(e) {
        e.preventDefault();
        if (currentIndex < maxIndex) {
            currentIndex++;
            slideTo();
        }
    });

    // arrow-left (왼쪽 화살표): li가 왼쪽→오른쪽으로 움직임 (이전)
    $('.arrow button:first').on('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            slideTo();
        }
    });
});
