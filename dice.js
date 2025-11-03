function randomDice(dice){
    if(!/^d\d+$/.test(dice)){
        throw new Error('Неверный формат кубика, ожидается d4, d6, d8 и т.д.');
    }
    const max = Number(dice.slice(1));
    return Math.ceil(Math.random() * max);
}
