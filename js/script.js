/*!
 * Broshop (https://shafygunawan.github.io/broshop)
 * Copyright 2020 Shafy Gunawan (https://www.linkedin.com/in/shafygunawan/)
 * Licensed under MIT (https://github.com/shafygunawan/broshop/blob/main/LICENSE)
 */
// NAVIGASI COLLAPSE

let open = document.getElementsByClassName("open")[0];
let close = document.getElementsByClassName("close")[0];
let menu = document.getElementById("menu");

open.addEventListener("click", function () {
  menu.classList.toggle("collapse");
  close.classList.toggle("collapse");
});

close.addEventListener("click", function () {
  menu.classList.toggle("collapse");
  close.classList.toggle("collapse");
});

// SLIDE

(function () {
  function slideShow(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  slideShow.prototype = {
    init: function () {
      this.wrapper = this.el.querySelector(".slide");
      this.slides = this.el.querySelectorAll(".slide-item");
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },
    _slideTo: function (slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },
    action: function () {
      var self = this;
      self.timer = setInterval(function () {
        self.index++;
        if (self.index == self.slides.length) {
          self.index = 0;
        }
        self._slideTo(self.index);
      }, 5500);
    },
    stopStart: function () {
      var self = this;
      self.el.addEventListener(
        "mouseover",
        function () {
          clearInterval(self.timer);
          self.timer = null;
        },
        false
      );
      self.el.addEventListener(
        "mouseout",
        function () {
          self.action();
        },
        false
      );
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    var slider = new slideShow(".slide");
  });
})();
