function uniqueSet(set){
    const seenId = new Set();
    const mainSet = new Set();
    set.forEach(element => {
        if(!seenId.has(element.id)) {
            mainSet.add(element);
            seenId.add(element.id);
        }
    });
    console.log(mainSet)
    return mainSet;
}

uniqueSet([
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
  ]);
  