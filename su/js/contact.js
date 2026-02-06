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
    
    var $popup = $('.popup');
    var $body = $('body');

    function openPopup() {
        $popup.addClass('is-open').attr('aria-hidden', 'false');
        $body.addClass('popup-open');
    }

    function closePopup() {
        $popup.removeClass('is-open').attr('aria-hidden', 'true');
        $body.removeClass('popup-open');
    }

    // 제휴제안 버튼 클릭 시 팝업 열기
    $(document).on('click', '.popup-open', function(e) {
        e.preventDefault();
        openPopup();
    });

    // 닫기 버튼 클릭 (직접 바인딩 + 전파 차단)
    $('#popup-close-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closePopup();
    });

    // 박스 영역 클릭이 오버레이로 전달되지 않도록
    $('.popup-box').on('click', function(e) {
        e.stopPropagation();
    });

    // 오버레이 클릭 시 닫기
    $(document).on('click', '.popup-overlay', function() {
        closePopup();
    });

    // ESC 키로 닫기
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $popup.hasClass('is-open')) {
            closePopup();
        }
    });

    // 제출하기: 기본 동작 막고 나중 확장 가능하게 처리
    $(document).on('submit', '.popup-form', function(e) {
        e.preventDefault();
        console.log('CONTACT 폼 제출 (연동 예정)');
        closePopup();
    });
});
