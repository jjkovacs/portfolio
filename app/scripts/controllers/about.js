'use strict';

angular.module('personalApp')
  .controller('AboutCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "A Little About Me",
      paragraphs: [
        "Hello! I'm James. Nice to meet you!",
        "My passion for software development started when I was in high school. As a hobby, I would build custom web layouts/templates for social media websites, and I had a Freewebs site where I hosted all of the different layouts I had created. In 2007, I was accepted into University of Michigan's College of Engineering, and I decided to turn this hobby into a career.",
        "I graduated in 2011 and began my career at New World Systems, working on public safety software. I had the opportunity to work on many different projects, and many different technologies, which was an incredible learning experience for a new developer.",
        "After a few years, I was ready to take my career in a different direction. Having grown up in the Metro Detroit area, I was interested in working in the automotive industry. In 2015 I was hired by GM to work on the infotainment system, and have been there ever since.",
        "Outside of work, I enjoy spending time with my family. I'm an avid sports fan, and I enjoy watching and attending games for all of the local sports teams. On fall Saturdays, you can find me out on the golf course in Ann Arbor tailgating for Michigan football (Go Blue!).",
        "Thank you for stopping by! If you would like to learn more about my experience, please check out the other sections on this site!"
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
