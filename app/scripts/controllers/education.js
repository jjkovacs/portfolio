'use strict';

angular.module('personalApp')
  .controller('EducationCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "University of Michigan",
      paragraphs: [
        "I attended the University of Michigan from 2007-2011. I was a student in the College of Engineering, and earned a BSE in Computer Science Engineering.",
        "In 2010, during the summer between my junior and senior year, I interned at Parametric Technology Corporation. I joined a team that supported <a href=\"https://www.ptc.com/en/products/arbortext\">Arbortext Editor</a>, a text editing application that businesses use for authoring technical documentation and manuals.",
        "For my senior design class, I took a video game development course. I paired up with two other classmates, and we built a video game we called RAPTORS. It was a top-down shooter where the players attempt to get through levels while being attacked by dinosaurs. The game used Wii Remotes for input, and the user could aim anywhere on screen to shoot at enemies. It was very well-received at the expo, and we ended up winning 3rd place in the competition for best game. A trailer for the game can be seen <a href=\"https://www.youtube.com/watch?v=_CuuL-KYpdQ\">here</a>."
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
