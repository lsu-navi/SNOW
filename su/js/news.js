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
});