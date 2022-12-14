function initialize(){
    diceTable = document.getElementById("dicetable");
    rollDice();
}

function rollDice(){
    var numRolls = getRandomIneger(25, 100);

    for(var i = 0; i < numRolls; i++){
        var dieRoll = getRandomIneger(1,6);

        var newRow = diceTable.insertRow();
        var newCell = newRow.insertCell();
        newCell.innerHTML = "Roll " + (i + 1);

        newCell = newRow.insertCell();
        newCell.innerHTML = diceRoll;
    }
}