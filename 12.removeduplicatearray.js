let array = [{id: 1, name: "Stephen covey" }, {id: 2, name: "Robin Sharma" }, {id: 3, name:
    "Tolstoy"}, {id: 3, name: "Tolstoy"}, {id: 5, name: "James clear"}];


let q = [...new Map(array.map(obj => [JSON.stringify(obj), obj])).values()];

console.log(q)