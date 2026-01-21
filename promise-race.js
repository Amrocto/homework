async function race(promises){
    const final = await new Promise((resolve, reject) => {
    promises.forEach(el => {
        try{
            resolve();
        } catch(e){
            reject(e);
    }
    });
});
}