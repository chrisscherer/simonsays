$(document).ready(function(){

  $('#get_color').on('click', function(event){
    event.preventDefault();

    var url = $(this).attr('href');
    
    $.post(url, function(serverResponse, status, request){
      var num = serverResponse.cell
      $('li:nth-child('+ num + ')').css("background", serverResponse.color);
    });

  });
});