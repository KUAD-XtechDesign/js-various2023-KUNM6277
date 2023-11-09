
  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio




// 获取包含所有图片的父容器
var imageContainer = document.querySelector('.set1');

// 鼠标悬停监听
imageContainer.addEventListener('mouseover', function (event) {
  // 检查是否是图片元素
  if (event.target.classList.contains('hoverable-image')) {
    // 效果
    event.target.style.transform = 'scale(1.2)';
    event.target.style.filter = 'brightness(80%)';

    // 显示小窗口
    var hoverWindow = event.target.nextElementSibling;
    if (hoverWindow && hoverWindow.classList.contains('hover-window')) {
      hoverWindow.style.display = 'block';
    }
  }
});

// 添加鼠标离开事件监听器
imageContainer.addEventListener('mouseout', function (event) {
  // 检查是否是图片元素
  if (event.target.classList.contains('hoverable-image')) {
    // 恢复原始效果
    event.target.style.transform = 'scale(1)';
    event.target.style.filter = 'brightness(100%)';

    // 隐藏小窗口
    var hoverWindow = event.target.nextElementSibling;
    if (hoverWindow && hoverWindow.classList.contains('hover-window')) {
      hoverWindow.style.display = 'none';
    }
  }
});


//小窗口结束

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
