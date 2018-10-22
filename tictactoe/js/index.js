$(document).ready(function() {
    var x = "x"
    var o = "o"
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    var squares = $('#game li');

    var hasClassO = function() {
        if (arguments.length <= 0)
            return false;
        for (var i = 0; i < arguments.length; i++) {
            if (!$(arguments[i]).hasClass('o'))
                return false;
        }
        return true;
    };

    var hasClassX = function() {
        if (arguments.length <= 0)
            return false;
        for (var i = 0; i < arguments.length; i++) {
            if (!$(arguments[i]).hasClass('x'))
                return false;
        }
        return true;
    };

    var isOWin = function() {
        return hasClassO('#one', '#two', '#three') || 
               hasClassO('#four', '#five', '#six') ||
               hasClassO('#seven', '#eight', '#nine') ||
               hasClassO('#one', '#four', '#seven') ||
               hasClassO('#two', '#five', '#eight') ||
               hasClassO('#three', '#six', '#nine') ||
               hasClassO('#one', '#five', '#nine') ||
               hasClassO('#three', '#five', '#seven')
    };

    var isXWin = function() {
        return hasClassX('#one', '#two', '#three') || 
               hasClassX('#four', '#five', '#six') ||
               hasClassX('#seven', '#eight', '#nine') ||
               hasClassX('#one', '#four', '#seven') ||
               hasClassX('#two', '#five', '#eight') ||
               hasClassX('#three', '#six', '#nine') ||
               hasClassX('#one', '#five', '#nine') ||
               hasClassX('#three', '#five', '#seven')
    };

    var restartTheGame = function() {
        squares.text("+");
        squares.removeClass('disable')
        squares.removeClass('o')
        squares.removeClass('x')
        squares.removeClass('btn-primary')
        squares.removeClass('btn-info')
        count = 0;
    }

    var isTie = function() {
        return count == 9;
    }

    var OWins = function() {
        alert('O wins')
        count = 0
        o_win++
        $('#o_win').text(o_win)
    }

    var XWins = function() {
        alert('X wins')
        count = 0
        x_win++
        $('#x_win').text(x_win)
    }

    var OMakeAMove = function(square) {
        count++
        $(square).text(o)
        $(square).addClass('disable o btn-primary')
    }

    var XMakeAMove = function(square) {
        count++
        $(square).text(x)
        $(square).addClass('disable x btn-info')
    }

    var isOTurn = function() {
        return count % 2 === 0;
    }

    var isSquareSelected = function(square) {
        return $(square).hasClass('disable')
    }

    squares.click(function(){
        if (isOWin()) {
            alert('O has won the game. Start a new game')
            restartTheGame();
        }
        else if (isXWin()) {
            alert('X wins has won the game. Start a new game')
            restartTheGame();
        }
        else if (isTie()) {
            alert('Its a tie. It will restart.')
            restartTheGame();
        }
        else if (isSquareSelected()) {
            alert('Already selected')
        }
        else if (isOTurn()) {
            OMakeAMove(this);
            if (isOWin()) {
                OWins();
            }
        }
        else {
            XMakeAMove(this);
            if (isXWin()) {
                XWins();
            }
        }
    });

    $("#reset").click(function () {
        restartTheGame();
    });
});