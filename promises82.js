/*const amISexy = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Yes you are');
});*/

/*const amISexy = new Promise((resolve, reject) => {
    resolve('Yes you are!');
});*/

const amISexy = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'You are ugly');
});

/*console.log(amISexy);*/

/*setInterval(console.log, 1000, amISexy);*/

/*amISexy.then(value => console.log(value));*/

/*const thenFn = value => console.log(value);*/

/*amISexy.then(thenFn);*/

amISexy.then(result => console.log(result)).catch(error => console.log(error));
