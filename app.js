$(function () {
  console.log('Let\'s get ready to party with jQuery');
  $('article > img').addClass('image-center');
  $('article :last-child').remove();
  $('#title').css('font-size', Math.floor(Math.random() * 100 + 1));
  $('ol').append('<li>It\'s in the cup!</li>')
  $('aside').empty().append('<p>Sorry for the existence or non-existence of this list</p>');
  $('input').on('change', function() {
    let r = $('input').eq(0).val();
    let g = $('input').eq(1).val();
    let b = $('input').eq(2).val();
    $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
  })
  $('img').click(function() {
    $(this).remove();
  })
})
