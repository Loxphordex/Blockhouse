navigator.geolocation.getCurrentPosition(success, fail);

function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
}

function fail(err) {
    console.log(err);
    if (err.code == 1) {
        console.log("User said no");
    }
}