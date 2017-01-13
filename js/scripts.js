$(document).ready(function() {
  var cSharpIndex = 0;
  var phpIndex = 0;
  var rubyIndex = 0;
  var javaIndex = 0;

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
    cSharpIndex = 0;
    phpIndex = 0;
    rubyIndex = 0;
    javaIndex = 0;
    $("#ruby-def").css("background-color", "white");
    $("#php-def").css("background-color", "white");
    $("#java-def").css("background-color", "white");
    $("#c-sharp-def").css("background-color", "white");
    $(".options").hide();
    $("#back-end-intro").show();
  });

  $("form#select-a-back-end").submit(function(event) {
    event.preventDefault();
    var whichBackEnd = $("input:radio[name=business]:checked").val();

    if(whichBackEnd === "csharp")
    {
      cSharpIndex++;
    }
    else if(whichBackEnd === "java")
    {
      javaIndex++;
    }
    else if(whichBackEnd === "php")
    {
      phpIndex++;
    }
    else if(whichBackEnd === "ruby")
    {
      rubyIndex++;
    }

    $("#back-end-options").hide();
    $("#back-end-options2").fadeIn();

        console.log(cSharpIndex);
        console.log(javaIndex);
        console.log(phpIndex);
        console.log(rubyIndex);
  });

  $("form#select-another-back-end").submit(function(event) {
    event.preventDefault();
    var whichBackEnd = $("input:radio[name=work]:checked").val();

    if(whichBackEnd === "csharp")
    {
      cSharpIndex++;
    }
    else if(whichBackEnd === "java")
    {
      javaIndex++;
    }
    else if(whichBackEnd === "php")
    {
      phpIndex++;
    }
    else if(whichBackEnd === "ruby")
    {
      rubyIndex++;
    }

    $("#back-end-options2").hide();
    $("#back-end-options3").fadeIn();

    console.log(cSharpIndex);
    console.log(javaIndex);
    console.log(phpIndex);
    console.log(rubyIndex);

  });

  $("form#again-select-another-back-end").submit(function(event) {
    event.preventDefault();
    var whichBackEnd = $("input:radio[name=demand]:checked").val();

    if(whichBackEnd === "csharp")
    {
      cSharpIndex++;
    }
    else if(whichBackEnd === "java")
    {
      javaIndex++;
    }
    else if(whichBackEnd === "php")
    {
      phpIndex++;
    }
    else if(whichBackEnd === "ruby")
    {
      rubyIndex++;
    }

    $("#back-end-options3").hide();
    $("#correspondingBusiness").fadeIn();

    console.log(cSharpIndex);
    console.log(javaIndex);
    console.log(phpIndex);
    console.log(rubyIndex);

    if(cSharpIndex >= javaIndex && cSharpIndex >= phpIndex && cSharpIndex >= rubyIndex)
    {
      $("#c-sharp-def").css("background-color", "red");
    }
    if(javaIndex >= cSharpIndex && javaIndex >= phpIndex && javaIndex >= rubyIndex)
    {
      $("#java-def").css("background-color", "red");
    }
    if(phpIndex >= javaIndex && phpIndex >= cSharpIndex && phpIndex >= rubyIndex)
    {
      $("#php-def").css("background-color", "red");
    }
    if(rubyIndex >= javaIndex && rubyIndex >= phpIndex && rubyIndex >= cSharpIndex)
    {
      $("#ruby-def").css("background-color", "red");
    }

  });

});
