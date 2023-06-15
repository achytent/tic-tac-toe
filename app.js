const gameBoard = function() {
    const squares = document.querySelectorAll(".square");
    const winner = document.querySelector(".winner");
    let currentMarker = 'X'

    const placeMarker = (event) => {
        if(event.target.textContent != ''){
            return;
        } else {
            event.target.textContent = currentMarker;
            currentMarker == "X" ? currentMarker = "O" : currentMarker = "X";
        }
        winner.textContent = checkForGameOver();
    }
    
    const addOnClick = (squares) => {
        squares.forEach(square => {
            square.addEventListener('click', (event) => gameBoard.placeMarker(event))
        })
    };

    const clearField =  () => {
        squares.forEach(square => square.textContent = "")
    }

    const checkForGameOver = () => {
        if(squares[0].textContent == "X" && squares[1].textContent == "X" && squares[2].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[3].textContent == "X" && squares[4].textContent == "X" && squares[5].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[6].textContent == "X" && squares[7].textContent == "X" && squares[8].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[0].textContent == "X" && squares[3].textContent == "X" && squares[6].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[1].textContent == "X" && squares[4].textContent == "X" && squares[7].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[2].textContent == "X" && squares[5].textContent == "X" && squares[8].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[0].textContent == "X" && squares[4].textContent == "X" && squares[8].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[2].textContent == "X" && squares[4].textContent == "X" && squares[6].textContent == "X"){
            return "Player 1 won!";
        }
        if(squares[0].textContent == "O" && squares[1].textContent == "O" && squares[2].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[3].textContent == "O" && squares[4].textContent == "O" && squares[5].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[6].textContent == "O" && squares[7].textContent == "O" && squares[8].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[0].textContent == "O" && squares[3].textContent == "O" && squares[6].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[1].textContent == "O" && squares[4].textContent == "O" && squares[7].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[2].textContent == "O" && squares[5].textContent == "O" && squares[8].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[0].textContent == "O" && squares[4].textContent == "O" && squares[8].textContent == "O"){
            return "Player 2 won!";
        }
        if(squares[2].textContent == "O" && squares[4].textContent == "O" && squares[6].textContent == "O"){
            return "Player 2 won!";
        }
        if(currentMarker == "O"){
            return "Player 2, make a move!";
        } else if(currentMarker == "X"){
            return "Player 1, make a move!";
        }
    }
    return {squares, placeMarker, addOnClick, clearField}
}();

gameBoard.addOnClick(gameBoard.squares);

const clearButton = document.querySelector("button");
clearButton.addEventListener('click', gameBoard.clearField)
