// ハンバーガーメニュー

$(function(){
  var imgHeight = $('.top-wrapper').outerHeight();
  var bgHeight = $('.top').outerHeight();

  $(".burger-btn").on('click',function(){//ハンバーガーボタンがクリックされた時
    if($(window).scrollTop() < imgHeight -50){//ハンバーガーボタンがfvより上にあるならば
      $('.bar').toggleClass('cross');//ハンバーガーボタンの三本線をクロスさせるCSSを切り替え
      $('.header-nav').toggleClass('open');//右サイドのナビゲーションの開閉を切り替え(header-navは初期値では画面外に隠れている)
      $('.burger-musk').fadeToggle(300);//背景を暗くするマスクをフェードイン・アウト

    }else{//ハンバーガーボタンがfvよりも下にあるならば
      $(this).toggleClass('black');//ハンバーガーボタンが黒色になっているので、黒白を切り替え
      $('.bar').toggleClass('cross');//以下、同上
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


  $(window).on('load scroll', function(){ //画面がスクロールされた時
    if($(window).scrollTop() < imgHeight -50){//画面がメインビジュアル内にいるならば
      $('.site-title').removeClass('black');
    }else{//画面がメインビジュアルより下へスクロールされると
      $('.site-title').addClass('black');
    }

    if($(window).scrollTop() < bgHeight -50){//画面がメインビジュアル内にいるならば
      $('.burger-btn').removeClass('black');
    }else{//画面がメインビジュアルより下へスクロールされると
      $('.burger-btn').addClass('black');
    }
  });

});


// スクロールフェードイン
$(function () {
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面の高さを取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロールしたときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});


// スクロールフェードイン
$(function () {
  $(window).scroll(function () {
    $(".section-title-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});
