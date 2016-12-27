var app = angular.module('checkAnswersApp', []);
app.controller('checkAnswerController', function ($scope) {

    $scope.answers = [
        {"id": 1, "answer": ["first"], "points": 2},
        {"id": 2, "answer": ["second", "druga"], "points": 3},
        {"id": 3, "answer": ["third", "trzecia"], "points": 4}
    ];
    
    $scope.userAnswer = [];
    $scope.checkAnswer = function (a) {
        
        a.evaluated = true;
        console.log(a);
        
        for (var i = 0; i<$scope.answers.length; i++) {
            
            if (a.id === $scope.answers[i].id) {

                    for (var j = 0; j<$scope.answers[i].answer.length ; j++ ) {
                
                        if (a.userAnswer === $scope.answers[i].answer[j]) {
                            
                            a.awardedPoints = a.points;
                            return;           
                        }
                    }                
                }            
            }
            a.awardedPoints = 0;
        };        
              
    $scope.showAnswer = function (a) {
       a.showAnswer = a.answer.toString();
    };    
        
});