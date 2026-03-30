

// fade-in action
window.addEventListener('scroll', function(){
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // すべての.fade-inを取得
  const fadeInItems = document.querySelectorAll('.fade-in');

  fadeInItems.forEach(function(item) {
    // boxまでの高さを取得
    const distanceToBox = item.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if(scroll + windowHeight > distanceToBox) {
      item.classList.add('is-active');
    }
  });
});

// navbar responsive action
document.getElementById("navbarButton").addEventListener("click", function() {

  document.getElementById("navbarSupportedContent").classList.toggle("navbar-collapse-show");
  document.getElementById("navbarBrand").classList.toggle("z-1");
  this.classList.toggle("z-1");

});

