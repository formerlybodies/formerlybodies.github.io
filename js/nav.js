$(".right").on('click', function(e){
  e.preventDefault();
  console.log("clicked");
  $(this).toggleClass('open');
});
console.log("loaded");
