// 클릭 이벤트 핸들러 함수
function copyModalContents(event) {
    // 클릭된 요소 가져오기
    var clickedElement = event.target;

    // 클릭된 요소의 부모 li 요소 찾기
    var listItem = clickedElement.closest('li');

    // li 요소 내의 modalContents 요소 찾기
    var modalContents = listItem.querySelector('.modalContents');

    // modalContents 내의 내용 가져오기
    var contentsToCopy = modalContents.innerHTML;

    // 클립보드에 복사하기 위해 임시 textarea 생성
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = contentsToCopy;
    document.body.appendChild(tempTextarea);

    // 임시 textarea 내용 선택 및 복사
    tempTextarea.select();
    document.execCommand('copy');

    // 임시 textarea 제거
    document.body.removeChild(tempTextarea);

    console.log('복사되었습니다.');
}

// 각 li 요소에 클릭 이벤트 리스너 추가
var liElements = document.querySelectorAll('.search-list > .li');
liElements.forEach(function (li) {
    li.addEventListener('click', function() {
        // 모든 li 요소에서 animate 클래스 제거
        liElements.forEach(function (li) {
            li.classList.remove('animate__animated', 'animate__bounce');
        });

        // 클릭된 요소에만 animate 클래스 추가
        li.classList.add('animate__animated', 'animate__bounce');
        
        // 원하는 작업 수행
        copyModalContents();
    });
});
