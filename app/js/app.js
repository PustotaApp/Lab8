var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(function($routeProvider)
{
  $routeProvider.when('/main',
  {
    controller:'MainController',
    templateUrl:'views/main.html'
  });
  $routeProvider.when('/contacts',
  {
    controller:'ContactsController',
    templateUrl:'views/contacts.html'
  });
  $routeProvider.when('/blog',
  {
    controller:'BlogController',
    templateUrl:'views/blog.html'
  });
  $routeProvider.when('/price',
  {
    controller:'PriceController',
    templateUrl:'views/price.html'
  });
  $routeProvider.when('/set/:class?',
  {
    controller:'SetController',
    templateUrl:'views/set.html'
  });$routeProvider.when('/article/:id?',
  {
    controller:'ArticleController',
    templateUrl:'views/article.html'
  });
  $routeProvider.otherwise({redirectTo: '/main'});
});
