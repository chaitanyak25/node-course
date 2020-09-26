let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("some value")
        // throw "hell";
    }, 1000)
})

promise.then(value => {
    console.log(value)
}).catch(e => {
    console.log("exce " + e);
})