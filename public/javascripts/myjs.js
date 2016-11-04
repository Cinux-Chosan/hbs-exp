$(function() {
  $.ajax({
    url: '/data',
    dataType: 'json'
  }).then(function(r) {
    $('#name').text(r.name);
  });
})
