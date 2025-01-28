'use strict';

angular.module('personalApp')
  .controller('EducationCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "University of Michigan",
      paragraphs: [
        "I attended the University of Michigan from the fall of 2007 until the spring of 2011. I was a student in the College of Engineering, and studied in the EECS department.",
        "During the summer of 2010 I interned at a software company called Parametric Technology Corporation in Ann Arbor, MI. I was part of the team that worked on the Arbortext Editor. I was assigned various projects, including localization-related projects, as well as the implementation of a new front-end feature in the Arbortext app.",
        "In 2011 I graduated Cum Laude, and received my Computer Science Engineering BSE."
      ]
    };

    $scope.content.paragraphs = [
      "I attended the University of Michigan from 2007-2011. I was a student in the College of Engineering, and majored in Computer Science Engineering.",
      "In 2010, during the summer between my junior and senior year, I interned at Parametric Technology Corporation. I joined a team that supported Arbortext Editor, a text editing application that businesses use for authoring technical documentation and manuals.",
      "For my senior design class, I took a video game development course. I paired up with two other classmates, and we built a video game we called RAPTORS. It was a top-down shooter where the players attempt to get through levels while being attacked by dinosaurs. The game used wiimotes for input, and the user could aim anywhere on screen to shoot at enemies. It was very well-received at the expo, and we ended up winning 3rd place in the competition for best game. A trailer for the game can be seen <a href=\"https://www.youtube.com/watch?v=_CuuL-KYpdQ\">here</a>.",
      "In 2011, I graduated and received a Computer Science Engineering BSE."
    ];
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
