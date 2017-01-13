$(document).ready(function() {
  $("form#front-or-back").submit(function(event) {
    event.preventDefault();
    var frontOrBackEnd = $("#which-dev").val();

    if(frontOrBackEnd === "front")
    {
      $("#back-end").hide();
      $("#front-end").show();
    }
    else if(frontOrBackEnd === "back")
    {
      $("#front-end").hide();
      $("#back-end").show();
    }
  });

  $("form#which-front-end").submit(function(event) {
    event.preventDefault();
    var frontOrBackEnd = $("#which-dev").val();

    if(frontOrBackEnd === "front")
    {
      $("#back-end").hide();
      $("#front-end").show();
    }
    else if(frontOrBackEnd === "back")
    {
      $("#front-end").hide();
      $("#back-end").show();
    }
  });
});
