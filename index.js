//This function calls the API :)
async function rollDice(){
    const response = await fetch("https://web-dice-roller-server-dycnfnbkfgd8fxgp.centralus-01.azurewebsites.net/roll")
    const data = await response.json()
    document.getElementById("dice1").value = data.die1
    document.getElementById("dice2").value = data.die2
    document.getElementById("dice3").value = data.die3
    document.getElementById("dice4").value = data.die4
    document.getElementById("dice5").value = data.die5
    document.getElementById("dice6").value = data.die6
}