
async function rollDice(){
    await fetch("http://localhost:3000/roll")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        document.getElementById("dice1").value = data.dice1
        document.getElementById("dice2").value = data.dice2
        document.getElementById("dice3").value = data.dice3
        document.getElementById("dice4").value = data.dice4
        document.getElementById("dice5").value = data.dice5
        document.getElementById("dice6").value = data.dice6
    })
    
}



async function setNumbers(data){
    document.getElementById("dice1").value = data.dice1
    document.getElementById("dice2").value = data.dice2
    document.getElementById("dice3").value = data.dice3
    document.getElementById("dice4").value = data.dice4
    document.getElementById("dice5").value = data.dice5
    document.getElementById("dice6").value = data.dice6
}


