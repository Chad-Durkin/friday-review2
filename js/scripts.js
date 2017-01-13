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
    $("#seperate").show();
    $("#back-end-options").show();
  });

  $("form#back-to-intro").submit(function(event) {
    event.preventDefault();
    $("#correspondingBusiness").hide();
    $("#back-end-options").hide();
    $("#back-end-intro").show();
    $("#seperate").hide();
  });

  $("form#select-a-back-end").submit(function(event) {
    event.preventDefault();
    var whichBackEnd = $("input:radio[name=business]:checked").val();

    $("#correspondingBusiness").show();

    if(whichBackEnd === "csharp")
    {
      $("#ruby-def").css("background-color", "white");
      $("#php-def").css("background-color", "white");
      $("#java-def").css("background-color", "white");
      $("#c-sharp-def").css("background-color", "red");
    }
    else if(whichBackEnd === "java")
    {
      $("#ruby-def").css("background-color", "white");
      $("#php-def").css("background-color", "white");
      $("#c-sharp-def").css("background-color", "white");
      $("#java-def").css("background-color", "red");
    }
    else if(whichBackEnd === "php")
    {
      $("#ruby-def").css("background-color", "white");
      $("#c-sharp-def").css("background-color", "white");
      $("#java-def").css("background-color", "white");
      $("#php-def").css("background-color", "red");
    }
    else if(whichBackEnd === "ruby")
    {
      $("#c-sharp-def").css("background-color", "white");
      $("#php-def").css("background-color", "white");
      $("#java-def").css("background-color", "white");
      $("#ruby-def").css("background-color", "red");
    }
  });
});
