function Character(race,name,language){
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.toSpeak = function(){
    console.log(`language: ${this.language} and name character ${this.name}`)
}


function Orc(race,name,language,weapon){
    Character.call(this,race,name,language)
    this.weapon = weapon;
}
let spell = 0;
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function(){
    console.log('a blow occurred');
}
Orc.prototype.spell = function(){
    if (spell <= 0){
        return;
    } else {
        spell--;
    console.log('you were poisoned');
    }
}
Orc.prototype.createSpell = function(){
    spell++;
    console.log(`a spell was created. Quantity: ${spell}`)
}
const orc1 = new Orc('orc', 'Gork', 'EU', 'axe');
orc1.toSpeak()

orc1.createSpell();
orc1.spell();
orc1.spell();


// function myFunction (){
//     console.log(this);
// }

// const item = {
//     title:'phone'
// };
// myFunction();
// myFunction.call(item)