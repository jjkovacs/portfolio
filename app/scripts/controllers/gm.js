'use strict';

angular.module('personalApp')
  .controller('GmCtrl', function ($scope, $timeout) {
    $scope.content = {
      header: "General Motors",
      paragraphs: [
        "I worked at General Motors from the summer of 2015 to the fall of 2024. I had various roles as a member of the infotainment development team.",
        
        "<i><b>Software Architect - NGI Infotainment Connected Apps - 2015-2024</b><br>Javascript/AngularJS, NodeJS, REST, OAuth</i><br>When I joined the team in 2015, GM was working on the first release of connected apps for their vehicles. The initial release was for the NGI radios, which had web-based apps. GM had just hired a significant amount of new contract developers to get the project across the line. I was brought on to the team in a Software Architecture role, where I spent my time developing apps/tools, reviewing code/existing architecture, architecting new software solutions, creating technical documentation, and supporting the development, product owner, and testing teams.",
  
        "In 2016 we had our initial launch of connected apps, starting with the 2017 GMC Acadia. We launched an <a href=\"https://gmauthority.com/blog/2016/06/2017-model-year-gm-vehicles-to-roll-out-long-awaited-app-shop/\">App Store</a>, Glympse, Audiobooks, The Weather Channel, and <a href=\"https://techcrunch.com/2017/12/05/gm-launches-marketplace-for-in-car-shopping-and-reservations/\">Marketplace</a>, in addition to various apps on the system that run in the background to support the platform (known as the \"core apps\").",

        "<img src=\"../../assets/images/ngi_homescreen.jpg\" class=\"info-img\" />",
  
        "Over the next few years, we released various software updates to these connected vehicles, to new vehicles, and to regions outside of North America. These updates provided new features such as the ability to purchase OnStar plans/services, single sign-on, and a notifications platform. In 2018, we launched the infotainment counterpart to the mobile <a href=\"https://chevroletdemo.com/invehicleapps/mychevrolet/1\">\"MyBrand\"</a> app (myChevrolet, myCadillac, etc.)--providing features and functionality targeted to vehicle ownership, such as: service scheduling with a dealer, digital owner's manual, roadside assistance, and the ability to view your current OnStar products/services. By 2024, our apps were available on over 13 million vehicles in North America alone.",

        "<img src=\"../../assets/images/ngi_marketplace.webp\" class=\"info-img\" />",
  
        "<i><b>Software Architect - Android Infotainment Connected Core Apps - 2020-2024</b><br>Android</i><br>In 2020 as our NGI radio production ramped down, and our next generation of Android-based infotainment systems ramped up, I was assigned to support the Android infotainment development team. At this point I was the only developer still at GM that still worked on the NGI radios, plus I was supporting software architecture for the new Android apps. As with NGI, I was the infotainment SME in product and technical discussions with external stakeholders, created technical specs/documentation, and was the technical resource for the development team. I also acted as product owner at various times throughout this period, gathering requirements, technical design, and writing user stories for the development team.",

        "<img src=\"../../assets/images/vcu_homescreen.jpg\" class=\"info-img\" />",
  
        "<b><i>Software Development Manager - Infotainment Connected Core Apps - 2021-2024</i></b><br>In 2021, I was promoted to manager of the software development team for connected core apps. As manager, I owned the infotainment connected core apps on the NGI and Android platforms, managed a team of 8-12 software developers/QA, and retained much of my existing responsibilities in my software architecture role. Being in a management role for the first time, I gained valuable experience with growing/coaching team members, playing a more active role in priority and schedule management, delegating tasks, HR tasks, and building a team culture. While in this role, my team successfully built and delivered our apps to the new (VCU) infotainment platform, beginning with the 2022 Cadillac Lyriq.",
      ]
    };
    
    $timeout(show, 500);
    
    function show() {
      $scope.show = true;
    }
  });
