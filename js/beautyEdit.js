$(document).ready(function() {
    // 협업 문의 버튼 클릭 이벤트
    const arrowButton = document.querySelector('header .sub-menu .arrow');
    const cooperationMenu = document.querySelector('header .sub-menu .cooperation');
    
    if (arrowButton && cooperationMenu) {
        arrowButton.addEventListener('click', function(e) {
            e.preventDefault(); // 링크 기본 동작 방지
            
            // 협업 문의가 숨겨져 있으면 보이게, 보이면 숨기게 토글
            if (cooperationMenu.style.display === 'none' || cooperationMenu.style.display === '') {
                cooperationMenu.style.display = 'block';
            } else {
                cooperationMenu.style.display = 'none';
            }
        });
    }

    // 상태(0~31)를 파일명 접미사로 변환: 켜진 비트를 1-based 숫자로 이어붙임. 0이면 "0"
    function stateToSuffix(state) {
        var s = '';
        for (var i = 0; i < 5; i++) {
            if (state & (1 << i)) s += (i + 1);
        }
        return s || '0';
    }

    // 현재 5개 토글 상태로 0~31 계산
    function getState() {
        var state = 0;
        $('.toggle-switch').each(function() {
            var idx = $(this).data('index');
            if ($(this).hasClass('is-on')) state |= (1 << idx);
        });
        return state;
    }

    // 이미지 src 갱신
    function updateImage() {
        var state = getState();
        var suffix = stateToSuffix(state);
        $('#beauty-image').attr('src', 'image/beauty' + suffix + '.webp');
    }

    // 토글 클릭: 해당 스위치만 on/off, 그 다음 이미지 갱신
    $('.toggle-switch').on('click', function() {
        $(this).toggleClass('is-on');
        $(this).attr('aria-checked', $(this).hasClass('is-on'));
        updateImage();
    });
});
