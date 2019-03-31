$(document).ready(function(){

  $('#name').on('keyup', function (){
    const name = $('#name').val();
    $('header h1').html(`Welcome ${name}`);
  }).on('focus', function(){
    $('header').addClass('active');
  }).on('blur', function(){
    $('header').removeClass('active');
  });
  const $bill = $('img');
  $(window).on('mousemove', function(event){
  const opacity = event.clientY / window.innerHeight;
  $bill.css('opacity', opacity);
  });

  const randomColor = () => {
    return Math.random() * 255;
  }

  const $body = $('body')
  $(window).on('mousemove', function (event){
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    $body.css('background-color', bgColor);
  })



});
