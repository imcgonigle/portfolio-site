/*jshint esversion: 6 */

(function () {
    'use strict';

    angular.module('contact')
    .component('contact', {
        templateUrl: 'components/contact/contact.template.html',
        controller: function contactController() {
            const vm = this;

            vm.$onInit = function() {
                vm.contactData = [];
            };

            vm.submitContactForm = function (contactData) {
                console.log(contactData);
            };
        }
    });
})();