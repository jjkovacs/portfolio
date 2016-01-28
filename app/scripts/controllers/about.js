'use strict';

angular.module('personalApp')
  .controller('AboutCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "A Little About Me",
      paragraphs: [
        "Hello! I'm James. Nice to meet you!",
        "I'm a software developer (in case you didn't already guess :-P). I graduated from the University of Michigan in the spring of 2011, and I have been working professionally ever since. I have a passion for problem-solving, which kind of naturally brought me down the software path. Writing software is pretty much like putting a puzzle together--except at the end of it, you have something cool and useful. That sense of satisfaction, at the end of the day, is what really makes me enjoy what I do.",
        "I've recently become a father, and the experience is like none other. Seeing that smiling face in the morning before I go to work makes my day, even before it has gotten started.",
        "When I'm not working, or being a dad, I like to bike as much as I can. I've been bike riding since I was little, and as the years pass, I try to push myself further and further. I'm a big local sports fan as well. I try to attend as many sporting events as I can, especially Michigan football games (Go Blue!)."
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
