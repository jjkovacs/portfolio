'use strict';

angular.module('personalApp')
  .controller('NwsCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "New World Systems",
      paragraphs: [
        "I worked at New World Systems as a Software Engineer from the spring of 2011 until the summer of 2015. I was a member of the team that worked on the Aegis suite of public safety software.",
        "The many teams I was a part of all practiced a variation of the Agile development methodology. Most teams had 2 or 3-week sprints, as well as the usual sprint ceremonies (demo, retrospective, backlog grooming, and sprint planning).",
        "I worked with a lot of different technologies at New World Systems. A majority of my development was in .NET/C# on the newer products, and VB6/VB.NET on some of the legacy products. I was also a member of a team that began a greenfield client/server/database project. We built a web client using AngularJS and UI Bootstrap. The corresponding server was built using .NET, and exposed a REST API for client communication. The server communicated with a SQL Server database, using stored procedures, for data persistence.",
        "Some smaller projects that I was involved with include: interoping client apps with external devices (cameras, drivers license readers), building Windows Mobile/PocketPC apps utilizing a barcode scanner, and COM interop between newer and older Microsoft technologies."
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
