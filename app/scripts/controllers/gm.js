'use strict';

angular.module('personalApp')
  .controller('GmCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "General Motors",
      paragraphs: [
        "In the summer of 2015 I began working at General Motors as a Software Architect on the Infotainment team within OnStar.",
		    "My team develops HTML5 web apps, with AngularJS being the most common Javascript framework used. Building software for a vehicle has proven to be an interesting and complex task. While some things become easier when building an app for a vehicle, special consideration must be paid to other aspects of design and development that may not exist or hold as much importance in traditional app development.",
        "I work directly with a team of about 20 developers. We typically split the team into smaller product teams of 4-8 during any given release/development cycle. We're an Agile team, with 2 to 3-week sprints, and all of the usual sprint ceremonies.",
        "My role on the team is to provide architectural guidance, support, and help enforce coding best practices to the development team. Also, I act as an interface between our development team, and the various other teams that we interact with during a development cycle, providing and receiving  technical input where necessary. This tends to take up most of my day, but I try to spend as much time as I can coding, working on proof-of-concepts, or creating utilities to help the team develop more efficiently."
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
