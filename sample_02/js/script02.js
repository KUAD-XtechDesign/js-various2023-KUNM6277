
  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio

 // 当页面滚动、窗口大小改变或页面加载完成时执行以下代码
$(window).on("scroll resize load", function () {
  // 获取窗口高、度整个文档的高度和宽度
  windowH = $(this).height();
  documentH = $(document).height();
  documentW = $(document).width();

  // 获取页面垂直滚动位置（滚动条位置）
  scrollTop = $(this).scrollTop();

  // 计算滚动的比例，范围从0到1
  scrollRatio = scrollTop / (documentH - windowH);

  // 将文档高度分成5等分，用于后续的条件判断
  separate = documentH / 5;

  // 根据滚动位置，为页面的 body 元素添加不同的 CSS 类
  if (scrollTop < separate) {
    $("body").removeClass().addClass("one");
  } else if (scrollTop < separate * 2) {
    $("body").removeClass().addClass("two");
  } else if (scrollTop < separate * 3) {
    $("body").removeClass().addClass("three");
  } else if (scrollTop < separate * 4) {
    $("body").removeClass().addClass("four");
  } else {
    $("body").removeClass().addClass("five");
  }

  // 输出窗口高度、文档高度和滚动位置到控制台，用于调试
  console.log(windowH, documentH, scrollTop);


  $("#wave").css("background-position-x", -scrollTop / 10);

});



  //Menuボタンを押した時
  $("#btn01").on("click",function(){
    $("html, body").animate({scrollTop:0},600, "swing");
  })

  $("#btn02").on("click",function(){
    $("html, body").animate({scrollTop:separate*1},600, "swing");
  })

  $("#btn03").on("click",function(){
    $("html, body").animate({scrollTop:separate*2},600, "swing");
  })

  $("#btn04").on("click",function(){
    $("html, body").animate({scrollTop:separate*3},600, "swing");
  })

  $("#btn05").on("click",function(){
    $("html, body").animate({scrollTop:separate*4},600, "swing");
  })


  // 监听滚动事件
$(window).on("scroll", function () {
  // 获取滚动距离
  let scrollTop = $(this).scrollTop();

  // 根据滚动距离计算新的圆角大小
  let newBorderRadius = 2 + (scrollTop / 30); // 100是一个调整因子，你可以根据需要调整

  // 更新CSS变量的值
  document.documentElement.style.setProperty('--border-radius', newBorderRadius + 'px');
});

  AOS.init();
