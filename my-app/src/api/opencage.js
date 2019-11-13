const latlong = "34%2C+-118"
const response = fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latlong}&key=dce6d22b4b2f47c0b09b32ec40610a64`, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
    Authentication: "dce6d22b4b2f47c0b09b32ec40610a64"
}
})

response.then((resp) => resp.json()).then(data => console.log(data.results))
.catch(error => console.log(error.message))