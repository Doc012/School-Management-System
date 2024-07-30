document.addEventListener('DOMContentLoaded', function() {
    const app = document.querySelector('.app');
    const img = document.querySelector('.app__img');
    const pageNav1 = document.querySelector('.pages__item--1');
    const pageNav2 = document.querySelector('.pages__item--2');
    let animation = true;
    let curSlide = 1;
    let scrolledUp, nextSlide;
    
    const pagination = function(slide, target) {
      animation = true;
      if (target === undefined) {
        nextSlide = scrolledUp ? slide - 1 : slide + 1;
      } else {
        nextSlide = target;
      }
      
      document.querySelector('.pages__item--' + nextSlide).classList.add('page__item-active');
      document.querySelector('.pages__item--' + slide).classList.remove('page__item-active');
      
      app.classList.toggle('active');
      setTimeout(function() {
        animation = false;
      }, 3000);
    }
    
    const navigateDown = function() {
      if (curSlide > 1) return;
      scrolledUp = false;
      pagination(curSlide);
      curSlide++;
    }
  
    const navigateUp = function() {
      if (curSlide === 1) return;
      scrolledUp = true;
      pagination(curSlide);
      curSlide--;
    }
  
    setTimeout(function() {
      app.classList.add('initial');
    }, 1500);
  
    setTimeout(function() {
      animation = false;
    }, 4500);
    
    document.addEventListener('wheel', function(e) {
      if (animation) return;
      if (e.deltaY < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    });
  
    document.querySelectorAll(".pages__item:not(.page__item-active)").forEach(function(pageItem) {
      pageItem.addEventListener("click", function() {
        if (animation) return;
        let target = +this.getAttribute('data-target');
        pagination(curSlide, target);
        curSlide = target;
      });
    });
  });
  