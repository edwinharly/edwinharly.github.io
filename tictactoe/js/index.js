$(document).ready(function() {
    var x = "x"
    var o = "o"
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    var squares = $('#tic-tac-toe #game li');
    var selectContainer = document.getElementById('select-container');
    var play = document.getElementById('play');
    var maxBoardSize = 10;
    var board = document.getElementById('game');

    var initGame = function() {
        $('.setting').each(function() {
            this.style.display = 'inline';
        })
        $('.playing').each(function() {
            this.style.display = 'none';
        })

        if (selectContainer.childElementCount <= 0) {
            for (var i = 3; i <= maxBoardSize; i++) {
                var option = document.createElement('option');
                option.innerText = i.toString() + ' x ' + i.toString();
                option.setAttribute('value', i);
                selectContainer.appendChild(option);
            }
        }

        board.innerHTML = '';
    }

    var registerEventListener = function(elements) {
        elements.click(function(){
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
            else if (isSquareSelected(this)) {
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
    }

    var renderBoard = function() {
        var boardSize = parseInt(selectContainer.options[selectContainer.selectedIndex].value);
        var counter = 0;
        for (var i = 0; i < boardSize; i++) {
            var row = document.createElement('div');

            for (var j = 0; j < boardSize; j++) {
                counter++;
                var square = document.createElement('li');
                square.innerText = '+';
                square.setAttribute('id', counter.toString());
                square.setAttribute('class', 'btn span1');
                row.appendChild(square);
            }

            board.appendChild(row);
        }

        squares = $('#tic-tac-toe #game li');
        registerEventListener(squares);
    }

    var startGame = function() {
        $('.setting').each(function() {
            this.style.display = 'none';
        })
        $('.playing').each(function() {
            this.style.display = 'flex';
        })
        renderBoard();
    }

    play.addEventListener('click', function(event) {
        event.preventDefault();
        startGame();
    });

    var hasClassO = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!$('#' + (arr[i]).toString()).hasClass('o')) {
                return false;
            }
        }
        return true;
    };

    var hasClassX = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!$('#' + (arr[i]).toString()).hasClass('x')) {
                return false;
            }
        }
        return true;
    };

    var isOWin = function() {
        var step = Math.sqrt(getBoardSize());
        // horizontal
        for (var i = 1; i <= getBoardSize(); i += step) {
            var arr = [];
            for (var j = 0; j < step; j++) {
                arr.push(i + j);
            }
            if (hasClassO(arr)) {
                return true;
            }
        }
        // vertical
        for (var i = 1; i <= step; i++) {
            var arr = [];
            for (var j = 0; j < step; j++) {
                arr.push(i + (j * step));
            }
            if (hasClassO(arr)) {
                return true;
            }
        }
        // diagonal
        var arr = [];
        for (var i = 1; i <= getBoardSize(); i += step + 1) {
            arr.push(i);
        }
        if (hasClassO(arr)) {
            return true;
        }

        arr = [];
        for (var i = step; i < getBoardSize(); i += (step - 1)) {
            arr.push(i);
        }
        if (hasClassO(arr)) {
            return true;
        }
        return false;
    };

    var isXWin = function() {
        var step = Math.sqrt(getBoardSize());
        // horizontal
        for (var i = 1; i <= getBoardSize(); i += step) {
            var arr = [];
            for (var j = 0; j < step; j++) {
                arr.push(i + j);
            }
            if (hasClassX(arr)) {
                return true;
            }
        }
        // vertical
        for (var i = 1; i <= step; i++) {
            var arr = [];
            for (var j = 0; j < step; j++) {
                arr.push(i + (j * step));
            }
            if (hasClassX(arr)) {
                return true;
            }
        }
        // diagonal
        var arr = [];
        for (var i = 1; i <= getBoardSize(); i += step + 1) {
            arr.push(i);
        }
        if (hasClassX(arr)) {
            return true;
        }

        arr = [];
        for (var i = step; i < getBoardSize(); i += (step - 1)) {
            arr.push(i);
        }
        if (hasClassX(arr)) {
            return true;
        }
        return false;
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

    var getBoardSize = function() {
        var boardSize = parseInt(selectContainer.options[selectContainer.selectedIndex].value);
        return Math.pow(boardSize, 2);
    }

    var isTie = function() {
        return count == getBoardSize();
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

    $("#reset").click(function () {
        restartTheGame();
        initGame();
    });

    initGame();
});