const slidersControls = document.querySelectorAll('.slider-control');
const sliderControlOne = document.querySelector('.slider-control-one');
const sliderControlTwo = document.querySelector('.slider-control-two');
const sliderControlThree = document.querySelector('.slider-control-three');
const slideLong = document.querySelector('.slide-long');
const slideMath = document.querySelector('.slide-math');
const slideNight = document.querySelector('.slide-night');

sliderControlOne.addEventListener('click', function() {
  sliderControlOne.classList.add('current');
  sliderControlTwo.classList.remove('current');
  sliderControlThree.classList.remove('current');
  slideLong.classList.add('slide-current');
  slideMath.classList.remove('slide-current');
  slideNight.classList.remove('slide-current');
});

sliderControlTwo.addEventListener('click', function() {
  sliderControlTwo.classList.add('current');
  sliderControlOne.classList.remove('current');
  sliderControlThree.classList.remove('current');
  slideMath.classList.add('slide-current');
  slideLong.classList.remove('slide-current');
  slideNight.classList.remove('slide-current');
});

sliderControlThree.addEventListener('click', function() {
  sliderControlThree.classList.add('current');
  sliderControlTwo.classList.remove('current');
  sliderControlOne.classList.remove('current');
  slideNight.classList.add('slide-current');
  slideMath.classList.remove('slide-current');
  slideLong.classList.remove('slide-current');
});
