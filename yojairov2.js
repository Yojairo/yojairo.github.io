$(document).ready(function(){
  $("body").hide().fadeIn(1500);
});

document.querySelector('#homeMenu').addEventListener('click', e => {
  $(document).ready(function(){
    $("#homeContent").hide().fadeIn(500);
  });
  document.querySelector('#homeContent').style.display = 'block';
  document.querySelector('#worksContent').style.display = 'none';
  document.querySelector('#experienceContent').style.display = 'none';
  document.querySelector('#contactContent').style.display = 'none';
});

document.querySelector('#worksMenu').addEventListener('click', e => {
  $(document).ready(function(){
    $("#worksContent").hide().fadeIn(500);
  });
  document.querySelector('#homeContent').style.display = 'none';
  document.querySelector('#experienceContent').style.display = 'none';
  document.querySelector('#contactContent').style.display = 'none';
  document.querySelector('#worksContent').style.display = 'block';
});

document.querySelector('#experienceMenu').addEventListener('click', e => {
  $(document).ready(function(){
    $("#experienceContent").hide().fadeIn(500);
  });
  document.querySelector('#homeContent').style.display = 'none';
  document.querySelector('#worksContent').style.display = 'none';
  document.querySelector('#contactContent').style.display = 'none';
  document.querySelector('#experienceContent').style.display = 'block';
});

document.querySelector('#contactMenu').addEventListener('click', e => {
  $(document).ready(function(){
    $("#contactContent").hide().fadeIn(500);
  });
  document.querySelector('#homeContent').style.display = 'none';
  document.querySelector('#worksContent').style.display = 'none';
  document.querySelector('#experienceContent').style.display = 'none';
  document.querySelector('#contactContent').style.display = 'block';
});
