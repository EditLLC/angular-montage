'use strict';

var montageData = require('montagedata');

angular
	.module('ngMontage', [])
	.factory('montage', ['$q', function ($q) {

		var _request = montageData.Client.prototype.request;

		montageData.Client.prototype.request = function() {

			// Wrap the Montage promise in an Angular promise
			return $q.when(_request.apply(this, arguments));
		};

		return montageData;
	}]);
