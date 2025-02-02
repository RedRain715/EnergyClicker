const savedPlayerData = localStorage.getItem('player');
const player = savedPlayerData ? JSON.parse(savedPlayerData): {
    energy: 0,
    energyPerSec: 1,
}
const savedGameData = localStorage.getItem('game');
const game = savedGameData ? JSON.parse(savedGameData): {
    delay: 650,//delay for energyPerSec
}
function addEnergy() {
    player.energy += player.energyPerSec;
    updateUI();
    saveGame();
}
function updateUI() {
    document.title = 'Energy: ' + player.energy //Change title
    document.getElementById('energy').innerText = player.energy;
}
function saveGame() {
    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('game', JSON.stringify(game));
}
console.log(localStorage.getItem('player')); // Check stored data
updateUI(); 
setInterval(() => {
    addEnergy();
}, game.delay);

