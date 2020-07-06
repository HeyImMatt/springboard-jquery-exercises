$(function () {
  console.log('Let\'s get ready to party with jQuery');
  $('article > img').addClass('image-center');
  $('article :last-child').remove();
  $('#title').css('font-size', Math.floor(Math.random() * 100 + 1))
})
