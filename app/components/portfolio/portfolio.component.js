/*jshint esversion: 6 */

(function () {
    'use strict';

    angular.module('portfolio')
    .component('portfolio', {
        templateUrl: 'components/portfolio/portfolio.template.html',
        controller: function portfolioController() {
            const vm = this;
            vm.projects = [];

            vm.$onInit = function() {
                vm.projects = [
                    {
                        title: "Route Planner",
                        description: "An logistics application that makes it easy for users to plan routes.",
                        github: "https://github.com/imcgonigle/Route-Planner",
                        siteUrl: "https://todo-list-2d655.firebaseapp.com/",
                        imageUrl: "assets/images/portfolio/route-planner.png"
                    },
                    {
                        title: "Inventory Application",
                        description: "An application that allows users to easily manage inventories wherever they are.",
                        github: "https://github.com/imcgonigle/inventory-application",
                        siteUrl: "https://inventory-application.herokuapp.com/",
                        imageUrl: "assets/images/portfolio/inventory-application.png"
                    },
                    {
                        title: "Cards Against iPhones",
                        description: "A Cards Against Humanity iPhone application.",
                        github: "https://github.com/imcgonigle/CAH-MVP",
                        siteUrl: "https://cah-app.herokuapp.com/",
                        imageUrl: "assets/images/portfolio/cards-against-iphones.png"
                    },
                    {
                        title: "G-Space",
                        description: "Social networking application made for past and current Galvanize students.",
                        github: "https://github.com/imcgonigle/gSpace",
                        siteUrl: "https://gspace-app.herokuapp.com/login",
                        imageUrl: "assets/images/portfolio/g-space.png"
                    },
                    {
                        title: "Target Timer",
                        description: "An android application that helps users practice shooting. The app will call out different targets at a rate specified by the user. The user can also choose to have the app call out targets at random times. At the end of the round, the user can view which targets were called out so that they can check to see if they hit all of them. This was done as a freelance project.",
                        github: "https://github.com/imcgonigle/shooting-timer",
                        siteUrl: "",
                        imageUrl: "assets/images/portfolio/target-timer.png"
                    },
                    {
                        title: "Denver Eats",
                        description: "A website for 'Denver Eats' that allows users to check out the menu and place an order for delivery.",
                        github: "https://github.com/imcgonigle/Denver-Eats",
                        siteUrl: "https://g31-galvanize-eats.firebaseapp.com/",
                        imageUrl: "assets/images/portfolio/denver-eats.png"
                    },
                    {
                        title: "Zombie-Risk",
                        description: "Denver Broncos Hackathon winner for 'Best Game' and 'Best use of MapQuest' for this project. Resource management zombie game built on top of MapQuest API. A zombie vs football player game of risk. This was a group project done at the DenverBroncos Hackathon. We used the MapQuest API to lay the game out over Denver. All the territories in the game were made using the polygon tool.",
                        github: "https://github.com/imcgonigle/Zombie-Risk",
                        siteUrl: "https://zombie-risk.firebaseapp.com/",
                        imageUrl: "assets/images/portfolio/zombie-risk.png"
                    },
                ];
            };
        },
    });
})();