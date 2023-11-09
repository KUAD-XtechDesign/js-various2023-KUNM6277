
  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio


var imageContainer = document.querySelector('.set1');

// 鼠标悬停监听 mouseover
imageContainer.addEventListener('mouseover', function (event) {
  // 检查图片元素 check
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

// 鼠标离开监听
imageContainer.addEventListener('mouseout', function (event) {
  // 检查图片元素
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
//little little window finishes here


// 监听滚动事件
$(window).on("scroll", function () {
  // 获取滚动距离
  let scrollTop = $(this).scrollTop();
  // 根据滚动距离计算新的圆角大小
  let newBorderRadius = 2 + (scrollTop / 30); 
  document.documentElement.style.setProperty('--border-radius', newBorderRadius + 'px');
});
//scroll to change something on the border↑

//this part is for set201, scroll to change the image
var imageContainer = document.querySelector('.set2');
var images = document.querySelectorAll('.set201 img');
var currentIndex = 0;

// 鼠标滚轮监听
imageContainer.addEventListener('wheel', function (event) {
  // 阻止默认的滚轮行为
  event.preventDefault();

  // 计算滚轮方向
  var delta = event.deltaY || event.detail || event.wheelDelta;

  // scroll to change the images of set201
  if (delta > 0) {
    // down to next
    currentIndex = (currentIndex + 1) % images.length;
  } else {
    // up to back マウスじゃないと操作しにくい、どうすればいいのか……
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  // hide all
  images.forEach(function (image) {
    image.style.opacity = 0;
  });

  // the first one--appearance~
  images[currentIndex].style.opacity = 1;
});
//set201 finishes here

//this part is for the images in set1 and set201
var set1Container = document.querySelector('.set1');
var set201Container = document.querySelector('.set201');

set1Container.addEventListener('click', function (event) {
  if (event.target.classList.contains('hoverable-image')) {
    var clickedImagePath = event.target.getAttribute('src');
    var set201Images = set201Container.querySelectorAll('img');
    set201Images.forEach(function (image) {
      image.setAttribute('src', clickedImagePath);
    });
  }
});


//keep it at the bottom
  AOS.init();
  //forgot if i used aos or not  perhaps i didnt
