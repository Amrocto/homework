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
const orc1 = new Orc('orc', 'Gork', 'EU', 'axe');
function Elf(race,name,language,spell){
    Character.call(this, race,name,language);
    this.spell = spell;
}
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.spell = function(){
    if (spell <= 0){
        return;
    } else {
        spell--;
    console.log('you were poisoned');
    }
}

Elf.prototype.createSpell = function(){
    spell++;
    console.log(`a spell was created. Quantity: ${spell}`)
}
// function myFunction (){
//     console.log(this);
// }

// const item = {
//     title:'phone'
// };
// myFunction();
// myFunction.call(item)