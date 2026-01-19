// navigator.geolocation.getCurrentPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude)
// });

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
  })