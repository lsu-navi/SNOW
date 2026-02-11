document.addEventListener('DOMContentLoaded', function() {

    // 아이콘 버튼 클릭 시 left 이미지, right 이미지 순서에 맞게 전환
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const leftImages = document.querySelectorAll('.left-tab-image');
    const rightImages = document.querySelectorAll('.tab-image');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // 모든 버튼에서 'on' 클래스 제거 후, 클릭된 버튼에만 'on' 추가
            tabButtons.forEach(btn => btn.classList.remove('on'));
            this.classList.add('on');

            // left 이미지: 해당 data-tab인 것만 active
            leftImages.forEach(img => {
                img.classList.remove('active');
                if (img.getAttribute('data-tab') === tabName) {
                    img.classList.add('active');
                }
            });

            // right 이미지: 해당 data-tab인 것만 active
            rightImages.forEach(img => {
                img.classList.remove('active');
                if (img.getAttribute('data-tab') === tabName) {
                    img.classList.add('active');
                }
            });
        });
    });
});
