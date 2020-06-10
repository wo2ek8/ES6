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

const hearts = names.map((item, index) => item + ' 💖 ' + index);

//const hearts = names.map(() => '💖');

console.log(hearts);

const button = document.querySelector('button');

/*button.addEventListener('click', function() {
    console.log(this);
    console.log('i have been clicked');
    
    this.style.backgroundColor = 'red';
});*/

/*button.addEventListener('click', () => {
    console.log(this);
    this.style.backgroundColor = 'red';
});*/

/*const handleClick = () => {
    console.log(this);
};

button.addEventListener('click', handleClick);*/

const jaei = {
    name: 'Jaei',
    age: 23,
    addYear() {
        this.age++;
    }
};

console.log(jaei);
jaei.addYear();
jaei.addYear();
console.log(jaei);