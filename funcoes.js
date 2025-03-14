/* function AlienSelector() {
    const Aliens = ["Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Grey Matter", "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreak", "Cannonbolt", "Wildvine", "Blitzwolfer", "Snare-oh", "Frankenstrike", "Upchuck", "Ditto", "Eye Guy", "Way Big", "Spitter", "Arctiguana", "Buzzshock", "Swampfire", "Echo Echo", "Humungousaur", "Jetray", "Big Chill", "Chromastone", "Brainstorm", "Spider Monkey", "Goop", "Alien X", "Lodestar", "Rath", "Nanomech", "Water Hazard", "Ampfibian", "Armodrillo", "Terraspin", "NRG", "Fasttrack", "Clockwork", "Chamalien", "Shocksquatch", "Eatle", "Jury Rigg", "Feedback", "Bloxx", "Gravattack", "Crash Hopper", "Ball Weevil", "Walkatrout", "Pesky Dust", "Molestache", "The Worst", "Kickin Hawk", "Astrodactyl", "Surge", "Gax", "Shock-Rock", "Overflow"];
    const Quantity = Aliens.length;

    let Spin = Aliens[Math.floor(Math.random() * Quantity)];
    const linha = document.getElementById('AlienResult');
    

    if (condition) {
        
    }
    linha.innerText = Spin;
    console.log(Spin)
} */

/* function AlienSelector() {
    const Aliens = ["Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Grey Matter", "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreak", "Cannonbolt", "Wildvine", "Blitzwolfer", "Snare-oh", "Frankenstrike", "Upchuck", "Ditto", "Eye Guy", "Way Big", "Spitter", "Arctiguana", "Buzzshock", "Swampfire", "Echo Echo", "Humungousaur", "Jetray", "Big Chill", "Chromastone", "Brainstorm", "Spider Monkey", "Goop", "Alien X", "Lodestar", "Rath", "Nanomech", "Water Hazard", "Ampfibian", "Armodrillo", "Terraspin", "NRG", "Fasttrack", "Clockwork", "Chamalien", "Shocksquatch", "Eatle", "Jury Rigg", "Feedback", "Bloxx", "Gravattack", "Crash Hopper", "Ball Weevil", "Walkatrout", "Pesky Dust", "Molestache", "The Worst", "Kickin Hawk", "Astrodactyl", "Surge", "Gax", "Shock-Rock", "Overflow"];
    const Quantity = Aliens.length;
    let butão = document.getElementById('SpinButton');
    let butãorover = document.getElementById('SpinButton:hover');

    let chosenAlien = Aliens[Math.floor(Math.random() * Quantity)];
    const linha = document.getElementById('AlienResult');

    let index = 0;
    const interval = setInterval(() => {
        if (index < 9) {
            linha.innerText = Aliens[Math.floor(Math.random() * Quantity)];
            butão.style.backgroundColor = "gray"
            butão.style.cursor = "not-allowed"
            index++;
        } else {
            linha.innerText = chosenAlien;
            clearInterval(interval);
            butão.style.backgroundColor = "green"
            butão.style.cursor = "pointer"
            butãorover.style.backgroundColor = "rgb(0, 177, 38)"
        }
    }, 100);
} */

function AlienSelector() {
    const Aliens = ["Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Grey Matter", "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreak", "Cannonbolt", "Wildvine", "Blitzwolfer", "Snare-oh", "Frankenstrike", "Upchuck", "Ditto", "Eye Guy", "Way Big", "Spitter", "Arctiguana", "Buzzshock", "Swampfire", "Echo Echo", "Humungousaur", "Jetray", "Big Chill", "Chromastone", "Brainstorm", "Spider Monkey", "Goop", "Alien X", "Lodestar", "Rath", "Nanomech", "Water Hazard", "Ampfibian", "Armodrillo", "Terraspin", "NRG", "Fasttrack", "Clockwork", "Chamalien", "Shocksquatch", "Eatle", "Jury Rigg", "Feedback", "Bloxx", "Gravattack", "Crash Hopper", "Ball Weevil", "Walkatrout", "Pesky Dust", "Molestache", "The Worst", "Kickin Hawk", "Astrodactyl", "Surge", "Gax", "Shock-Rock", "Overflow"];
    const Quantity = Aliens.length;
    let butão = document.getElementById('SpinButton');

    let chosenAlien = Aliens[Math.floor(Math.random() * Quantity)];
    const linha = document.getElementById('AlienResult');

    let index = 0;
    
    butão.classList.add('disabled');

    const interval = setInterval(() => {
        if (index < 9) {
            linha.innerText = Aliens[Math.floor(Math.random() * Quantity)];
            index++;
        } else {
            linha.innerText = chosenAlien;
            clearInterval(interval);
            butão.classList.remove('disabled');
        }
    }, 100);
}
