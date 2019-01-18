$(document).ready(function () {

    let currFace = 1;

    $('.btn2').click(function () {
        currFace = increaseCurrFace(currFace);
        $('#cube').removeClass();
        $('#cube').addClass(calcFace(currFace));
    });

    $('.btn1').click(function () {
        currFace = 1;
        $('#cube').removeClass();
        $('#cube').addClass(calcFace(currFace));
    });

    function increaseCurrFace(num) {
        return currFace === 7 ? 7 : (currFace) % 7 + 1;
    }

    function calcFace(num) {
        let classe = '';
        switch (currFace) {
            case 1:
                classe = 'show-front';
                break;
            case 2:
                classe = 'show-right';
                break;
            case 3:
                classe = 'show-back';
                break;
            case 4:
                classe = 'show-left';
                break;
            case 5:
                classe = 'show-front-2';
                break;
            case 6:
                classe = 'show-right-2';
                break;
            case 7:
                classe = 'show-back-2';
                break;
            default: classe = 'show-back-2';
        }
        return classe;
    }

}); //end of doc ready function


