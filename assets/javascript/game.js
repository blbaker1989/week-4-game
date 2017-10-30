$( document ).ready(function(){

var targetNumber = 19 + Math.floor(Math.random() * 100);

  $("#number-to-guess").text(targetNumber);
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var numberOptions = [50, 20, 1, 5];

  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal1 = $("<img>");

    imageCrystal1.addClass("crystal-image");


    imageCrystal1.attr("src", "./assets/images/blueCrystal.jpg");

    imageCrystal1.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal1);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!")
      ++wins;
      $("#span1").text(wins);
      console.log(this);
    }

   else if (counter >= targetNumber) {
      alert("You lose!!");
      ++losses;
      $("#span2").html(losses);
      console.log(this);
    }


  });
})
