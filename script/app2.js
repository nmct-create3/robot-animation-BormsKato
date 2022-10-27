const button = document.querySelector('button');
button.addEventListener('click', function () {
  console.log('Clicked');
  const animation = document.querySelector('#lightning');
  animation.beginElement();
});
