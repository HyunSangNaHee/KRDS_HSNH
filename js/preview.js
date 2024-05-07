// [FEAT] .search-list .li v.01 : 미리보기 기능 - SH 240422
document.querySelectorAll('.previewBox').forEach((item) => {
  item.addEventListener('click', () => {
    // [FIX] 특정 .guide_n를 가진 preview일경우 캡쳐본으로 대체함. - SH 240507
    const parentSibling = item.parentNode.previousElementSibling;
    if (
      parentSibling.classList[1] == 'guide_2' ||
      parentSibling.classList[1] == 'guide_9' ||
      parentSibling.classList[1] == 'guide_19' ||
      parentSibling.classList[1] == 'guide_49'
    ) {
      document.querySelector('#modal_sample .conts-area').innerHTML =
        "<img src='img/sample/KRDS/" + parentSibling.classList[1] + ".jpg'/>";
    } else {
      const contsWrapHTML = item.querySelector('.modalContents').innerHTML;
      document.querySelector('#modal_sample .conts-area').innerHTML =
        contsWrapHTML;
    }
  });
});

$('.search-list li').on('click', function () {
  if ($(this).hasClass('minusScale-caller'))
    $('.modal-conts').addClass('minusScale-element');
  else $('.modal-conts').removeClass('minusScale-element');
});
