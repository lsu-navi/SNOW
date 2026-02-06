document.addEventListener('DOMContentLoaded', function() {

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

    // 탭 버튼 클릭 이벤트
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabImages = document.querySelectorAll('.tab-image');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // 모든 버튼에서 'on' 클래스 제거
            tabButtons.forEach(btn => btn.classList.remove('on'));
            // 클릭된 버튼에 'on' 클래스 추가
            this.classList.add('on');
            
            // 모든 이미지에서 'active' 클래스 제거
            tabImages.forEach(img => img.classList.remove('active'));
            // 해당 탭의 이미지에 'active' 클래스 추가
            const targetImage = document.querySelector(`.tab-image[data-tab="${tabName}"]`);
            if (targetImage) {
                targetImage.classList.add('active');
            }
        });
    });
});