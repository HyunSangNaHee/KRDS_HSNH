// [FEAT] .search-list .li v.01 : 미리보기 기능 - SH 240422
document.querySelectorAll('.previewBox').forEach(item => {
    item.addEventListener('click', () => {
        const contsWrapHTML = item.querySelector('.modalContents').innerHTML;
        document.querySelector('#modal_sample .conts-area').innerHTML = contsWrapHTML;
    });
});