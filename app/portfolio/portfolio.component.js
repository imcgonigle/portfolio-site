'use strict'

angular.
module('portfolio').
component('portfolio', {
    templateUrl: 'portfolio/portfolio.template.html',
    controller: function portfolioController() {
        const vm = this
        vm.projects = []

        vm.$onInit = function() {
            vm.projects = [
                {
                    title: "Project 1",
                    description: "This is a description.",
                    github: "github/site/url",
                    imageUrl: "www.imageplace.com"
                }
            ]
        }
    },
})