myApp.controller("ArticleController", function ($scope, $routeParams)
{

  var targetID = $routeParams.id;
  $scope.data;
  if (AllList.guns.length - 1 >= targetID)
  {
    $scope.data = AllList.guns[targetID];
    document.getElementById("fromGuns").style.display = "block"
  }
  else
  {
    $scope.data = AllList.maps[targetID - AllList.guns.length];
    document.getElementById("fromGuns").style.display = "none"
  }
});
