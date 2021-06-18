myApp.controller("ArticleController", function ($scope, $routeParams)
{

  var targetID = $routeParams.id;
  $scope.data;
  if (AllList.telescop.length - 1 >= targetID)
  {
    $scope.data = AllList.telescop[targetID];
    document.getElementById("fromTelescop").style.display = "block"
  }
  else
  {
    $scope.data = AllList.maps[targetID - AllList.telescop.length];
    document.getElementById("fromTelescop").style.display = "none"
  }
});
