/*function sayHi(aName) {
    return 'Hello ' + aName;
}

console.log(sayHi('jaei'));*/

/*function sayHi(aName) {
    return 'Hello ' + (aName || 'anon');
}*/

/*function sayHi(aName = 'anon') {
    return 'Hello ' + aName;
}*/

/*const sayHi = (aName = 'anon') => 'hello ' + aName;*/

const DEFAULT = 'lalalal';

const sayHi = (aName = DEFAULT) => 'hello ' + aName;

console.log(sayHi());