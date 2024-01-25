
// fetch the element woth a class name of main container and store it insinde of a variable called maincontainer
const boxes = document.getElementsByClassName('box');

// varriable to keeep track of whos turn it is
// let or var
let playerTurn = 'X';

// add an event listener to our maincontainer element
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", (event)=>{
    console.log(event);
    console.log('box ' + event.target.classList[2] + " was clicked");
    
    // modify the inner text of the clicked element and changing it to either an 
    //X or an O depending on whos turn it is
    if(playerTurn == 'X'){
        event.target.innerText = "X";
        // re asigning the value of the player turn variable to toggle between X and O
        playerTurn = 'O';
    }else if(playerTurn == 'O'){
        event.target.innerText = "O";
        // re asigning the value of the player turn variable to toggle between X and O
        playerTurn = 'X';
    }
    // at the end of every trun we want the program to scan the board and check for a winner
    checkForWinner()
    })
}

const squares = document.querySelectorAll(".box");


function clearBoard(){
    squares.forEach((square) => square.innerText="")
}
function checkForWinner(){
    // in order to win there needs tobe either 3 Xs or 3 Os in a row in any direction
    // start with Xs
    console.log(squares);
    console.log(squares[0].innerText);
    if(squares[0].innerText == "X" && squares[1].innerText == "X" && squares[2].innerText == "X"){
        // if all squares in the top row have an inner text property that equal X then we have a winner !
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[3].innerText == "X" && squares[4].innerText == "X" && squares[5].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[6].innerText == "X" && squares[7].innerText == "X" && squares[8].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[0].innerText == "X" && squares[3].innerText == "X" && squares[6].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[1].innerText == "X" && squares[4].innerText == "X" && squares[7].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[2].innerText == "X" && squares[5].innerText == "X" && squares[8].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[0].innerText == "X" && squares[4].innerText == "X" && squares[8].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[2].innerText == "X" && squares[4].innerText == "X" && squares[6].innerText == "X"){
        alert("X Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[0].innerText == "O" && squares[1].innerText == "O" && squares[2].innerText == "O"){
        // if all squares in the top row have an inner text property that equal X then we have a winner !
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[3].innerText == "O" && squares[4].innerText == "O" && squares[5].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[6].innerText == "O" && squares[7].innerText == "O" && squares[8].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[0].innerText == "O" && squares[3].innerText == "O" && squares[6].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[1].innerText == "O" && squares[4].innerText == "O" && squares[7].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[2].innerText == "O" && squares[5].innerText == "O" && squares[8].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[0].innerText == "O" && squares[4].innerText == "O" && squares[8].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }else if(squares[2].innerText == "O" && squares[4].innerText == "O" && squares[6].innerText == "O"){
        alert("O Won !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        clearBoard();
    }
}



