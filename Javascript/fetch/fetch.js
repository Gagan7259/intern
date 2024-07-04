let root = 'http://jsonplaceholder.typicode.com'
let id = Math.floor(Math.random() * 20) + 1;
let url = root + '/users' + id;

console.log("Fetch", url)


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        let jsondata = JSON.stringify(data)

        let output = document.getElementById("output");
        output.textContent = jsondata
    })
    .catch()