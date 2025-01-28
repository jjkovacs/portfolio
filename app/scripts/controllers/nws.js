'use strict';

angular.module('personalApp')
  .controller('NwsCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "New World Systems",
      paragraphs: [
        "I worked at New World Systems from the spring of 2011 until the summer of 2015, shortly before the company was acquired by Tyler Technologies. I was a member of the team that worked on the Aegis suite of <a href=\"https://www.tylertech.com/products/enterprise-public-safety\">enterprise public safety software</a>.",
  
        "<b><i>Software Engineer - Aegis - VB6, VB.NET, C#/.NET, SQL Server - 2011-2013</i></b><br>I began my stint at New World Systems by working on the company's legacy suite of law enforcement records applications. These applications had a large established customer base throughout the United States. I worked on an Agile team, contributing to new development, and warranty items. Often times I would support the resolution of high-priority customer issues, sometimes working directly with customers. One time I even spent the day at a county jail facility to help deploy and test a new software release!",
  
        "Working on such a large and established suite of software, especially as a new dev, provided me a great opportunity to learn software patterns and practices, technologies I hadn't previously worked with, and to learn the public safety industry/use cases. Aside from the main suite of software, I also worked on smaller apps/projects like supporting barcode scanning devices for scanning driver's licenses, and Windows Mobile/PocketPC apps for logging when security rounds were conducted at jail facilities. I quickly became an SME in our area, which helped me move into my next assignment with the company.",
  
        "<b><i>Software Engineer - J2 - Javascript/AngularJS, C#/.NET, REST, SQL Server - 2013-2015</i></b><br>In 2013, the company formed a development team to build a brand new, browser-based version of the public safety software suite intended to eventually replace the legacy applications. I was chosen to be part of this team. I worked with other developers on the team to evaluate different web frameworks, and we ultimately landed on AngularJS. We had a team of 5 devs working on the full stack, and while all of us contributed to portions across the full stack, we had SMEs that were focused on particular areas. My focus was on the client side.",
  
        "While working on the new app, I learned a lot about AngularJS, and web development in general. I also contributed bug fixes to some of the open source AngularJS libraries we were using. Working with this strong team of developers on full stack development using new technologies was an extremely valuable experience for me.",
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
