'use strict';

angular.module('personalApp')
  .controller('EducationCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "University of Michigan",
      paragraphs: [
        "I attended the University of Michigan from 2007-2011. I was a student in the College of Engineering. I graduated Cum Laude in 2011 with a degree in Computer Science Engineering.",

        "<img src=\"../../assets/images/michigan_union.jpg\" class=\"info-img\" />",

        "In 2010, during the summer between my junior and senior year, I interned at Parametric Technology Corporation. I joined a team that supported <a href=\"https://www.ptc.com/en/products/arbortext\">Arbortext Editor</a>, a text editing application that businesses use for authoring technical documentation and manuals. During my internship, I worked on app localization, and a feature to improve the table editing tool within the application.",

        "<img src=\"../../assets/images/cs_belltower.jpg\" class=\"info-img\" />",

        "For my senior design class, I took a video game development course. I paired up with two other classmates, and we built a video game we called <a href=\"https://www.youtube.com/watch?v=_CuuL-KYpdQ\">RAPTORS</a>. It was a top-down shooter where the players attempt to get through levels while being attacked by dinosaurs. The game used Wii Remotes for input, and the user could aim anywhere on screen to shoot at enemies. It was very well-received at the expo, and we ended up winning 3rd place in the competition for best game."
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
