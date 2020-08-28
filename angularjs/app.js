(function (){
    const app = angular.module('githubViewer', ['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when('/main',  {
                templateUrl: '/public/views/main.html',
                controller: 'MainController'
            })
            .when('/user/:username', {
                templateUrl: '/public/views/user.html',
                controller: 'UserController'
            })
            .when('/repo/:username/:reponame', {
                templateUrl: '/public/views/repo.html',
                controller: 'RepoController'
            })
            .otherwise({redirectTo: '/main'})
    })
}())