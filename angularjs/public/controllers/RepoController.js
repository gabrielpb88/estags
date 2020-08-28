(function () {

    const app = angular.module('githubViewer');

    const RepoController = function ($scope, github, $routeParams, $location) {

        const username = $routeParams.username
        const reponame = $routeParams.reponame

        const onError = function () {
            $scope.error = "Could not fetch the data."
        };

        const onRepo = function (data) {
            $scope.repo = data
            // $location.path(`/repo/${{username}}/${{reponame}}`)
        };

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError)
    };

    app.controller('RepoController', RepoController)
})();
