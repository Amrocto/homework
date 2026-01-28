async function race(promises){
    return  new Promise((resolve, reject) => {
        for(value of promises){
            Promise.resolve(value).then(resolve, reject);
        }
});
}