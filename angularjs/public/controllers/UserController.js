(function () {

    const app = angular.module('githubViewer');

    const UserController = function ($scope, github, $routeParams) {

        const onError = function () {
            $scope.error = "Could not fetch the data."
        };
        const onRepos = function (data) {
            $scope.repos = data
        };
        const onUserComplete = function (data) {
            $scope.user = data
            github.getRepos($scope.user).then(onRepos, onError);
        };

        $scope.username = $routeParams.username
        $scope.repoSortOrder = "-stargazers_count"
        github.getUser($scope.username).then(onUserComplete, onError)
    };

    app.controller('UserController', UserController)
})();
