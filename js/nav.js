$(function(){
  $(".right").on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('open');
  });
});
