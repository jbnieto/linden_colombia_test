/**
 * Created with JetBrains WebStorm.
 * User: JOSE JULIAN BETANCUR
 * Date: 2/09/13
 * Time: 03:43 PM
 * To change this template use File | Settings | File Templates.
 */

// Functions for aleatory data
function getRandomArbitary (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sending () {
    tincan = new TinCan (
        {
            url: window.location.href,
            activity: GolfExample.CourseActivity
        }
    );

    tincan.sendStatement(
        {
            verb: "completed",
            context: GolfExample.getContext(),
            result: {
                completion: true,
                success: true,
                score: {
                    "raw": _score
                }
            }
        }
    );
}

var _total = 5;                                             // Total cards
var _sign  = new Array ('-','+');                           // Operations
// Operations
var _msg  = new Array ('Correcto','Incorrecto','Vacio', 'Realice la siguiente operacion', 'Resultado de la operacion');
var _count = 0;                                             // Card number or step
var _coins = 0;                                             // Coins for attempted
var _scores = new Array (20, 10, 0);                        // Coins provided
var _score = 0;                                             // Final Score

function initvar($scope){
    _score = _score + _coins;
    if(_count >= _total){
        sending();
        $scope.button_0 = $scope.button_1 = $scope.button_2 = 'false';
    }
    $scope.info = _count + '/' + _total;
    $scope.score = _score;
    _coins = _scores[0];
    $scope.head = _msg[3];
    $scope.total = parseInt(_count/_total*100);
    $scope.step = _count;
    $scope.dig_0 = getRandomArbitary(0,9);
    $scope.dig_1 = getRandomArbitary(0,9);
    $scope.opera = _sign[getRandomArbitary(0,1)];
    $scope.value = undefined;
    switch($scope.opera){
        case '-':
            _resul = $scope.dig_0  - $scope.dig_1;
            break;
        case '+':
            _resul = $scope.dig_0 + $scope.dig_1;
            break;
    }
    _count++;
}

function ctrl($scope) {
    $scope.button_0 = $scope.button_1 = 'true';
    $scope.button_2 = 'false';
    initvar($scope);
    $scope.next = function() {
        if( ($scope.value == undefined) || ($scope.value == null) ){
            // Null
            _coins = _scores[2];
            $scope.msg =  _msg[2];
            $scope.class_msg = 'alert-info';
            $scope.button_0 = $scope.button_1 = 'true';
            $scope.button_2 = 'false';
            initvar($scope);
        }else{
            if( $scope.value == _resul ){
                // Success!
                $scope.class_msg = 'alert-success';
                $scope.msg =  _msg[0];
                $scope.button_0 = $scope.button_1 = 'true';
                $scope.button_2 = 'false';
                initvar($scope);
            }else{
                // Fail!
                _coins = _scores[1];
                $scope.class_msg = 'alert-error';
                $scope.msg =  _msg[1];
                $scope.button_0 = $scope.button_1 = 'true';
                $scope.button_2 = 'false';
            }
        }
        $('#alert').css('display','block').delay(1000).fadeOut('slow');
    }
    $scope.showme = function() {
        _coins = _scores[1];
        $scope.head = _msg[4];
        $scope.value = _resul;
        $scope.button_0 = $scope.button_2 = 'true';
        $scope.button_1 = 'false';
    }
    $scope.back = function() {
        $scope.head = _msg[3];
        $scope.value = undefined;
        $scope.button_0 = $scope.button_1 = 'true';
        $scope.button_2 = 'false';
    }
}



