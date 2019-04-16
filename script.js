$(function() {
  //All JS goes within these brackets

  $("#age-submit").click(function(){

    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 8
    if ( age >= 8 ) {
      //if age is greater than 8 show the next question
      $("#yoga-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("You're too young!");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }

  });

  $("#yoga-submit").click(function(){
    var yogaformString = $("#yoga-pose").val();
    var yogaform = parseInt(yogaformString);

    if ( yogaform > 10 ) {
      $("#yoga-form").hide();
      $("#answer").text("Om.. You're a Yoga Expert!");
      $("#club-img").attr("src", "http://www.thesurflodge.com/wp-content/uploads/2018/05/better-yoga3-dribbble.gif");

    } else {
      $("#answer").text("You'll get there! Keep practicing.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

});
