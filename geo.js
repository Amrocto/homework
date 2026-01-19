p1 = new Promise((resolve,reject) => {
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        reject(err);
      }
      function success(position){
        const crd = position.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        resolve(crd);
      }
    navigator.geolocation.getCurrentPosition(success, error)
});

p1.then(response => console.log(response)).catch(err => console.log(err));


// navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords
//   })


