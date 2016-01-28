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
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
