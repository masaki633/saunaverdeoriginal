

$(function () {


// header

$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  var windowHeight = $(window).height();

  if (scroll > windowHeight - 100) {
    $("header").addClass("bg_black");
  } else {
    $("header").removeClass("bg_black")
  }
});


  // header

  $(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle_btn").on("click", function() {
      if ($("#header").hasClass("open")) {
        $("#header").removeClass("open");
      } else {
        $("#header").addClass("open");
      }
    });
  
    $("#mask").on("click", function() {
      $("#header").removeClass("open");
    });
  
    $("#navi a").on("click", function() {
      $("#header").removeClass("open");
    });
  });



// mainvisual

  $(".main-visual-slider")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
      autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
// });

  // タイトル表示を制御
  $('.main-visual-slider').on('afterChange', function(event, slick, currentSlide) {
      if (currentSlide === 2) { // 3枚目のスライド（インデックスは0から始まる）
          setTimeout(function() {
              $('.slide_title').css('opacity', '1');  // タイトルをフェードインで表示
          }, 500); // 1.5秒遅れて表示
      } else {
          $('.slide_title').css('opacity', '0'); // 他のスライドではタイトルをフェードアウト
      }
  });



  $(function () {

    $(".pickup_img").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: "50px",
              slidesToShow: 1,
            },
          },
        ],
      });
    
    });


// セクションタイトルのフェード表示

$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translate(0)");
      $(this).css("transform", "rotate( 0deg)");
      $(this).css("transform", "skew( 0deg, 0deg)");
      // $(this).css("visibility", "visible");
    }
  });
});


// fadein

$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein_content").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});





/*=================================================
  スムーススクロール
  ===================================================*/
  $(function () {

  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
});


/*=================================================
  トップに戻る
  ===================================================*/
  $(function () {

  let pagetop = $("#to_top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0}, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });
});





});
