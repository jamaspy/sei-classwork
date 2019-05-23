$(document).ready(() => {
  const $bill =  $(".bill-js")
    const $body = $('body');
  $(window).on("scroll", ()=> {
    const scrollTop = $(window).scrollTop();
    $bill.css("background-position-y", -scrollTop * 0.5);
    $body.css("background-position-y", -scrollTop / 2);
  });

  //bubble
  $(window).on('mousemove', (event) => {
    const {pageX:x, pageY:y} = event;
    const size = Math.random() * 10;
    const $bubble = $('<div class = "bubble" />').css({
        top: y,
        left: x,
        width: size + 'em',
        height: size + 'em'
    });
    $bubble.appendTo('body');
    
    $bubble.animate({top: 0}, 4000, () => {
        $bubble.remove()
    })
  })
  

});