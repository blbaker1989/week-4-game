<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">

var targetNumber = 372;

$("#number-to-guess").text(targetNumber);

var counter = 0;


var numberOptions = [50, 20, 2, 5];

for (var i = 0; i < numberOptions.length; i++) {


  var imageCrystal1 = $("<img>");

  imageCrystal1.addClass("crystal-image1");


  imageCrystal1.attr("src", "./assets/images/blueCrystal.jpg");

  imageCrystal1.attr("data-crystalvalue", numberOptions[i]);

  $("#crystals").append(imageCrystal1);
};

$(".crystal-image1").on("click", function() {


  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;


  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});



</script>
