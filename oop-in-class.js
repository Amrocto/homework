let spell = 0;
class Character{
    constructor(){
        this.race = race;
        this.name = name;
        this.language = language;
    }
    toSpeak(){
        console.log(`language: ${this.language} and name character ${this.name}`)
    }
}

class Orc extends Character{
    constructor(race,name,language,weapon){
        super(race,name,language);
        this.weapon = weapon;
    }
    bit(){
        console.log('a blow occured')
    }
}


const orc1 = new Orc('orc', 'Gork', 'EU', 'axe');

class Elf extends  Character{
    constructor(race,name,language,spell){
        super(race,name,language);
        this.spell = spell;
    }

    spell(){
        if (slell <= 0) {
            return;
        } else {
            spell --;
            console.log('you were poisoned');
        }
    }

    createSpell(){
        spell++;
        console.log(`a spell was created. Quantity ${spell}`)
    }
}



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


// // function-constructor ES5
// function Character(race,name,language){
//     this.race = race;
//     this.name = name;
//     this.language = language;
// }

// Character.prototype.toSpeak = function(){
//     console.log(`language: ${this.language} and name character ${this.name}`)
// }


// function Orc(race,name,language,weapon){
//     Character.call(this,race,name,language)
//     this.weapon = weapon;
// }
// let spell = 0;
// Orc.prototype = Object.create(Character.prototype);
// Orc.prototype.constructor = Orc;


// Orc.prototype.hit = function(){
//     console.log('a blow occurred');
// }
// const orc1 = new Orc('orc', 'Gork', 'EU', 'axe');
// function Elf(race,name,language,spell){
//     Character.call(this, race,name,language);
//     this.spell = spell;
// }
// Elf.prototype = Object.create(Character.prototype);
// Elf.prototype.constructor = Elf;

// Elf.prototype.spell = function(){
//     if (spell <= 0){
//         return;
//     } else {
//         spell--;
//     console.log('you were poisoned');
//     }
// }

// Elf.prototype.createSpell = function(){
//     spell++;
//     console.log(`a spell was created. Quantity: ${spell}`)
// }