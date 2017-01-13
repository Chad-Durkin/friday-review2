$(document).ready(function() {
  $("form#front-or-back").submit(function(event) {
    event.preventDefault();
    var frontOrBackEnd = $("#which-dev").val();

    if(frontOrBackEnd === "front")
    {
      $(".options").hide();
      $("#front-end").show();
    }
    else if(frontOrBackEnd === "back")
    {
      $(".options").hide();
      $("#back-end-intro").show();
    }
  });

  $("form#which-front-end").submit(function(event) {
    event.preventDefault();
    var cssOrDesign = $("#css-design").val();

    if(cssOrDesign === "css")
    {
      $("#design").hide();
      $("#css").show();
    }
    else if(cssOrDesign === "design")
    {
      $("#css").hide();
      $("#design").show();
    }
  });

  $("form#next").submit(function(event) {
    event.preventDefault();
    $("#back-end-intro").hide();
    $("#back-end-options").show();
  });

  $("form#back-to-intro").submit(function(event) {
    event.preventDefault();
    $("#back-end-options").hide();
    $("#back-end-intro").show();
  });

  $("form#select-a-back-end").submit(function(event) {
    event.preventDefault();
    var whichBackEnd = $("input:radio[name=business]:checked").val();


  });
});
