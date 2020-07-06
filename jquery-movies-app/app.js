$(function () {
  $('form').submit(function (evt) {
    evt.preventDefault();
    let title = $('#title').val();
    let rating = parseInt($('#rating').val());

    if (title.length > 2 && rating > 0 && rating <= 10) {
      let $movieEntry = $('<tr>').html(`
      <td>${title}</td>
      <td>${rating}</td>
      <td><button class="btn btn-sm btn-danger">Remove</button></td>`);
      $('tbody').append($movieEntry);

      $('#title').val('');
      $('#rating').val('');

    } else alert('Movie title must be at least 2 characters and rating must be between 1 and 10');
  });

  $('tbody').on('click', 'tr td button', function() {
    $(this).parent().parent().remove();
  })

});
