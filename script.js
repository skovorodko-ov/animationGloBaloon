'use strict';

const container = document.querySelector('.container'),
      baloon = document.querySelector('.baloon'),
      start = document.querySelector('.start'),
      reset = document.querySelector('.stop');

let animateInterval;

let topPosition = 0;

let animate = () => {
  animateInterval = requestAnimationFrame(animate);

  topPosition++;

  if (topPosition < 350) {
    baloon.style.top = topPosition + 'px'; 
  } else {
    if (topPosition < 800) {
      baloon.style.left = (topPosition - 350) + 'px';
    } else {
      if (topPosition < 1150) {
        baloon.style.top = (1150 - topPosition) + 'px';
      } else {
        if (topPosition < 1600) {
          baloon.style.left = (1600 - topPosition) + 'px';
        } else {
          cancelAnimationFrame(animateInterval);
        }
      }
    }
  }
};

let animateChech = false;

start.addEventListener('click', () => {
  if (!animateChech) {
    animateInterval = requestAnimationFrame(animate);
    animateChech = true;
  } else {
    cancelAnimationFrame(animateInterval);
    animateChech = false;
  }
});

reset.addEventListener('click', () => {
  cancelAnimationFrame(animateInterval);
  topPosition = 0;
  baloon.style.top = 0;
  baloon.style.left = 0;
  animateInterval = requestAnimationFrame(animate);
});