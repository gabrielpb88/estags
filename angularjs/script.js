(function () {

    const app = angular.module('githubViewer', []);

    const MainController = function ($scope, github, $interval, $log, $location, $anchorScroll) {

        const onError = function () {
            $scope.error = "Could not fetch the data."
        };
        const onRepos = function (data) {
            $scope.repos = data
            $location.hash("userDetails")
            $anchorScroll();
        };
        const onUserComplete = function (data) {
            $scope.user = data
            github.getRepos($scope.user).then(onRepos, onError);
        };


        const decrementCountdown = function () {
            $scope.countdown -= 1
            if ($scope.countdown < 1) {
                $scope.search($scope.username)
            }
        };

        let countdownInterval = null;
        const startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            $log.info("Searching for " + username)
            github.getUser(username)
                .then(onUserComplete, onError)
            if (countdownInterval) {
                $interval.cancel(countdownInterval)
                $scope.countdown = null
            }
        }

        $scope.username = "angular"
        $scope.message = "GitHub Viewer"
        $scope.repoSortOrder = "stargazers_count"
        $scope.countdown = 5
        startCountdown()
    };

    app.controller('MainController', MainController)
})();
