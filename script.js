$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    focusOnSelect: true,
    // asNavFor: '.background'
});



$('.info_slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 18000,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 1.5,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1.5枚見せる
        }
    }
]
});

$(function() {
    $('.spinner').each(function() {
      var el  = $(this);
      var add = $('.spinner-add');
      var sub = $('.spinner-sub');
  
      // substract
      el.parent().on('click', '.spinner-sub', function() {
        if (el.val() > parseInt(el.attr('min'))) {
          el.val(function(i, oldval) {
            return --oldval;
          });
        }
        // disabled
        if (el.val() == parseInt(el.attr('min'))) {
          el.prev(sub).addClass('disabled');
        }
        if (el.val() < parseInt(el.attr('max'))) {
          el.next(add).removeClass('disabled');
        }
      });
  
      // increment
      el.parent().on('click', '.spinner-add', function() {
        if (el.val() < parseInt(el.attr('max'))) {
          el.val(function(i, oldval) {
            return ++oldval;
          });
        }
        // disabled
        if (el.val() > parseInt(el.attr('min'))) {
          el.prev(sub).removeClass('disabled');
        }
        if (el.val() == parseInt(el.attr('max'))) {
          el.next(add).addClass('disabled');
        }
      });
    });
});



function toggleButton(button, groupId) {
    var buttons = document.getElementById(groupId).querySelectorAll('.buttons_group_item');
  
    
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
}

function calculatePrice() {

}