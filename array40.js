/*const friends = ['jaei', 'seungjae', 'jihan', 'gisang'];*/
/*const friends = Array.of('jaei', 'seungjae', 'jihan', 'gisang');

console.log(friends);

console.log(Array.of(1, 4, 6, true, 'yello'));*/

/*const buttons = document.querySelectorAll('button');*/
const buttons = document.getElementsByClassName('btn');

const ar = Array.from(buttons);

/*console.log(buttons);*/

/*buttons.forEach(button => {
    button.addEventListener('click', () => console.log('I ve been clicked'));
});*/

/*Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => console.log('I ve been clicked'));
});*/

ar.forEach(button => {
    button.addEventListener('click', () => console.log('I ve been clicked'));
});