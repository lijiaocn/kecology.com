(function () {
  var root = document.querySelector(".ap-carousel");
  if (!root) return;

  var track = root.querySelector(".ap-duo");
  var slides = track ? track.children : [];
  var count = slides.length;
  var prev = root.querySelector(".ap-prev");
  var next = root.querySelector(".ap-next");
  var dots = root.querySelectorAll(".ap-dots button");
  var viewport = root.querySelector(".ap-viewport");
  var index = 0;
  var timer = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (count < 2) {
    root.classList.add("is-single");
    return;
  }

  function render() {
    var width = viewport.clientWidth;
    track.style.transform = "translateX(" + -index * width + "px)";
    dots.forEach(function (dot, i) {
      if (i === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function go(nextIndex) {
    index = (nextIndex + count) % count;
    render();
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    if (reduce) return;
    stop();
    timer = setInterval(function () {
      go(index + 1);
    }, 5500);
  }

  prev.addEventListener("click", function () {
    go(index - 1);
    start();
  });
  next.addEventListener("click", function () {
    go(index + 1);
    start();
  });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      go(i);
      start();
    });
  });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", function (event) {
    if (!root.contains(event.relatedTarget)) start();
  });

  window.addEventListener("resize", render);
  render();
  start();
})();
