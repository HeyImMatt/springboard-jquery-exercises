$(function () {
  $('form').submit(function (evt) {
    evt.preventDefault();
    const title = $('#title').val();
    const rating = parseInt($('#rating').val());

    if (title.length > 2 && rating > 0 && rating <= 10) {
      let $movieEntry = $('<tr>').html(`
      <td>${title}</td>
      <td>${rating}</td>
      <td><button class="btn btn-sm btn-danger">Remove</button></td>`);
      $('tbody').append($movieEntry);
    } else alert('Movie title must be at least 2 characters and rating must be between 1 and 10');
  });
});
