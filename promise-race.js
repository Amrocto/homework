async function race(promises){
    const result = Promise.race(promises);
    return result;
}