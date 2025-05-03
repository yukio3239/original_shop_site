function calculatePrice() {

  var selectedSize = parseInt(document.querySelector('#sizeButtons .buttons_group_item.selected').getAttribute('value'));

  var creamValue = parseInt(document.querySelector('#creamButtons .buttons_group_item.selected').getAttribute('value'));
  var syrupValue = parseInt(document.querySelector('#syrupButtons .buttons_group_item.selected').getAttribute('value'));
  var espressoValue = parseInt(document.querySelector('#esButtons .buttons_group_item.selected').getAttribute('value'));

  var totalToppingsValue = creamValue + syrupValue + espressoValue;

  var quantity = parseInt(document.querySelector('.spinner').value);

  var totalPrice = selectedSize * quantity + totalToppingsValue * quantity;

  console.log("¥" + totalPrice);

  document.getElementById("totalPrice").textContent = "¥" + totalPrice;
}


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
          calculatePrice()
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
          calculatePrice()
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


$('.slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 5,//スライドを画面に3枚見せる
  slidesToScroll: 5,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});