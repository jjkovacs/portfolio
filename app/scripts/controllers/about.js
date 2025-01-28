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

    $scope.content.paragraphs = [
      "Hello! I'm James. Nice to meet you!",
      "My passion for software development started when I was in high school. As a hobby, I would build custom web layouts/templates for social media websites, and I had a Freewebs site where I hosted all of the different layouts I had created. In 2007, I was accepted into University of Michigan's College of Engineering, and I decided to turn this hobby into a career.",
      "I graduated in 2011 and began my career at New World Systems, working on public safety software. I had the opportunity to work on many different projects, and many different technologies, which was an incredible learning experience for a new developer.",
      "After a few years, I was ready to take my career in a different direction. Having grown up in the Metro Detroit area, I was interested in working in the automotive industry. In 2015 I was hired by GM to work on the infotainment system, and have been there ever since.",
      "Outside of work, I enjoy spending time with my family. I'm also an avid sports fan. I enjoy watching and attending games for all of the local sports teams. On fall Saturdays, you can find me out on the golf course in Ann Arbor tailgating for Michigan football.",
      "Thank you for stopping by! If you would like to learn more about my experience, please check out the other sections on my portfolio!"
    ];
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
