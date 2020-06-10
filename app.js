const names = ['jaei', 'yuchan', 'seungjae'];

/*const hearts = names.map(function(item) {
    return item + '💖';
});*/

/*function addHeart(item) {
    return item + '💖';
}

const hearts = names.map(addHeart);*/

/*const hearts = names.map(item => {
    return item + '💖';
});*/

/*const hearts = names.map((item, index) => {
    console.log('we are on ', index);
    return item + '💖';
});*/

/*const hearts = names.map((item, index) => item + ' 💖 ' + index);*/

const hearts = names.map(() => '💖');

console.log(hearts);