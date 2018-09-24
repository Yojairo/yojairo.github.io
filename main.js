$(document).ready(function(){
  $("body").hide().fadeIn(1500);
});

let home_list = document.querySelector('#home_list')
let home_content = document.querySelector('#home_content');
let works_list = document.querySelector('#works_list');
let works_content = document.querySelector('#works_content');
let experience_list = document.querySelector('#experience_list')
let experience_content = document.querySelector('#experience_content');
let contact_list = document.querySelector('#contact_list')
let contact_content = document.querySelector('#contact_content');

home_list.addEventListener('click', e => {
  experience_content.style.display = 'none';
  contact_content.style.display = 'none';
  works_content.style.display = 'none';
  home_content.style.display = 'block';
  $(document).ready(function(){
    $("#home_content").hide().fadeIn(500);
  });
});

works_list.addEventListener('click', e => {
  experience_content.style.display = 'none';
  contact_content.style.display = 'none';
  home_content.style.display = 'none';
  works_content.style.display = 'block';
  $(document).ready(function(){
    $("#works_content").hide().fadeIn(500);
  });
});

experience_list.addEventListener('click', e => {
  home_content.style.display = 'none';
  contact_content.style.display = 'none';
  works_content.style.display = 'none';
  experience_content.style.display = 'block';
  $(document).ready(function(){
    $("#experience_content").hide().fadeIn(500);
  });
  });

contact_list.addEventListener('click', e => {
  home_content.style.display = 'none';
  experience_content.style.display = 'none';
  works_content.style.display = 'none';
  contact_content.style.display = 'block';
  $(document).ready(function(){
    $("#contact_content").hide().fadeIn(500);
  });
  });
