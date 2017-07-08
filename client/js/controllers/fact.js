angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }
     
        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }

         /*$scope.getDateFact = () => {
            var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
            FactService.get({
                if(!(date_regex.test(testDate))){

                type: 'date',
                number: date_regex,
                },
                 (response) => {
                $scope.fact = response
            })
                        else{
            
                return false;
            }    
    
            }  

*/

        $scope.getDateFact = () => {
                    FactService.get({
                        type: 'date',
                        number: $scope.number,
                    }, (response) => {
                        $scope.fact = response
                    })
                }

    $scope.getRandomFact = () => {
             var myArray = ['math','trivia','date'];
           var rand = myArray[Math.floor(Math.random() * myArray.length)];
            if(rand=='math' || rand=='trivia' || rand=='date'){
            FactService.get({   
                type: rand,
                number: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            }, (response) => {
                $scope.fact = response
            })
        }
        else{

                
                var randdate=new Date(+(new Date()) - Math.floor(Math.random()*31))

                FactService.get({
                    type: rand ,
                    number: randdate,
                }, (response) => {
                    $scope.fact = response
                })
        }
        
/*function getRandomInt(1, ) {

     return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
        }
*/
}

    })